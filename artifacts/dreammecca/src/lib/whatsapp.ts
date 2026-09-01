export const WA_NUMBER = "6281225740093";

export const createWALink = (message: string, waNumber: string = WA_NUMBER) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_MESSAGE = "Assalamu'alaikum, saya mau konsultasi jadwal umroh Dreammecca.\n\nNama:\nKota:\nRencana bulan berangkat:";
