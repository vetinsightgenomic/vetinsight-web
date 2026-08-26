import Link from "next/link";
import { homeContent } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container site-footer__top">
        <div className="footer-brand">
          <Link className="brand brand--footer" href="/" aria-label="VetInsight Genomic ana sayfa">
            <span className="brand__name">
              <span>Vet<span className="brand__accent">Insight</span></span>
              <small>Genomic</small>
            </span>
          </Link>
          <p>{homeContent.footer.description}</p>
        </div>
        <div className="footer-links">
          <div>
            <p>Keşfedin</p>
            <Link href="#teknoloji">Teknoloji</Link>
            <Link href="#cozum">Çözüm odağı</Link>
            <Link href="#bilim">Bilimsel altyapı</Link>
          </div>
          <div>
            <p>VetInsight</p>
            <Link href="#arge">Ar-Ge</Link>
            <Link href="#yol-haritasi">Yol haritası</Link>
            <Link href="#hakkimizda">Misyon ve vizyon</Link>
          </div>
          <div>
            <p>İletişim</p>
            <span>{homeContent.footer.contactNote}</span>
            <span>Pilot geliştirme süreci</span>
          </div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} {homeContent.footer.legalName}</span>
        <span>{homeContent.footer.platformLabel}</span>
      </div>
    </footer>
  );
}
