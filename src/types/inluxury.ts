export interface InluxuryPopup {
  visible: boolean;
  image: string; // URL directa de la imagen
  alt: string;
  url?: string;
}

export interface InluxuryPromotion {
  _key: string;
  image: string; // URL directa de la imagen
  alt: string;
  url?: string;
}

export interface InluxuryData {
  popup: InluxuryPopup;
  promotions: InluxuryPromotion[];
}
