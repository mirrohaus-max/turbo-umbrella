
import Image from "next/image";
import { site } from "../lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="container">
          <h1 id="home-title" style={{marginBottom:8}}>{site.name}</h1>
          <p style={{fontSize:"1.25rem",maxWidth:"40rem",margin:"0 0 1.25rem"}}>
            {site.slogan}
          </p>
          <a className="btn" href={site.ctaHref}>{site.ctaLabel}</a>
        </div>
      </section>

      <section className="section" aria-labelledby="about">
        <div className="container">
          <h2 id="about">About {site.name}</h2>
          <p>MIRRØHAUS is a multidisciplinary creative house built for founders, visionaries, and brands that refuse to blend in.</p>
          <p>We specialize in transforming raw ideas into iconic identities—through design, storytelling, strategy, and culture.</p>
          <ul>
            <li>Brand identity & creative direction</li>
            <li>Fashion & product design</li>
            <li>Web design & digital experiences</li>
            <li>Storytelling & content systems</li>
            <li>Culture-focused marketing</li>
          </ul>
          <p className="quote">If you’re building something <em>bold, original, or culturally impactful</em>, you’re in the right place.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="work" id="work">
        <div className="container">
          <h2 id="work">Our Work</h2>
          <div className="work">
            <a className="card" href="/projects/yb-goode" aria-label="YB Goode case study">
              <Image className="thumb" src="/work/ybgoode.jpg" alt="" width={640} height={360} />
              <div style={{marginTop:12}}><strong>YB Goode</strong><div className="meta">Streetwear. Denim. Expression.</div></div>
            </a>
            <a className="card" href="/projects/void-label" aria-label="The VØID Label case study">
              <Image className="thumb" src="/work/thevoidlabel.jpg" alt="" width={640} height={360} />
              <div style={{marginTop:12}}><strong>The VØID Label</strong><div className="meta">Avant-garde fashion for modern men.</div></div>
            </a>
            <a className="card" href="/projects/club-69" aria-label="Club 69 case study">
              <Image className="thumb" src="/work/club69.jpg" alt="" width={640} height={360} />
              <div style={{marginTop:12}}><strong>Club 69</strong><div className="meta">Adult lifestyle. Bold creativity.</div></div>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="cta">
        <div className="container" style={{textAlign:"center"}}>
          <h2 id="cta">Let’s Build Something Iconic</h2>
          <a className="btn" href={site.ctaHref}>{site.ctaLabel}</a>
        </div>
      </section>
    </>
  );
}
