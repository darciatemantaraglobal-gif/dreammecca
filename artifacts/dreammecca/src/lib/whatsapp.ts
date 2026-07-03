export const WA_NUMBER = "6281234567890";

export const createWALink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_MESSAGE = "Assalamualaikum, saya ingin konsultasi paket Umroh Dreammecca";
