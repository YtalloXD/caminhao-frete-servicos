import { FAQ_ITEMS } from '../content'
import { Icon } from './Icon'

export function Faq() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="section-heading faq-heading reveal">
          <span className="eyebrow">Dúvidas frequentes</span>
          <h2 id="faq-title">Respostas para você seguir com tranquilidade</h2>
          <p>Não encontrou o que procura? Nosso canal de ajuda será disponibilizado junto ao lançamento.</p>
        </div>
        <div className="faq-list reveal">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon"><Icon name="chevron" size={20} /></span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
