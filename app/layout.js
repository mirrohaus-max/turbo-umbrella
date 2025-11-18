
import "../globals.css";
import Script from "next/script";
import Analytics from "../components/Analytics";
import { site } from "../lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.slogan}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: { type: "website", url: site.url, title: site.name, description: site.description, siteName: site.name, images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og-image.jpg"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <header className="container" role="banner" aria-label="Site header">
          <nav className="nav" aria-label="Primary">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <img src={site.logo} alt={`${site.name} logo`} width={28} height={28} />
              <strong>{site.name}</strong>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              <a href="/" aria-current="page">About</a>
              <a href="/#work">Our Work</a>
              <a className="btn" href={site.ctaHref}>{site.ctaLabel}</a>
            </div>
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="container footer" role="contentinfo">
          <div>© {new Date().getFullYear()} MIRRØHAUS LLC — All Rights Reserved</div>
          <nav aria-label="Footer" style={{display:"flex",gap:12}}>
            <a href={`mailto:${process.env.EMAIL_TO || "hello@mirrohaus.com"}`}>Email</a>
            <a href={site.socials.instagram}>Instagram</a>
            <a href={site.socials.linkedin}>LinkedIn</a>
          </nav>
        </footer>

        <Script id="org-jsonld" type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":"https://schema.org",
              "@type":"Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}${site.logo}`,
              sameAs: Object.values(site.socials)
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
