
import React from 'react';
import { 
  ClipboardList, 
  Target, 
  Clock, 
  ShieldAlert, 
  Zap,
  Lock,
  BarChart3,
  CheckCircle2,
  Gift,
  FileSpreadsheet,
  FileText,
  Construction,
  Hammer,
  Scale,
  ShieldCheck,
  Search
} from 'lucide-react';
import { LearningCard, FAQItem } from './types';

export const LEARNING_CARDS: LearningCard[] = [
  {
    title: "O Salto de Maturidade Técnica",
    description: "Para quem já atua, mas sente que o 'executivo' da faculdade é raso. Vamos detalhar a ordem técnica exata para obras de luxo que evita erros caros.",
    icon: "Construction"
  },
  {
    title: "Gestão x Visita de Cortesia",
    description: "Aprenda a auditar a obra com olhar de gestora, não de convidada. Como conferir infra e civil sem ser enganada por prazos falsos.",
    icon: "Search"
  },
  {
    title: "Comando de Fornecedores",
    description: "O script exato para se posicionar tecnicamente diante de empreiteiros experientes e recuperar sua autoridade no canteiro.",
    icon: "ShieldAlert"
  },
  {
    title: "Sua Planilha de Escalonamento",
    description: "Acesso à nossa estrutura de gerenciamento real. Uma ferramenta de controle com mais de 200 itens para profissionalizar seu escritório.",
    icon: "FileSpreadsheet"
  },
  {
    title: "Honorários de Gestão de Obra",
    description: "Como precificar o acompanhamento técnico de forma que o cliente veja valor e seu escritório tenha lucro real, além do projeto.",
    icon: "BarChart3"
  }
];

export const BONUSES = [
  {
    title: "Template de Cronograma Inovando",
    value: "R$ 197,00",
    description: "O mesmo modelo de planilha que usamos em nossas obras de alto padrão para você preencher e usar.",
    icon: <FileSpreadsheet className="w-6 h-6" />
  },
  {
    title: "Checklist de Vistoria Técnica",
    value: "R$ 47,00",
    description: "Os pontos críticos que você deve conferir em cada fase para garantir a fidelidade do projeto.",
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    title: "Guia de Precificação Técnica",
    value: "R$ 97,00",
    description: "Como apresentar o serviço de gestão de obras para seus clientes e aumentar seu ticket médio.",
    icon: <FileText className="w-6 h-6" />
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que exatamente está incluso no valor de R$ 49,90?",
    answer: "Este valor garante seu ingresso individual para os 2 dias de workshop online e ao vivo, além de todos os bônus digitais mencionados (planilhas e checklists). Não inclui consultoria individual, mentoria privada ou visitas presenciais."
  },
  {
    question: "Já tenho alguns anos de mercado, o conteúdo não será básico demais?",
    answer: "Pelo contrário. O workshop foi desenhado para quem já está no campo de batalha (2 a 5 anos ou mais) e percebeu que a prática exige um nível de controle que o básico não resolve. Focamos em gestão técnica para arquitetas autônomas."
  },
  {
    question: "Sou autônoma e trabalho sozinha, consigo aplicar?",
    answer: "Sim. O método serve justamente para você organizar seus processos e parar de perder tempo 'apagando incêndios' em obra, permitindo que você profissionalize a gestão do seu escritório próprio."
  },
  {
    question: "Como vou receber o material e o acesso?",
    answer: "Imediatamente após a confirmação, você receberá um e-mail com as instruções de acesso e será convidada para o nosso grupo exclusivo de avisos via WhatsApp, onde enviaremos o link da transmissão ao vivo."
  },
  {
    question: "Preciso ter obras em andamento para participar?",
    answer: "Não é obrigatório, mas o workshop vai te dar a segurança técnica para que sua próxima obra seja gerida de forma profissional desde o primeiro dia, evitando prejuízos comuns por falta de acompanhamento."
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-8 h-8 text-black" />,
  ShieldAlert: <ShieldAlert className="w-8 h-8 text-black" />,
  Target: <Target className="w-8 h-8 text-black" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-black" />,
  Zap: <Zap className="w-8 h-8 text-black" />,
  Lock: <Lock className="w-8 h-8 text-black" />,
  CheckCircle2: <CheckCircle2 className="w-8 h-8 text-black" />,
  Construction: <Construction className="w-8 h-8 text-black" />,
  Hammer: <Hammer className="w-8 h-8 text-black" />,
  Scale: <Scale className="w-8 h-8 text-black" />,
  Search: <Search className="w-8 h-8 text-black" />,
  FileSpreadsheet: <FileSpreadsheet className="w-8 h-8 text-black" />
};
