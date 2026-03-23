"use client";

import { useCallback, useEffect, useState } from "react";
import { PromoPopup } from "./PromoPopup";
import type { InluxuryPopup } from "@/types/inluxury";

interface Props {
  popup: InluxuryPopup | null;
}

export function PromoPopupMount({ popup }: Props) {
  const hasPopupImage = Boolean(popup?.image?.trim());
  const shouldOpen = Boolean(popup?.visible && hasPopupImage);
  const [open, setOpen] = useState(shouldOpen);

  useEffect(() => {
    setOpen(shouldOpen);
  }, [shouldOpen]);

  const close = useCallback(() => setOpen(false), []);

  if (!popup || !hasPopupImage) return null;

  return (
    <PromoPopup
      open={open}
      onClose={close}
      imageSrc={popup.image}
      alt={popup.alt}
      url={popup.url}
    />
  );
}
