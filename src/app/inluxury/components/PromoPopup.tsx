"use client";

import { useCallback, useEffect } from "react";

type PromoPopupProps = {
  open: boolean;
  onClose: () => void;
  imageSrc?: string;
  alt?: string;
};

export function PromoPopup({
  open,
  onClose,
  imageSrc,
  alt = "Promocion",
}: PromoPopupProps) {
  const src = imageSrc?.trim();
  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!open || !src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px",
        zIndex: 2000,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: "relative",
          width: "min(520px, 92vw)",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
          background: "#fff",
        }}
      >
        <button
          aria-label="Cerrar"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid rgba(0,0,0,0.08)",
            background: "rgba(255,255,255,0.9)",
            color: "#5a2a0c",
            fontWeight: 700,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          x
        </button>
        <img
          src={src}
          alt={alt}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
