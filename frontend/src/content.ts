export const BRAND = {
  name: '[NOME DO APLICATIVO]',
  logo: '[LOGO DO APLICATIVO]',
  slogan: '[SLOGAN DO APLICATIVO]',
  description:
    'Uma plataforma para conectar quem precisa transportar com motoristas e caminhões disponíveis.',
}

export const PLACEHOLDERS = {
  googlePlay: '[BAIXAR NA GOOGLE PLAY]',
  appStore: '[BAIXAR NA APP STORE]',
  legalLink: '[LINK A DEFINIR]',
  contactEmail: '[E-MAIL DE CONTATO]',
  instagram: '[LINK DO INSTAGRAM]',
  linkedin: '[LINK DO LINKEDIN]',
  facebook: '[LINK DO FACEBOOK]',
}

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Segurança', href: '#seguranca' },
  { label: 'Perguntas frequentes', href: '#faq' },
]

export const TRUST_ITEMS = [
  { icon: 'user-check', label: 'Motoristas verificados' },
  { icon: 'navigation', label: 'Acompanhamento em tempo real' },
  { icon: 'lock', label: 'Pagamento seguro' },
]

export const STEPS = [
  {
    icon: 'map-pin',
    title: 'Informe a rota',
    text: 'Adicione os endereços de retirada e entrega dos seus itens.',
  },
  {
    icon: 'truck',
    title: 'Escolha o caminhão',
    text: 'Selecione o veículo e conte os detalhes do transporte.',
  },
  {
    icon: 'card',
    title: 'Confira e confirme',
    text: 'Veja a estimativa antes de confirmar sua solicitação.',
  },
  {
    icon: 'navigation',
    title: 'Acompanhe o trajeto',
    text: 'Siga o motorista até a conclusão do serviço.',
  },
]

export const TRANSPORT_TYPES = [
  {
    icon: 'package',
    name: 'Utilitário leve',
    description: 'Para caixas, objetos e pequenas entregas.',
    bestFor: 'Ideal para volumes compactos',
  },
  {
    icon: 'truck',
    name: 'Caminhão pequeno',
    description: 'Agilidade para móveis e mudanças menores.',
    bestFor: 'Ideal para apartamentos compactos',
  },
  {
    icon: 'truck',
    name: 'Caminhão médio',
    description: 'Mais espaço para mudanças completas.',
    bestFor: 'Ideal para casas e pequenos negócios',
  },
  {
    icon: 'truck',
    name: 'Caminhão grande',
    description: 'Capacidade para grandes volumes e distâncias.',
    bestFor: 'Ideal para operações maiores',
  },
  {
    icon: 'home',
    name: 'Mudança residencial',
    description: 'Uma opção pensada para transportar sua casa.',
    bestFor: 'Ideal para móveis e eletrodomésticos',
  },
  {
    icon: 'building',
    name: 'Transporte comercial',
    description: 'Soluções para lojas e pequenas empresas.',
    bestFor: 'Ideal para estoques e mercadorias',
  },
]

export const BENEFITS = [
  { icon: 'smartphone', title: 'Solicitação rápida', text: 'Peça seu transporte direto pelo aplicativo.' },
  { icon: 'card', title: 'Estimativa antecipada', text: 'Tenha previsibilidade antes de confirmar.' },
  { icon: 'user-check', title: 'Perfis verificados', text: 'Consulte dados de motoristas e veículos.' },
  { icon: 'navigation', title: 'Rastreamento', text: 'Acompanhe o andamento do transporte.' },
  { icon: 'message', title: 'Comunicação direta', text: 'Converse com o motorista pelo aplicativo.' },
  { icon: 'truck', title: 'Veículo adequado', text: 'Escolha entre diferentes capacidades.' },
  { icon: 'history', title: 'Histórico organizado', text: 'Consulte solicitações anteriores em um só lugar.' },
  { icon: 'star', title: 'Avaliações', text: 'Compartilhe sua experiência após o serviço.' },
  { icon: 'lock', title: 'Pagamentos seguros', text: 'Fluxo de pagamento planejado com proteção.' },
  { icon: 'headset', title: 'Suporte ao usuário', text: 'Tenha um canal para dúvidas e imprevistos.' },
]

export const SAFETY_ITEMS = [
  'Verificação de identidade dos motoristas',
  'Cadastro e validação dos veículos',
  'Avaliações feitas após cada transporte',
  'Compartilhamento e acompanhamento do trajeto',
  'Registro das informações de cada serviço',
  'Canal de suporte para clientes e parceiros',
  'Proteção e uso responsável dos dados pessoais',
]

export const CLIENT_BENEFITS = [
  'Encontre o caminhão adequado sem buscas demoradas',
  'Compare as opções disponíveis para sua necessidade',
  'Tenha mais previsibilidade sobre o custo do serviço',
  'Acompanhe as etapas do transporte pelo aplicativo',
  'Centralize contratação e histórico em um único lugar',
]

export const DRIVER_BENEFITS = [
  'Receba novas solicitações de transporte',
  'Escolha os serviços compatíveis com sua rotina',
  'Visualize rota, carga e detalhes antes de aceitar',
  'Organize transportes em uma agenda centralizada',
  'Acompanhe seu histórico de atividades e ganhos',
]

export const TESTIMONIALS = Array.from({ length: 3 }, () => ({
  name: '[NOME DO CLIENTE]',
  photo: '[FOTO DO CLIENTE]',
  quote: '[DEPOIMENTO DO CLIENTE]',
  rating: '[AVALIAÇÃO]',
}))

export const METRICS = [
  { value: '[QUANTIDADE DE TRANSPORTES]', label: 'transportes realizados' },
  { value: '[QUANTIDADE DE MOTORISTAS]', label: 'motoristas parceiros' },
  { value: '[CIDADES ATENDIDAS]', label: 'cidades atendidas' },
  { value: '[AVALIAÇÃO MÉDIA]', label: 'avaliação média' },
]

export const FAQ_ITEMS = [
  {
    question: 'Como solicitar um caminhão?',
    answer:
      'Informe os locais de retirada e entrega, escolha o tipo de transporte, revise a estimativa e confirme a solicitação pelo aplicativo.',
  },
  {
    question: 'Como o preço do transporte é calculado?',
    answer:
      'A estimativa poderá considerar distância, tipo de veículo, data, duração prevista e características do serviço. O cálculo definitivo dependerá da integração da plataforma.',
  },
  {
    question: 'Quais tipos de veículos estão disponíveis?',
    answer:
      'A proposta inclui utilitários e caminhões de diferentes portes. A disponibilidade poderá variar conforme a região e os parceiros ativos.',
  },
  {
    question: 'Posso acompanhar o motorista em tempo real?',
    answer:
      'O acompanhamento do trajeto é um recurso planejado para o aplicativo e dependerá da implementação de localização em tempo real.',
  },
  {
    question: 'Como faço para me cadastrar como motorista parceiro?',
    answer:
      'Use o botão “Quero ser motorista parceiro”. O futuro cadastro deverá solicitar dados pessoais, documentos e informações do veículo.',
  },
  {
    question: 'A plataforma realiza mudanças entre cidades?',
    answer:
      'A cobertura dependerá das cidades e rotas atendidas pelos motoristas parceiros. Consulte a disponibilidade antes de confirmar.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'As formas de pagamento serão definidas na integração financeira. Nenhum pagamento real é processado nesta landing page.',
  },
  {
    question: 'Como funciona o cancelamento?',
    answer:
      'As regras de prazo, reembolso e possíveis taxas deverão constar nos termos de uso antes do lançamento da plataforma.',
  },
]
