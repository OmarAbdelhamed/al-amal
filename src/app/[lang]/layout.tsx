import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { dirOf, getDict } from "@/lib/i18n";
import { LANGS, isLang } from "@/lib/types";
import "../globals.css";

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#FBF8F3" };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang);
  const name = lang === "ar" ? "مدرسة الأمل" : "Al-Amal School";
  return {
    title: { default: name, template: `%s · ${name}` },
    description: t.home.lead,
    icons: { icon: "/logo-mark.png" },
    alternates: { languages: { en: "/en", ar: "/ar" } }
  };
}

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={dirOf(lang)}>
      <head>
        {/* Google Fonts by family name: the SVG illustrations reference these names directly. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Nunito+Sans:opsz,wght@6..12,400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Tajawal:wght@500;700;800&display=swap"
        />
      </head>
      <body>
        <Header lang={lang} />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
