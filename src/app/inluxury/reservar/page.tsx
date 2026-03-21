"use client";

import { useState } from "react";
import Link from "next/link";

export default function InLuxuryReservaPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    dni: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    const dniRegex = /^[0-9]{8,12}$/; // DNI or CE
    const phoneRegex = /^9[0-9]{8}$/; // Peruvian mobile format

    if (!dniRegex.test(formData.dni)) {
      alert("Por favor, ingrese un DNI o CE válido (8-12 dígitos).");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Por favor, ingrese un número de celular válido (9 dígitos, comenzando con 9).");
      return;
    }

    const message = `Hola, quiero realizar una reserva en InLuxury.%0A%0A*Mis Datos:*%0A- *Nombre:* ${formData.fullname}%0A- *DNI:* ${formData.dni}%0A- *Correo:* ${formData.email}%0A- *Celular:* ${formData.phone}`;
    const wspUrl = `https://wa.me/908527116?text=${message}`;

    window.open(wspUrl, "_blank");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#A1706D",
      }}
    >
      <section
        style={{
          width: "min(100%, 500px)",
          background: "rgba(255,255,255,0.98)",
          borderRadius: 24,
          padding: "clamp(24px, 6vw, 40px)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "var(--font-in-playfair, Georgia, serif)",
              color: "#2E1A0D",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Reserva tu evaluación
          </h1>
          <p
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              color: "#5F4A3D",
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            Completa tus datos para coordinar tu cita personalizada por WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label
              htmlFor="fullname"
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                color: "#2E1A0D",
              }}
            >
              Nombre completo
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              placeholder="Ingresa tu nombre y apellido"
              value={formData.fullname}
              onChange={handleChange}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #E5D8CC",
                fontSize: 14,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A1706D")}
              onBlur={(e) => (e.target.style.borderColor = "#E5D8CC")}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              htmlFor="dni"
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                color: "#2E1A0D",
              }}
            >
              Número de DNI / CE
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              required
              maxLength={12}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Ingresa tu DNI o CE"
              value={formData.dni}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setFormData(prev => ({ ...prev, dni: val }));
              }}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #E5D8CC",
                fontSize: 14,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A1706D")}
              onBlur={(e) => (e.target.style.borderColor = "#E5D8CC")}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              htmlFor="email"
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                color: "#2E1A0D",
              }}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #E5D8CC",
                fontSize: 14,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A1706D")}
              onBlur={(e) => (e.target.style.borderColor = "#E5D8CC")}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              htmlFor="phone"
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 13,
                fontWeight: 600,
                color: "#2E1A0D",
              }}
            >
              Número de celular
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={9}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="999999999"
              value={formData.phone}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                if (val.length <= 9) {
                  setFormData(prev => ({ ...prev, phone: val }));
                }
              }}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid #E5D8CC",
                fontSize: 14,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#A1706D")}
              onBlur={(e) => (e.target.style.borderColor = "#E5D8CC")}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 10,
              padding: "14px",
              borderRadius: 14,
              border: "none",
              background: "#A1706D",
              color: "#fff",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: "0 8px 20px rgba(161, 112, 109, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(161, 112, 109, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(161, 112, 109, 0.25)";
            }}
          >
            Enviar por WhatsApp
          </button>

          <Link
            href="/inluxury"
            style={{
              textAlign: "center",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 13,
              color: "#5F4A3D",
              textDecoration: "none",
              marginTop: 12,
              opacity: 0.8,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            ← Volver a inicio
          </Link>
        </form>
      </section>
    </main>
  );
}

