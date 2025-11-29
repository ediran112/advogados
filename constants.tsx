import React from 'react';
import { Shield, FileText, Scale, Briefcase } from 'lucide-react';
import { FAQItem, ServiceItem, StepItem, Testimonial, ComparisonPoint } from './types';

export const NAV_ITEMS = [
  { label: 'ETAPAS', href: '#steps' },
  { label: 'SERVIÇOS', href: '#services' },
  { label: 'QUEM SOU EU?', href: '#bio' },
];

export const COMPARISON_WITH: ComparisonPoint[] = [
  { text: "Exclusividade sobre o nome e logotipo" },
  { text: "Segurança jurídica para crescer e investir" },
  { text: "Valorização da marca no mercado" },
  { text: "Possibilidade de franquear ou licenciar no futuro" },
];

export const COMPARISON_WITHOUT: ComparisonPoint[] = [
  { text: "Alguém pode registrar antes e te proibir de usar" },
  { text: "Você pode ser processado por uso indevido" },
  { text: "Perda de reputação e clientes" },
  { text: "Dificuldade para expandir, vender ou franquear seu negócio" },
];

export const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Solicitação",
    description: "Preencha o formulário de solicitação. É simples e intuitivo."
  },
  {
    number: "02",
    title: "Análise",
    description: "Fazemos a busca e análise da viabilidade de registro."
  },
  {
    number: "03",
    title: "Protocolo",
    description: "Preparamos e protocolamos seu pedido no INPI."
  },
  {
    number: "04",
    title: "Acompanhe",
    description: "Acompanhe o andamento com nosso suporte jurídico especializado."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: <Briefcase className="w-8 h-8 text-brand-gold" />,
    title: "Assessoria Jurídica Empresarial",
    description: "Atuação estratégica na prevenção e resolução de conflitos empresariais, garantindo segurança jurídica e conformidade normativa."
  },
  {
    icon: <FileText className="w-8 h-8 text-brand-gold" />,
    title: "Confecção de Contratos Personalizados",
    description: "Desenvolvimento de instrumentos contratuais personalizados, garantindo clareza, segurança jurídica e proteção dos interesses envolvidos."
  },
  {
    icon: <Scale className="w-8 h-8 text-brand-gold" />,
    title: "Consultoria e serviços jurídicos",
    description: "Soluções jurídicas e consultoria estratégica personalizadas com foco na excelência e agilidade para pessoas físicas e empresas."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Carolina",
    source: "Via Google",
    text: "A melhor advogada do Brasil! Uma advogada extraordinária, brilhante, ética e de extrema competência. Confio de coração e olhos fechados!",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Árilla Oliveira",
    source: "Via Google",
    text: "Atenciosa e responsável! Tratou minha marca como única sem medo de me esclarecer todas as dúvidas. Excelente!",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Lucy Carla",
    source: "Via Google",
    text: "Uma profissional excelente, que usa uma linguagem que nos faz entender os trâmites. Atenciosa e muito prestativa.",
    avatar: "https://picsum.photos/100/100?random=3"
  },
  {
    name: "Morgana Salviano",
    source: "Via Google",
    text: "Cheguei até ela por indicação, e com toda certeza também a indicarei. Profissional atenciosa, carismática e sempre atualizada.",
    avatar: "https://picsum.photos/100/100?random=4"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "01. O que é o registro de marca e por que é importante?",
    answer: "O registro de marca é o procedimento legal que garante a exclusividade do uso de um nome, logotipo ou símbolo relacionado a um produto ou serviço. Ele é essencial para proteger a sua identidade no mercado, evitar cópias indevidas e agregar valor ao seu negócio."
  },
  {
    question: "02. Quem pode registrar uma marca?",
    answer: "Qualquer pessoa física ou jurídica que exerça atividade lícita relacionada aos produtos ou serviços identificados pela marca pode registrá-la. Empreendedores, empresas, profissionais liberais e criadores podem — e devem — proteger suas marcas."
  },
  {
    question: "03. Qual é o tempo para uma marca ser registrada?",
    answer: "O processo de registro no Instituto Nacional da Propriedade Industrial (INPI) pode levar, em média, de 8 meses a 2 anos, dependendo da complexidade do pedido e da análise do órgão. Porém, desde o protocolo, sua marca já conta com proteção contra terceiros."
  },
  {
    question: "04. Quais são os riscos de não registrar a minha marca?",
    answer: "Sem o registro, sua marca fica vulnerável a cópias, usos indevidos e até a impedimentos legais para continuar utilizando o nome. Além disso, outra pessoa pode registrá-la antes, o que pode causar perda de identidade e prejuízos financeiros."
  },
  {
    question: "05. O que é pesquisa de anterioridade?",
    answer: "A pesquisa de anterioridade verifica se já existe uma marca registrada ou um pedido semelhante ao que você deseja registrar. Essa etapa é essencial para reduzir riscos de indeferimento e evitar conflitos futuros."
  }
];