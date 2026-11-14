"use client";
import { useEffect, useState } from "react";
import { content, Lang } from "./content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("id");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "id" || saved === "en") setLang(saved);
  }, []);

  function pilihBahasa(l: Lang) {
    setLang(l);
    localStorage.setItem("lang", l);
  }

  const t = content[lang];
  const menu = [
    { id: "beranda", label: t.nav.home },
    { id: "layanan", label: t.nav.services },
    { id: "studi-kasus", label: t.nav.cases },
    { id: "tentang", label: t.nav.about },
    { id: "kontak", label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
  <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
    {/* Menu untuk layar lebar */}
    <nav className="hidden gap-4 text-sm md:flex">
      {menu.map((m) => (
        <a key={m.id} href={`#${m.id}`} className="hover:text-blue-600">
          {m.label}
        </a>
      ))}
    </nav>

    {/* Tombol garis tiga untuk HP */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menu"
      className="text-2xl leading-none md:hidden"
    >
      {menuOpen ? "✕" : "☰"}
    </button>

    {/* Pilihan bahasa */}
    <div className="text-sm">
      <button
        onClick={() => pilihBahasa("id")}
        className={lang === "id" ? "font-bold text-blue-600" : ""}
      >
        ID
      </button>
      {" | "}
      <button
        onClick={() => pilihBahasa("en")}
        className={lang === "en" ? "font-bold text-blue-600" : ""}
      >
        EN
      </button>
    </div>
  </div>

  {/* Daftar menu yang terbuka di HP */}
  {menuOpen && (
    <nav className="flex flex-col border-t px-4 py-2 text-sm md:hidden">
      {menu.map((m) => (
        <a
          key={m.id}
          href={`#${m.id}`}
          onClick={() => setMenuOpen(false)}
          className="py-2 hover:text-blue-600"
        >
          {m.label}
        </a>
      ))}
    </nav>
  )}
</header>

      <main className="mx-auto max-w-4xl px-4">
        <section id="beranda" className="scroll-mt-16 py-20">
          <h1 className="text-3xl font-bold">{t.hero.title}</h1>
          <p className="mt-3 text-slate-600">{t.hero.subtitle}</p>
          <a
            href="#kontak"
            className="mt-6 inline-block rounded bg-blue-600 px-5 py-2 text-white"
          >
            {t.hero.cta}
          </a>
        </section>

        <section id="layanan" className="scroll-mt-16 py-16">
          <h2 className="text-2xl font-bold">{t.services.title}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.services.items.map((s) => (
              <div key={s.name} className="rounded border p-4">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="studi-kasus" className="scroll-mt-16 py-16">
          <h2 className="text-2xl font-bold">{t.cases.title}</h2>
          <p className="mt-3 text-slate-600">{t.cases.desc}</p>
        </section>

        <section id="tentang" className="scroll-mt-16 py-16">
          <h2 className="text-2xl font-bold">{t.about.title}</h2>
          <p className="mt-3 text-slate-600">{t.about.desc}</p>
        </section>

        <section id="kontak" className="scroll-mt-16 py-16">
          <h2 className="text-2xl font-bold">{t.contact.title}</h2>
          <p className="mt-3 text-slate-600">{t.contact.desc}</p>
        </section>
      </main>
    </div>
  );
}