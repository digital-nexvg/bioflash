/**
 * Dados editáveis — Bio Flash Facility
 * Serviços, cases de portfólio e clientes atendidos.
 * Edite estas listas para atualizar o conteúdo do site sem tocar no HTML.
 */

window.BIOFLASH_DATA = {
  services: [
    {
      id: 'controle-pragas',
      title: 'Controle de Pragas',
      description: 'Gestão especializada para prevenção e eliminação de pragas urbanas em ambientes corporativos e residenciais.',
      image: 'public/images/servicos-destaque/controle-pragas.jpg',
      featured: true,
      icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 10h.01M15 10h.01M8.5 15c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    },
    {
      id: 'dedetizacao',
      title: 'Dedetização',
      description: 'Aplicação técnica de produtos e métodos adequados para o controle de insetos e outros vetores.',
      image: 'public/images/servicos-destaque/dedetizacao.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M12 3v3M12 18v3M4 12H1M23 12h-3M6 6l2 2M18 18l-2-2M6 18l2-2M18 6l-2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
    },
    {
      id: 'descupinizacao',
      title: 'Descupinização',
      description: 'Tratamento especializado contra cupins, protegendo estruturas de madeira e a integridade das edificações.',
      image: 'public/images/servicos-destaque/descupinizacao.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M4 20c4-8 12-8 16 0M8 20c1-4 3-6 4-6s3 2 4 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="8" r="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
    },
    {
      id: 'limpeza-reservatorios',
      title: 'Limpeza de Reservatórios',
      description: 'Higienização de caixas d\'água e reservatórios, contribuindo para a qualidade e segurança da água armazenada.',
      image: 'public/images/servicos-destaque/limpeza-reservatorios.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M12 3c3 4 5 6.8 5 9.5a5 5 0 1 1-10 0C7 9.8 9 7 12 3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'impermeabilizacao-reservatorios',
      title: 'Impermeabilização de Reservatórios',
      description: 'Aplicação de sistemas impermeabilizantes que previnem infiltrações e vazamentos em reservatórios.',
      image: 'public/images/servicos-destaque/impermeabilizacao-reservatorios.jpg',
      icon: '<svg viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M4 12h16" stroke="currentColor" stroke-width="1.5"/></svg>'
    },
    {
      id: 'impermeabilizacao-calhas-lajes',
      title: 'Impermeabilização de Calhas e Lajes',
      description: 'Soluções de impermeabilização para calhas e lajes, evitando infiltrações e prolongando a vida útil da estrutura.',
      image: 'public/images/servicos-destaque/impermeabilizacao-calhas-lajes.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M3 9h18M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 9V6a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>'
    },
    {
      id: 'manutencao-predial',
      title: 'Manutenção Predial',
      description: 'Serviços contínuos de manutenção que garantem o bom funcionamento e a conservação das edificações.',
      image: 'public/images/servicos-destaque/manutencao-predial.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a3.5 3.5 0 0 1-4.6 4.6L4 17l3 3 6.1-6.1a3.5 3.5 0 0 1 4.6-4.6L21 6l-3-3-3.3 3.3Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'obras-civis',
      title: 'Obras Civis',
      description: 'Execução de obras civis com foco em qualidade, segurança e cumprimento de prazos.',
      image: 'public/images/servicos-destaque/obras-civis.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'hidraulica',
      title: 'Hidráulica',
      description: 'Instalação, manutenção e reparo de sistemas hidráulicos residenciais, comerciais e corporativos.',
      image: 'public/images/servicos-destaque/hidraulica.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M7 4h10v4a5 5 0 0 1-10 0Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 12v8M9 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    },
    {
      id: 'eletrica',
      title: 'Elétrica',
      description: 'Serviços elétricos com segurança e conformidade, do reparo pontual à manutenção preventiva.',
      image: 'public/images/servicos-destaque/eletrica.jpg',
      icon: '<svg viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 11-14h-7z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>'
    },
    {
      id: 'climatizacao',
      title: 'Ar-condicionado e Climatização',
      description: 'Instalação e manutenção de sistemas de ar-condicionado e climatização para ambientes corporativos e residenciais.',
      image: 'public/images/servicos-destaque/climatizacao.jpg',
      icon: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 15v3M10 15v4M14 15v3M18 15v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    }
  ],

  portfolio: [
    {
      id: 'dedetizacao',
      title: 'Dedetização',
      meta: 'Cliente: Localiza',
      folder: 'public/images/servicos/dedetizacao/',
      images: [
        '01-localiza.jpg',
        '02-localiza.jpg',
        '03-localiza.jpg',
        '04-localiza.jpg',
        '05-localiza.jpg'
      ],
      altBase: 'Serviço de dedetização realizado para a Localiza'
    },
    {
      id: 'descupinizacao',
      title: 'Descupinização',
      meta: 'Local: Teatro Municipal do Rio de Janeiro',
      folder: 'public/images/servicos/descupinizacao/',
      images: [
        '01-teatro.jpg',
        '02-teatro.jpg',
        '03-teatro.jpg',
        '04-teatro.jpg',
        '05-teatro.jpg'
      ],
      altBase: 'Serviço de descupinização realizado no Teatro Municipal do Rio de Janeiro'
    },
    {
      id: 'impermeabilizacao-reservatorios',
      title: 'Impermeabilização de Reservatórios',
      meta: 'Serviço realizado',
      folder: 'public/images/servicos/impermeabilizacao-reservatorios/',
      images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
      altBase: 'Serviço de impermeabilização de reservatórios'
    },
    {
      id: 'impermeabilizacao-calhas-lajes',
      title: 'Impermeabilização de Calhas e Lajes',
      meta: 'Serviço realizado',
      folder: 'public/images/servicos/impermeabilizacao-calhas-lajes/',
      images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
      altBase: 'Serviço de impermeabilização de calhas e lajes'
    },
    {
      id: 'limpeza-reservatorios',
      title: 'Limpeza de Reservatórios',
      meta: 'Serviço realizado',
      folder: 'public/images/servicos/limpeza-reservatorios/',
      images: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'],
      altBase: 'Serviço de limpeza de reservatórios'
    }
  ],

  clients: [
    { name: 'Rede Economia', file: 'rede-economia.png' },
    { name: 'Teatro Municipal do Rio de Janeiro', file: 'teatro-municipal-rio.png' },
    { name: 'Orquestra Sinfônica Brasileira', file: 'orquestra-sinfonica-brasil.png' },
    { name: 'Bradesco', file: 'bradesco.png' },
    { name: 'EQS Engenharia', file: 'eqs-engenharia.png' },
    { name: 'Vivo', file: 'vivo.png' },
    { name: 'Caixa Econômica Federal', file: 'caixa-economica-federal.png' },
    { name: 'Localiza', file: 'localiza.png' }
  ]
};
