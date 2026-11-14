const id = {
  nav: {
    home: "Beranda",
    services: "Layanan",
    cases: "Studi Kasus",
    about: "Tentang Saya",
    contact: "Kontak",
  },
  hero: {
    title: "Judul utama (isi nanti)",
    subtitle: "Kalimat pendukung (isi nanti)",
    cta: "Hubungi Saya",
  },
  services: {
    title: "Layanan",
    items: [
      { name: "Audit Data", desc: "Isi nanti" },
      { name: "Pembersihan Penuh", desc: "Isi nanti" },
      { name: "Perawatan Bulanan", desc: "Isi nanti" },
    ],
  },
  cases: { title: "Studi Kasus", desc: "Isi nanti" },
  about: { title: "Tentang Saya", desc: "Isi nanti" },
  contact: { title: "Kontak", desc: "Isi nanti" },
};

const en: typeof id = {
  nav: {
    home: "Home",
    services: "Services",
    cases: "Case Study",
    about: "About Me",
    contact: "Contact",
  },
  hero: {
    title: "Main headline (fill later)",
    subtitle: "Supporting sentence (fill later)",
    cta: "Contact Me",
  },
  services: {
    title: "Services",
    items: [
      { name: "Data Audit", desc: "Fill later" },
      { name: "Full Cleansing", desc: "Fill later" },
      { name: "Monthly Maintenance", desc: "Fill later" },
    ],
  },
  cases: { title: "Case Study", desc: "Fill later" },
  about: { title: "About Me", desc: "Fill later" },
  contact: { title: "Contact", desc: "Fill later" },
};

export type Lang = "id" | "en";
export const content = { id, en };