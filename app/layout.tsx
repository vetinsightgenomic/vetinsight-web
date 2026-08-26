import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "VetInsight Genomic | Veteriner Genomik Teknoloji Platformu",
  description:
    "Genetik analiz sonuçlarını bilimsel kanıt, varyant değerlendirmesi ve yapılandırılmış yorumlama süreçleriyle veteriner hekimler için anlaşılır bilgiye dönüştüren genomik teknoloji platformu.",
  keywords: [
    "veteriner genomik",
    "genetik varyant değerlendirmesi",
    "veteriner genetik",
    "VetInsight Genomic",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body>
        <a className="skip-link" href="#main-content">İçeriğe geç</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
