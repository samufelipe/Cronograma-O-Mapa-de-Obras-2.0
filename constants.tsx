
import React from 'react';
import { 
  ClipboardList, 
  FileSpreadsheet, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import { FAQItem } from './types';

export const AGENDA = [
  {
    day: "DIA 01",
    date: "31/01 - 09:00",
    title: "A Engenharia do Planejamento",
    topics: [
      "O Mapa do Início ao Fim: O passo a passo definitivo para montar um cronograma eficiente e realista que o mestre de obras realmente respeita.",
      "Radar de Marcos Críticos: Aprenda a identificar os pontos de 'não retorno' da obra e antecipe erros antes que eles se tornem prejuízos no seu bolso.",
      "Sincronização Mestra: Como encaixar fornecedores e medições no 'timing' perfeito para que a obra nunca pare por falta de material ou medição atrasada."
    ]
  },
  {
    day: "DIA 02",
    date: "01/02 - 09:00",
    title: "O Comando e a Liderança Técnica",
    topics: [
      "Blindagem contra Imprevistos: Desenvolva a habilidade de ajustar rotas e lidar com mudanças no canteiro sem desespero e mantendo o lucro da operação.",
      "O Cronograma como Arma de Poder: Como usar o planejamento para se posicionar com total confiança e ser a líder máxima do seu canteiro de obras.",
      "Venda de Gestão Lucrativa: Como transformar o acompanhamento de obra em um serviço de alto valor e parar de uma vez por todas de fazer visitas 'de brinde'."
    ]
  }
];

export const QUALIFICATION = {
  for: [
    "Arquitetas com 2 a 5 anos de mercado que buscam segurança.",
    "Donas de escritório que querem parar de perder lucro na obra.",
    "Profissionais autônomas que sentem que a obra é um 'caos'.",
    "Quem quer cobrar pela gestão técnica e não apenas pela visita."
  ],
  notFor: [
    "Quem acredita que obra é 'problema do mestre de obras'.",
    "Estudantes que ainda não pretendem atuar no campo.",
    "Grandes construtoras com processos já consolidados.",
    "Quem busca apenas teoria sem aplicação prática."
  ]
};

export const BONUSES = [
  {
    title: "Planilha Mestra de Cronograma 2.0",
    value: "R$ 197,00",
    description: "A mesma ferramenta que usamos para organizar prazos e evitar atrasos no nosso escritório.",
    icon: <FileSpreadsheet className="w-5 h-5" />
  },
  {
    title: "Checklist de Vistoria Técnica",
    value: "R$ 97,00",
    description: "O guia passo a passo para conferir cada etapa da obra sem esquecer detalhes cruciais.",
    icon: <ClipboardList className="w-5 h-5" />
  },
  {
    title: "Script de Venda de Gestão",
    value: "R$ 147,00",
    description: "Como explicar para o cliente que a sua gestão economiza o dinheiro dele.",
    icon: <FileText className="w-5 h-5" />
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Por que o valor é apenas R$ 49,90?",
    answer: "Este é um valor simbólico de comprometimento. Queremos que arquitetas que realmente desejam profissionalizar sua gestão tenham acesso ao nosso método. O valor garante seu acesso aos DOIS DIAS de workshop ao vivo e a TODOS os bônus (Planilha, Checklist e Script)."
  },
  {
    question: "O Workshop ficará gravado para assistir depois?",
    answer: "Não. Esta é uma imersão 100% AO VIVO e interativa. Acreditamos que a transformação acontece na troca real e no compromisso de estar presente. Programe-se para estar conosco nos dias 31/01 e 01/02 às 09:00."
  },
  {
    question: "Eu não entendo nada de engenharia ou execução. Vou conseguir acompanhar?",
    answer: "Com certeza. O método foi criado justamente para arquitetas que sentem essa lacuna da faculdade. Explicamos a lógica da obra de forma visual e prática, focada em quem projeta e precisa gerenciar fornecedores, não em quem vai levantar a parede."
  },
  {
    question: "Já tenho alguns anos de mercado, esse conteúdo não é básico?",
    answer: "Se você ainda sente frio na barriga ao entrar na obra ou se o mestre de obras ainda questiona suas decisões, esse conteúdo é para você. Não vamos falar de teoria, vamos entregar o fluxo de trabalho de um escritório que já entregou mais de 250 obras."
  },
  {
    question: "Quando recebo os bônus prometidos?",
    answer: "O acesso aos materiais (Planilha Mestra, Checklist e Script) será liberado logo após a conclusão da imersão no segundo dia, para garantir que você saiba exatamente como aplicar cada ferramenta da maneira correta."
  },
  {
    question: "Serve para quem trabalha apenas com interiores?",
    answer: "Sim! Nosso foco principal é a gestão de obras de interiores residenciais e comerciais. O cronograma é adaptado para a velocidade e os detalhes que esse tipo de obra exige."
  }
];
