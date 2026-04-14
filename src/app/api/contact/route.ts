import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, telefono, emailDestino, paginaOrigen, honeypot } = body;

    // Proteccion simple contra spam
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const date = new Date().toLocaleString("es-PE", {
      timeZone: "America/Lima",
    });

    // 2. Usas la función cambiando solamente el nombre de la hoja, los encabezados y los valores
    await appendToSheet({
      sheetName: "Contacto", // Hoja para el formulario general
      headers: ["Fecha Plasmada", "Nombres", "Teléfono", "Email Destino", "Página Origen"], // Los títulos de las columnas
      values: [date, nombre, telefono, emailDestino, paginaOrigen], // Las variables que recibes del formulario
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error writing to Google Sheets (Contacto):", error);
    return NextResponse.json(
      { error: error.message || "Ocurrió un error al guardar los datos" },
      { status: 500 }
    );
  }
}
