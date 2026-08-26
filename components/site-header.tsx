import Link from "next/link";

const navigation = [
  { label: "Teknoloji", href: "#teknoloji" },
  { label: "Çözümler", href: "#cozum" },
  { label: "Kimler için?", href: "#kimler-icin" },
  { label: "Bilim ve Ar-Ge", href: "#bilim" },
  { label: "Hakkımızda", href: "#hakkimizda" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" href="/" aria-label="VetInsight Genomic ana sayfa">
          <span className="brand__name">
            <span>Vet<span className="brand__accent">Insight</span></span>
            <small>Genomic</small>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Ana navigasyon">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="header-cta" href="#iletisim">
          İletişim <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <nav className="mobile-nav" aria-label="Mobil navigasyon">
        <div className="container mobile-nav__inner">
          {navigation.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
          <Link href="#iletisim">İletişim</Link>
        </div>
      </nav>
    </header>
  );
}
