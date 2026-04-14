import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, telefono, emailDestino, paginaOrigen, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const date = new Date().toLocaleString("es-PE", {
      timeZone: "America/Lima",
    });

    await appendToSheet({
      sheetName: "Lunares",
      headers: ["Fecha", "Nombres", "Teléfono", "Email Destino", "Página Origen"],
      values: [date, nombre, telefono, emailDestino || "lunares@inaesthetics.pe", paginaOrigen || "/lunares"],
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error writing to Google Sheets (Lunares):", error);
    return NextResponse.json(
      { error: error.message || "Ocurrió un error al guardar los datos" },
      { status: 500 }
    );
  }
}
