import { useState } from 'react'
import { Icon } from './Icon'

export function RequestSimulator() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Demonstração visual: integrar ao cálculo de rota/preço do backend futuramente.
    setStatus('Simulação recebida. O cálculo real será exibido após a integração da plataforma.')
  }

  return (
    <section className="request-section section" id="simulacao" aria-labelledby="request-title">
      <div className="container request-layout">
        <div className="request-copy reveal">
          <span className="eyebrow">Planeje seu transporte</span>
          <h2 id="request-title">Descubra a opção ideal para sua rota</h2>
          <p>Preencha as informações iniciais. Você poderá revisar todos os detalhes antes de confirmar.</p>
          <div className="request-note">
            <Icon name="lock" size={20} />
            <span>Seus dados serão usados somente para preparar a solicitação.</span>
          </div>
        </div>

        <form className="request-form reveal" onSubmit={handleSubmit}>
          <p className="form-kicker">Simulação inicial</p>
          <div className="form-grid">
            <label className="field field-wide">
              <span>Local de retirada</span>
              <span className="input-wrap">
                <Icon name="map-pin" size={20} />
                <input name="pickup" type="text" placeholder="Rua, número e cidade" required />
              </span>
            </label>
            <label className="field field-wide">
              <span>Local de entrega</span>
              <span className="input-wrap">
                <Icon name="route" size={20} />
                <input name="delivery" type="text" placeholder="Rua, número e cidade" required />
              </span>
            </label>
            <label className="field">
              <span>Data do transporte</span>
              <span className="input-wrap">
                <Icon name="calendar" size={20} />
                <input name="date" type="date" required />
              </span>
            </label>
            <label className="field">
              <span>Tipo de serviço</span>
              <span className="input-wrap">
                <Icon name="package" size={20} />
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Mudança residencial</option>
                  <option>Entrega de móveis</option>
                  <option>Transporte comercial</option>
                  <option>Outro transporte</option>
                </select>
              </span>
            </label>
          </div>
          <button className="button button-primary form-submit" type="submit">
            Calcular estimativa <Icon name="arrow" size={20} />
          </button>
          <p className="form-disclaimer">Demonstração visual. Nenhum preço ou solicitação real será gerado.</p>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  )
}
