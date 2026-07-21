import './App.css'
import { Faq } from './components/Faq'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { RequestSimulator } from './components/RequestSimulator'
import {
  BENEFITS,
  BRAND,
  CLIENT_BENEFITS,
  DRIVER_BENEFITS,
  METRICS,
  NAV_ITEMS,
  PLACEHOLDERS,
  SAFETY_ITEMS,
  STEPS,
  TESTIMONIALS,
  TRANSPORT_TYPES,
  TRUST_ITEMS,
} from './content'

function AppMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`phone-scene ${compact ? 'phone-scene-compact' : ''}`}
      role="img"
      aria-label="Representação visual do futuro aplicativo mostrando uma rota de transporte"
    >
      <div className="scene-orbit orbit-one" />
      <div className="scene-orbit orbit-two" />
      <div className="floating-card floating-pickup">
        <span className="mini-icon"><Icon name="package" size={18} /></span>
        <span><small>Retirada</small>Itens preparados</span>
        <Icon name="check" size={18} />
      </div>
      <div className="floating-card floating-driver">
        <span className="driver-avatar"><Icon name="truck" size={18} /></span>
        <span><small>Motorista a caminho</small>Chegada estimada</span>
      </div>
      <div className="phone-shell">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="app-topbar">
            <span className="mock-logo">{BRAND.logo}</span>
            <span className="avatar-dot" />
          </div>
          <p className="app-greeting">Olá! Para onde vamos?</p>
          <div className="map-card">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-road road-three" />
            <span className="map-route" />
            <span className="map-point point-a"><Icon name="package" size={14} /></span>
            <span className="map-truck"><Icon name="truck" size={17} /></span>
            <span className="map-point point-b"><Icon name="map-pin" size={14} /></span>
          </div>
          <div className="trip-summary">
            <div className="trip-status"><span /> Transporte em andamento</div>
            <div className="trip-row"><span>Retirada</span><strong>Endereço informado</strong></div>
            <div className="trip-line" />
            <div className="trip-row"><span>Entrega</span><strong>Destino informado</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-content reveal">
          <span className="eyebrow hero-eyebrow"><Icon name="truck" size={18} /> Transporte sob demanda</span>
          <h1 id="hero-title">Seu transporte começa com <em>poucos toques.</em></h1>
          <p className="hero-lead">
            Encontre o caminhão ideal para sua mudança ou entrega, acompanhe o trajeto e transporte seus itens com mais segurança e praticidade.
          </p>
          <p className="brand-slogan">{BRAND.slogan}</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#simulacao">
              Solicitar um caminhão <Icon name="arrow" size={20} />
            </a>
            <a className="button button-secondary button-large" href="#motoristas">
              Quero ser motorista parceiro
            </a>
          </div>
          <div className="trust-row" aria-label="Diferenciais planejados da plataforma">
            {TRUST_ITEMS.map((item) => (
              <div className="trust-item" key={item.label}>
                <Icon name={item.icon} size={19} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal">
          <AppMockup />
        </div>
      </div>
      <div className="hero-service-strip">
        <div className="container service-strip-inner">
          <span>Uma plataforma para</span>
          <strong><Icon name="home" size={20} /> Mudanças residenciais</strong>
          <strong><Icon name="building" size={20} /> Entregas comerciais</strong>
          <strong><Icon name="package" size={20} /> Itens volumosos</strong>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section how-section" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">Simples do início ao destino</span>
          <h2 id="how-title">Como funciona</h2>
          <p>Da escolha do caminhão ao acompanhamento da entrega, tudo em uma jornada clara.</p>
        </div>
        <ol className="steps-grid">
          {STEPS.map((step, index) => (
            <li className="step-card reveal" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="icon-box"><Icon name={step.icon} /></span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < STEPS.length - 1 && <span className="step-connector" aria-hidden="true"><Icon name="arrow" /></span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function TransportTypes() {
  return (
    <section className="section transport-section" id="transportes" aria-labelledby="transport-title">
      <div className="container">
        <div className="section-heading split-heading reveal">
          <div>
            <span className="eyebrow">Um veículo para cada necessidade</span>
            <h2 id="transport-title">Do móvel avulso à mudança completa</h2>
          </div>
          <p>Escolha a categoria mais próxima do que precisa transportar. A disponibilidade será confirmada para sua região.</p>
        </div>
        <div className="transport-grid">
          {TRANSPORT_TYPES.map((transport, index) => (
            <article className={`transport-card reveal ${index === 2 ? 'featured' : ''}`} key={transport.name}>
              {index === 2 && <span className="card-tag">Mais espaço</span>}
              <div className="transport-illustration">
                <span className={`vehicle vehicle-${(index % 4) + 1}`}><Icon name={transport.icon} size={42} /></span>
                <span className="cargo-box box-one" />
                <span className="cargo-box box-two" />
              </div>
              <h3>{transport.name}</h3>
              <p>{transport.description}</p>
              <strong>{transport.bestFor}</strong>
              <span className="price-note">Valor calculado conforme a rota e o serviço</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section benefits-section" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">Praticidade em cada etapa</span>
          <h2 id="benefits-title">Tudo o que você precisa para transportar melhor</h2>
          <p>Recursos planejados para trazer organização, visibilidade e confiança à sua experiência.</p>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((benefit) => (
            <article className="benefit-card reveal" key={benefit.title}>
              <span className="benefit-icon"><Icon name={benefit.icon} /></span>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Safety() {
  return (
    <section className="section safety-section" id="seguranca" aria-labelledby="safety-title">
      <div className="container safety-layout">
        <div className="safety-visual reveal" aria-hidden="true">
          <div className="safety-shield"><Icon name="lock" size={54} /></div>
          <div className="security-card security-card-one"><Icon name="user-check" /><span><strong>Perfil verificado</strong>Validação de cadastro</span><Icon name="check" /></div>
          <div className="security-card security-card-two"><Icon name="navigation" /><span><strong>Trajeto compartilhado</strong>Mais visibilidade na rota</span><Icon name="check" /></div>
          <div className="security-ring ring-one" />
          <div className="security-ring ring-two" />
        </div>
        <div className="safety-content reveal">
          <span className="eyebrow">Segurança em desenvolvimento</span>
          <h2 id="safety-title">Confiança para quem envia e para quem transporta</h2>
          <p>A plataforma foi concebida para reunir informações importantes do serviço e criar uma experiência mais transparente.</p>
          <ul className="check-list safety-list">
            {SAFETY_ITEMS.map((item) => <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>)}
          </ul>
          <p className="planned-note"><Icon name="shield" size={18} /> Estes mecanismos são recursos planejados e devem ser validados antes do lançamento.</p>
        </div>
      </div>
    </section>
  )
}

function CustomerApp() {
  return (
    <section className="section customer-section" id="aplicativo" aria-labelledby="customer-title">
      <div className="container app-layout">
        <div className="app-copy reveal">
          <span className="eyebrow">Para quem precisa transportar</span>
          <h2 id="customer-title">Sua mudança organizada em um só aplicativo</h2>
          <p>Menos ligações e incertezas. Centralize as informações essenciais e acompanhe cada etapa do serviço.</p>
          <ul className="check-list">
            {CLIENT_BENEFITS.map((item) => <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>)}
          </ul>
          <div className="store-buttons" aria-label="Links futuros para baixar o aplicativo">
            <button className="store-button" type="button" aria-disabled="true" title="Link será adicionado no lançamento">
              <Icon name="smartphone" /><span><small>Disponível futuramente</small>{PLACEHOLDERS.googlePlay}</span>
            </button>
            <button className="store-button" type="button" aria-disabled="true" title="Link será adicionado no lançamento">
              <Icon name="smartphone" /><span><small>Disponível futuramente</small>{PLACEHOLDERS.appStore}</span>
            </button>
          </div>
        </div>
        <div className="app-visual reveal"><AppMockup compact /></div>
      </div>
    </section>
  )
}

function Drivers() {
  return (
    <section className="section drivers-section" id="motoristas" aria-labelledby="drivers-title">
      <div className="container drivers-card reveal">
        <div className="drivers-copy">
          <span className="eyebrow eyebrow-light">Para motoristas e transportadores</span>
          <h2 id="drivers-title">Seu caminhão em movimento. Novas oportunidades no caminho.</h2>
          <p>Receba solicitações com informações claras e escolha os transportes que combinam com sua operação.</p>
          <ul className="driver-list">
            {DRIVER_BENEFITS.map((item) => <li key={item}><Icon name="check" size={17} />{item}</li>)}
          </ul>
          <a className="button button-white button-large" href="#cadastro-parceiro">Quero ser motorista parceiro <Icon name="arrow" size={20} /></a>
        </div>
        <div className="driver-dashboard" aria-label="Representação visual do painel futuro do motorista">
          <div className="dashboard-top"><span className="mock-logo">{BRAND.logo}</span><span className="online-pill">Disponível</span></div>
          <p>Olá, parceiro</p>
          <h3>Novas solicitações</h3>
          <div className="job-card">
            <div><span className="job-icon"><Icon name="route" /></span><strong>Transporte disponível</strong></div>
            <div className="job-route"><span>A</span><p><small>Retirada</small>Região informada</p></div>
            <div className="job-route"><span>B</span><p><small>Entrega</small>Destino informado</p></div>
            <button type="button" aria-disabled="true">Ver detalhes da rota</button>
          </div>
          <div className="dashboard-nav"><Icon name="home" /><Icon name="route" /><Icon name="wallet" /><Icon name="history" /></div>
        </div>
      </div>
      <span id="cadastro-parceiro" className="anchor-target" />
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">Histórias que serão contadas</span>
          <h2 id="testimonials-title">A experiência de quem usa</h2>
          <p>Conteúdo provisório. Substitua os campos abaixo somente por depoimentos reais e autorizados.</p>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <article className="testimonial-card reveal" key={index}>
              <div className="quote-mark" aria-hidden="true">“</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-person">
                <span className="photo-placeholder">{testimonial.photo}</span>
                <div><strong>{testimonial.name}</strong><span>{testimonial.rating}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Metrics() {
  return (
    <section className="metrics-section" aria-labelledby="metrics-title">
      <div className="container">
        <div className="metrics-note" id="metrics-title"><Icon name="history" size={18} /> Substitua por dados reais e auditados antes da publicação.</div>
        <div className="metrics-grid">
          {METRICS.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="cta-title">
      <div className="cta-route" aria-hidden="true"><Icon name="route" size={160} /></div>
      <div className="container cta-content reveal">
        <span className="eyebrow eyebrow-light">Seu próximo transporte pode ser mais simples</span>
        <h2 id="cta-title">Precisa transportar? Encontre o caminhão certo para sua necessidade.</h2>
        <div className="cta-actions">
          <a className="button button-white button-large" href="#simulacao">Solicitar um caminhão <Icon name="arrow" size={20} /></a>
          <a className="button button-outline-white button-large" href="#motoristas">Cadastrar meu caminhão</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand brand-footer" href="#inicio"><span className="brand-logo">{BRAND.logo}</span><span className="brand-name">{BRAND.name}</span></a>
          <p>{BRAND.description}</p>
          <strong>{BRAND.slogan}</strong>
        </div>
        <div className="footer-column"><h2>Produto</h2><ul>{NAV_ITEMS.slice(1, 4).map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}<li><a href="#transportes">Tipos de transporte</a></li></ul></div>
        <div className="footer-column"><h2>Ajuda e informações</h2><ul><li><a href="#faq">Central de ajuda</a></li><li><span>Termos de uso {PLACEHOLDERS.legalLink}</span></li><li><span>Política de privacidade {PLACEHOLDERS.legalLink}</span></li><li><span>Contato: {PLACEHOLDERS.contactEmail}</span></li></ul></div>
        <div className="footer-column"><h2>Redes sociais</h2><ul><li><span>{PLACEHOLDERS.instagram}</span></li><li><span>{PLACEHOLDERS.linkedin}</span></li><li><span>{PLACEHOLDERS.facebook}</span></li></ul></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p><p>Produto em desenvolvimento. Informações sujeitas a alterações.</p></div>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <RequestSimulator />
        <HowItWorks />
        <TransportTypes />
        <Benefits />
        <Safety />
        <CustomerApp />
        <Drivers />
        <Testimonials />
        <Metrics />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
