import { homeContent } from "@/content/home";

export default function Home() {
  const content = homeContent;

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              {content.hero.eyebrow}
            </p>
            <h1 id="hero-title">
              {content.hero.title} <span>{content.hero.titleAccent}</span>
            </h1>
            <p className="hero__lead">{content.hero.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#teknoloji">
                {content.hero.primaryAction}
                <span aria-hidden="true">↘</span>
              </a>
              <a className="button button--secondary" href="#cozum">
                {content.hero.secondaryAction}
              </a>
            </div>
            <p className="hero__note">{content.hero.note}</p>
          </div>

          <div className="hero-visual" aria-label={content.hero.visual.ariaLabel}>
            <div className="hero-visual__topline">
              <span>{content.hero.visual.label}</span>
              <span className="status-badge">{content.hero.visual.status}</span>
            </div>
            <div className="signal-field" aria-hidden="true">
              <span className="signal signal--1" />
              <span className="signal signal--2" />
              <span className="signal signal--3" />
              <span className="signal signal--4" />
              <span className="signal signal--5" />
              <span className="signal signal--6" />
              <span className="signal signal--7" />
              <span className="signal signal--8" />
              <span className="signal signal--9" />
              <span className="signal signal--10" />
              <span className="signal signal--11" />
              <span className="signal signal--12" />
            </div>
            <div className="hero-visual__layers">
              {content.hero.visual.layers.map((layer, index) => (
                <div key={layer}>
                  <span className="layer-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{layer}</span>
                </div>
              ))}
            </div>
            <div className="hero-visual__result">
              <span className="result-mark" aria-hidden="true">VI</span>
              <div>
                <small>{content.hero.visual.resultLabel}</small>
                <strong>{content.hero.visual.result}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problem" id="ihtiyac" aria-labelledby="problem-title">
        <div className="container split-layout">
          <div>
            <p className="section-kicker">{content.problem.kicker}</p>
            <h2 id="problem-title">{content.problem.title}</h2>
          </div>
          <div className="prose-block">
            <p className="prose-block__lead">{content.problem.lead}</p>
            <p>{content.problem.description}</p>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="teknoloji" aria-labelledby="technology-title">
        <div className="container">
          <div className="section-heading section-heading--wide">
            <div>
              <p className="section-kicker">{content.technology.kicker}</p>
              <h2 id="technology-title">{content.technology.title}</h2>
            </div>
            <p>{content.technology.description}</p>
          </div>
          <ol className="workflow">
            {content.technology.steps.map((step) => (
              <li className="workflow__item" key={step.number}>
                <span className="workflow__number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="cozum" aria-labelledby="solution-title">
        <div className="container solution-grid">
          <div className="solution-intro">
            <p className="section-kicker">{content.solution.kicker}</p>
            <h2 id="solution-title">{content.solution.title}</h2>
            <p>{content.solution.description}</p>
            <span className="status-badge status-badge--large">{content.solution.status}</span>
          </div>
          <div className="focus-panel">
            <p className="focus-panel__label">{content.solution.panelLabel}</p>
            <div className="product-families">
              {content.solution.productFamilies.map((family) => (
                <article className={`product-family${family.planned ? " product-family--planned" : ""}`} key={family.title}>
                  <h3>{family.title}</h3>
                  <ul>
                    {family.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <span className="product-family__status">{family.status}</span>
                </article>
              ))}
            </div>
            <p className="focus-panel__footnote">{content.solution.footnote}</p>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="kimler-icin" aria-labelledby="audience-title">
        <div className="container">
          <div className="section-heading section-heading--wide">
            <div>
              <p className="section-kicker">{content.audiences.kicker}</p>
              <h2 id="audience-title">{content.audiences.title}</h2>
            </div>
            <p>{content.audiences.description}</p>
          </div>
          <div className="audience-grid">
            {content.audiences.items.map((audience) => (
              <article className={`audience-card${audience.primary ? " audience-card--primary" : ""}`} key={audience.title}>
                <span className="audience-card__mark" aria-hidden="true" />
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
                {audience.primary && <span className="audience-card__tag">{content.audiences.primaryTag}</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="bilim" aria-labelledby="science-title">
        <div className="container science-grid">
          <div>
            <p className="section-kicker">{content.science.kicker}</p>
            <h2 id="science-title">{content.science.title}</h2>
          </div>
          <div className="science-principles">
            {content.science.principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section research" id="arge" aria-labelledby="research-title">
        <div className="container research__inner">
          <div className="research__content">
            <p className="section-kicker">{content.research.kicker}</p>
            <h2 id="research-title">{content.research.title}</h2>
            <p>{content.research.description}</p>
          </div>
          <div className="research-map" aria-label={content.research.mapAriaLabel}>
            <div className="research-map__core">
              {content.research.core[0]}<br />{content.research.core[1]}
            </div>
            {content.research.areas.map((area) => (
              <div className="research-map__item" key={area}>{area}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="yol-haritasi" aria-labelledby="roadmap-title">
        <div className="container">
          <div className="section-heading section-heading--wide">
            <div>
              <p className="section-kicker">{content.roadmap.kicker}</p>
              <h2 id="roadmap-title">{content.roadmap.title}</h2>
            </div>
            <p>{content.roadmap.description}</p>
          </div>
          <div className="roadmap-grid">
            {content.roadmap.items.map((item, index) => (
              <article className="roadmap-card" key={item.phase}>
                <div className="roadmap-card__topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="status-badge">{item.status}</span>
                </div>
                <p className="roadmap-card__phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section purpose" id="hakkimizda" aria-labelledby="purpose-title">
        <div className="container">
          <p className="section-kicker">{content.purpose.kicker}</p>
          <h2 id="purpose-title" className="sr-only">{content.purpose.accessibleTitle}</h2>
          <div className="purpose-grid">
            <article>
              <span>{content.purpose.mission.label}</span>
              <h3>{content.purpose.mission.text}</h3>
            </article>
            <article>
              <span>{content.purpose.vision.label}</span>
              <h3>{content.purpose.vision.text}</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-cta" id="iletisim" aria-labelledby="contact-title">
        <div className="container contact-cta__inner">
          <div>
            <p className="section-kicker">{content.contact.kicker}</p>
            <h2 id="contact-title">{content.contact.title}</h2>
          </div>
          <div className="contact-cta__copy">
            <p>{content.contact.description}</p>
            <span className="contact-availability">{content.contact.availability}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
