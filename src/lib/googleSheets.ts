import { google } from "googleapis";

interface AppendToSheetOptions {
  sheetName: string;
  headers: string[];
  values: (string | number | boolean | null)[];
}

export async function appendToSheet({
  sheetName,
  headers,
  values,
}: AppendToSheetOptions) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Decodificamos la clave desde Base64 para evitar errores de formato en el .env
  const privateKeyB64 = process.env.GOOGLE_PRIVATE_KEY_BASE64;
  const privateKey = privateKeyB64 
    ? Buffer.from(privateKeyB64, 'base64').toString('utf-8').replace(/\\n/g, "\n").trim()
    : undefined;
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error("Missing Google Sheets environment variables");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    // 1. Verificamos si la pestaña/hoja existe y tiene encabezados
    const checkResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `'${sheetName}'!A1:Z1`, 
    });

    // 2. Si no hay datos (la hoja está vacía), agregamos los headers
    if (!checkResponse.data.values || checkResponse.data.values.length === 0) {
      await addHeaders(sheets, spreadsheetId, sheetName, headers);
    }
  } catch (err: any) {
    // Si el error es que la hoja no existe (400/404), intentamos crearla
    if (err.status === 400 || err.status === 404 || err.message.includes("range")) {
       console.log(`La pestaña "${sheetName}" no existe. Creándola...`);
       
       // Creamos la pestaña
       await sheets.spreadsheets.batchUpdate({
         spreadsheetId,
         requestBody: {
           requests: [{ addSheet: { properties: { title: sheetName } } }]
         }
       });

       // Agregamos los encabezados a la nueva pestaña
       await addHeaders(sheets, spreadsheetId, sheetName, headers);
    } else {
      throw err;
    }
  }

  // 3. Agregamos la nueva fila de datos
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${sheetName}'!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });

  return { success: true };
}

/**
 * Función auxiliar para agregar encabezados con estilo
 */
async function addHeaders(sheets: any, spreadsheetId: string, sheetName: string, headers: string[]) {
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `'${sheetName}'!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [headers],
    },
  });

  // Estilo para los encabezados
  const spreadsheetInfo = await sheets.spreadsheets.get({ spreadsheetId });
  const sheetInfo = spreadsheetInfo.data.sheets?.find(
    (s: any) => s.properties?.title === sheetName
  );
  const sheetId = sheetInfo?.properties?.sheetId;

  if (sheetId !== undefined) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: sheetId,
                startRowIndex: 0,
                endRowIndex: 1,
                startColumnIndex: 0,
                endColumnIndex: headers.length,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.1, green: 0.3, blue: 0.4 },
                  textFormat: {
                    bold: true,
                    foregroundColor: { red: 1, green: 1, blue: 1 },
                  },
                  horizontalAlignment: "CENTER",
                },
              },
              fields: "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)",
            },
          },
        ],
      },
    });
  }
}
