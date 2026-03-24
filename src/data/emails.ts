// Configuración centralizada de emails por servicio
export const EMAIL_DESTINATIONS = {
  // Servicios principales
  enzimas: "Info@inaesthetics.pe", 
  hydrafacial: "Info@inaesthetics.pe",
  lunares: "Info@inaesthetics.pe",
  
  // Departamentos
  ventas: "ventas@inaesthetics.pe",
  consultas: "consultas@inaesthetics.pe",
  soporte: "soporte@inaesthetics.pe",
  
  // Email por defecto (se usa si no se especifica)
  default: process.env.EMAIL_USER || "Info@inaesthetics.pe"
} as const;

// Configuración centralizada de páginas origen
export const PAGINA_ORIGEN = {
  enzimas: "Enzimas - Reducción de Grasa Localizada (/enzimas)",
  hydrafacial: "HydraFacial - Tratamiento Facial (/hydrafacial)",
  lunares: "Eliminación de Lunares - Láser CO2 (/lunares)",
  home: "Página Principal - Inaesthetics (/)",
  
  // Páginas especiales
  promo: "Página de Promoción",
  landing: "Landing Page Externa",
  whatsapp: "Botón WhatsApp Flotante",
} as const;

// Tipos para autocompletado
export type EmailDestination = keyof typeof EMAIL_DESTINATIONS;
export type PaginaOrigen = keyof typeof PAGINA_ORIGEN; 