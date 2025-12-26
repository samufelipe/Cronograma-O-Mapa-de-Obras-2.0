
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Instagram, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  Lock,
  Trophy,
  Video,
  Clock,
  Plus,
  MessageCircle,
  Zap,
  Calendar,
  Gift,
  ShieldCheck,
  Star,
  Users
} from 'lucide-react';

import { FAQ_ITEMS, BONUSES, AGENDA } from './constants.tsx';

// Caminhos relativos explícitos para garantir carregamento
const logoPath = "./input_file_0.png";
const mentorsPath = "./input_file_2.png";

const Logo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <img 
    src={logoPath} 
    alt="Logo Cronograma O Mapa de Obras 2.0" 
    className={`${className} object-contain block`}
    loading="eager"
  />
);

const scrollToForm = () => {
  const el = document.getElementById('ingresso');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const MainCTA = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <button 
    onClick={scrollToForm}
    className={`bg-[#FFB800] text-[#111111] px-6 py-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#111111] hover:text-[#FFB800] transition-all border-2 border-[#111111] shadow-hard flex items-center justify-center gap-2 group active:scale-95 ${className}`}
  >
    {children} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </button>
);

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        h: Math.floor(diff / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };
    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-black selection:bg-brand-gold selection:text-brand-black">
      
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 border-b border-zinc-100 py-3">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-bold text-brand-black text-[9px] md:text-[10px] uppercase tracking-tighter">Cronograma O Mapa de Obras 2.0</span>
          </div>
          <button onClick={scrollToForm} className="bg-brand-black text-brand-gold px-3 py-1.5 text-[9px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all">
            INSCREVER-SE
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-grid"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-brand-black px-3 py-1 border border-brand-gold shadow-hard mb-2 mx-auto lg:mx-0">
                   <Clock className="w-3 h-3 text-brand-gold" />
                   <span className="text-[9px] font-black text-white uppercase tracking-wider">
                     O Lote 01 Expira em: <span className="text-brand-gold tabular-nums">{timeLeft.h}h {timeLeft.m}m {timeLeft.s}s</span>
                   </span>
                </div>
                
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight uppercase leading-[1.1]">
                  A Sequência que Protege seu <br className="hidden md:block"/>
                  <span className="text-brand-gold italic">Design e seu Lucro.</span>
                </h1>
                
                <p className="text-sm md:text-lg text-zinc-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                  Domine a sequência ideal de serviços com o <strong>Cronograma O Mapa de Obras 2.0</strong> e elimine o retrabalho na sua execução com segurança técnica absoluta.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 border border-zinc-100 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                    <Trophy className="w-3 h-3 text-brand-gold" /> +250 Obras Entregues
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-black text-brand-gold text-[9px] font-bold uppercase tracking-wider shadow-hard">
                    <Video className="w-3 h-3" /> AO VIVO NO ZOOM
                  </div>
                </div>
              </div>

              <div id="ingresso" className="scroll-mt-24 animate-fade-up">
                <div className="bg-white border-2 border-brand-black p-6 md:p-8 shadow-gold max-w-md mx-auto">
                  <div className="mb-6 text-center lg:text-left">
                    <h2 className="text-lg font-black text-brand-black uppercase tracking-tight">Vaga Exclusiva</h2>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Workshop Imersivo • Sábado 31/01</p>
                  </div>
                  
                  <form onSubmit={(e) => { e.preventDefault(); window.location.href="https://checkout.hotmart.com/YOUR_LINK"; }} className="space-y-4">
                    <input required type="text" placeholder="Nome Completo" className="w-full bg-zinc-50 border-b border-zinc-200 py-3 px-1 text-xs font-medium focus:border-brand-gold outline-none" />
                    <input required type="email" placeholder="E-mail Profissional" className="w-full bg-zinc-50 border-b border-zinc-200 py-3 px-1 text-xs font-medium focus:border-brand-gold outline-none" />
                    <input required type="tel" placeholder="WhatsApp" className="w-full bg-zinc-50 border-b border-zinc-200 py-3 px-1 text-xs font-medium focus:border-brand-gold outline-none" />

                    <div className="pt-4">
                      <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-zinc-300 line-through uppercase">R$ 197,00</span>
                          <span className="text-3xl font-black text-brand-black tracking-tighter">R$ 49,90</span>
                        </div>
                        <span className="text-[9px] font-black text-brand-gold bg-brand-black px-2 py-1 uppercase tracking-widest">LOTE 01</span>
                      </div>
                      <button type="submit" className="w-full bg-brand-black text-brand-gold py-4 flex items-center justify-center gap-2 text-[10px] font-black tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all border-2 border-brand-black shadow-hard uppercase group">
                        RESERVAR MEU LUGAR <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-center text-[7px] font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1">
                    <Lock className="w-2 h-2" /> Pagamento 100% Seguro via Hotmart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-zinc-50 border-y border-zinc-100 py-6 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
              <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-brand-black">
                <Users className="w-4 h-4" /> +1000 Arquitetas Impactadas
              </div>
              <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-brand-black">
                <Star className="w-4 h-4 fill-brand-black" /> Avaliação 4.9/5.0
              </div>
              <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-brand-black">
                <ShieldCheck className="w-4 h-4" /> Método Validado
              </div>
            </div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-20 bg-brand-black text-white reveal">
          <div className="container mx-auto px-4 max-w-4xl">
             <div className="text-center md:text-left mb-12 space-y-4">
                <span className="text-brand-gold font-black text-[9px] uppercase tracking-[0.3em] block">O CUSTO DA FALTA DE MÉTODO</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-tight">
                  Sua Autoridade Não Pode Depender <br className="hidden md:block"/>
                  <span className="text-brand-gold italic">Apenas de Desenhos Bonitos.</span>
                </h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
                {[
                  { q: "O Ralo do Retrabalho", d: "A falta de uma sequência lógica faz serviços serem refeitos porque o fornecedor seguinte precisava de algo que não foi antecipado." },
                  { q: "Prejuízo em Materiais", d: "Acabamentos nobres danificados por equipes que entram na obra no momento errado do fluxo de execução." },
                  { q: "Silêncio Técnico", d: "A insegurança de ser questionada pela equipe e não saber o que responder, perdendo o respeito profissional perante o cliente." },
                  { q: "Estresse Constante", d: "A exaustão de viver 'apagando incêndios' em problemas que seriam previsíveis com o Cronograma O Mapa de Obras 2.0." }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 border-l-2 border-brand-gold p-6 hover:bg-zinc-900 transition-colors">
                     <h3 className="text-sm md:text-base font-black uppercase tracking-tight mb-2">{item.q}</h3>
                     <p className="text-[11px] md:text-xs font-medium text-zinc-400 leading-relaxed">{item.d}</p>
                  </div>
                ))}
             </div>
             <div className="flex justify-center">
                <MainCTA>QUERO ELIMINAR O RETRABALHO NA MINHA OBRA</MainCTA>
             </div>
          </div>
        </section>

        {/* THE METHOD */}
        <section className="py-20 bg-white reveal">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                <img 
                  src={mentorsPath} 
                  alt="Ingrid e Fernanda" 
                  className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 border-2 border-brand-black shadow-hard block" 
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <span className="text-brand-gold font-black text-[9px] uppercase tracking-[0.3em] block">DE ARQUITETA PARA ARQUITETA</span>
                <h2 className="text-2xl md:text-3xl font-black text-brand-black tracking-tight uppercase leading-tight">
                  Criamos o <span className="text-brand-gold italic">Cronograma 2.0</span> como a <br className="hidden md:block"/> ponte prática que você precisa.
                </h2>
                <div className="space-y-4 text-xs md:text-sm text-zinc-500 font-medium leading-relaxed">
                  <p>
                    Somos <span className="text-brand-black font-bold">Ingrid Zarza e Fernanda Bradaschia</span>. Com mais de <span className="text-brand-black font-bold">250 execuções entregues</span>, descobrimos que a chave do sucesso na obra não é o improviso, mas o <strong>conhecimento estratégico do fluxo de serviços</strong>.
                  </p>
                  <p>
                    O <strong>Cronograma O Mapa de Obras 2.0</strong> é a ponte prática que a formação acadêmica não consegue alcançar em profundidade. Não entregamos apenas uma ferramenta, mas a segurança que você precisa para ser a líder técnica respeitada em cada projeto.
                  </p>
                </div>
                <MainCTA className="w-full md:w-auto">QUERO DOMINAR A EXECUÇÃO</MainCTA>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION - CTA IMPLEMENTADO */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden reveal">
           <div className="container mx-auto px-4 max-w-6xl text-center">
              <div className="mb-16 space-y-4">
                <span className="text-brand-gold font-black text-[9px] uppercase tracking-[0.4em] block">CLAREZA ABSOLUTA</span>
                <h2 className="text-3xl md:text-4xl font-black text-brand-black uppercase tracking-tight">O Caminho da sua Transformação</h2>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Veja o que acontece no minuto seguinte à sua inscrição</p>
                <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 md:gap-8 mb-16">
                 {[
                   { 
                     icon: <Zap className="w-6 h-6"/>, 
                     title: "01. ACESSO IMEDIATO", 
                     desc: "Confirmação instantânea por e-mail com as boas-vindas e primeiros passos." 
                   },
                   { 
                     icon: <MessageCircle className="w-6 h-6"/>, 
                     title: "02. GRUPO VIP", 
                     desc: "Entrada na comunidade exclusiva de WhatsApp para Networking e avisos." 
                   },
                   { 
                     icon: <Calendar className="w-6 h-6"/>, 
                     title: "03. IMERSÃO (31/01)", 
                     desc: "Dia inteiro de workshop ao vivo no Zoom com aplicação direta do método." 
                   },
                   { 
                     icon: <Gift className="w-6 h-6"/>, 
                     title: "04. ENTREGA DO TESOURO", 
                     desc: "Liberação de todos os bônus exclusivos logo após o encerramento da live." 
                   }
                 ].map((step, i) => (
                   <div key={i} className="bg-white p-8 border border-zinc-200 relative group hover:border-brand-gold transition-all shadow-sm">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-black text-brand-gold flex items-center justify-center font-black text-[10px] rounded-full border border-brand-gold">
                        {i + 1}
                      </div>
                      <div className="mb-6 flex justify-center text-brand-gold">
                        {step.icon}
                      </div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-black mb-3">{step.title}</h4>
                      <p className="text-[11px] text-zinc-500 font-medium leading-relaxed">{step.desc}</p>
                   </div>
                 ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <MainCTA>QUERO MEU ACESSO IMEDIATO</MainCTA>
                <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Inscrição confirmada via Hotmart</p>
              </div>
           </div>
        </section>

        {/* AGENDA SECTION - CTA IMPLEMENTADO */}
        <section className="py-20 bg-white reveal">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <div className="mb-16 space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-brand-black uppercase tracking-tight">Dinâmica da Imersão</h2>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Um dia inteiro focado na sua transformação técnica</p>
                <div className="w-12 h-1 bg-brand-gold mx-auto"></div>
             </div>
             <div className="grid md:grid-cols-2 gap-6 text-left mb-16">
                {AGENDA.map((item, i) => (
                  <div key={i} className="bg-white p-8 border border-zinc-200 shadow-sm hover:shadow-hard transition-all">
                     <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest block mb-2">{item.date}</span>
                     <h3 className="text-lg font-black uppercase mb-6 tracking-tight border-b border-zinc-50 pb-2">{item.title}</h3>
                     <ul className="space-y-4">
                        {item.topics.map((topic, j) => (
                          <li key={j} className="flex gap-3 text-[11px] font-bold text-zinc-500">
                             <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" /> {topic}
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
             </div>
             <div className="flex flex-col items-center gap-4">
               <MainCTA>QUERO GARANTIR MINHA VAGA NO ZOOM</MainCTA>
               <span className="text-[8px] font-black text-brand-black bg-brand-gold/20 px-3 py-1 uppercase tracking-widest">Vagas Limitadas pela capacidade da sala</span>
             </div>
          </div>
        </section>

        {/* BONUS SECTION */}
        <section className="py-20 bg-white border-t border-zinc-100 reveal">
          <div className="container mx-auto px-4 max-w-5xl text-center">
             <h2 className="text-2xl md:text-3xl font-black text-brand-black uppercase tracking-tight mb-2">Seu Pacote de Ferramentas</h2>
             <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-12">Tudo o que você precisa para aplicar o método imediatamente</p>
             
             <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
                {BONUSES.map((bonus, idx) => (
                  <div key={idx} className="bg-white border-2 border-brand-black p-8 flex flex-col items-center group relative shadow-sm">
                     <div className="mb-4 text-brand-gold group-hover:scale-110 transition-transform">{bonus.icon}</div>
                     <h3 className="text-[10px] font-black uppercase mb-1 tracking-widest">{bonus.title}</h3>
                     <span className="text-[11px] font-black text-brand-black bg-brand-gold/10 px-3 py-1 uppercase tracking-tighter mb-4">
                       Valor de Mercado: {bonus.value}
                     </span>
                     <p className="text-[11px] text-zinc-500 mb-6 font-medium leading-relaxed">{bonus.description}</p>
                     <div className="mt-auto pt-4 border-t border-zinc-50 w-full">
                        <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3"/> LIBERADO PÓS-LIVE (31/01)
                        </span>
                     </div>
                  </div>
                ))}
             </div>

             <div className="max-w-xl mx-auto bg-brand-black border-2 border-brand-gold p-8 md:p-12 shadow-hard relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-gold text-brand-black px-4 py-1 text-[9px] font-black uppercase tracking-widest transform rotate-45 translate-x-8 translate-y-4">
                  OFERTA ATIVA
                </div>
                
                <div className="space-y-3 mb-8 text-left border-b border-zinc-800 pb-8">
                  <div className="flex justify-between items-center text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                    <span>Imersão Cronograma 2.0 (Ao Vivo)</span>
                    <span className="text-zinc-400">PAGARIA: R$ 197,00</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                    <span><Plus className="inline w-3 h-3 mr-1"/> Matriz de Sequência Ideal</span>
                    <span className="text-zinc-400">PAGARIA: R$ 497,00</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                    <span><Plus className="inline w-3 h-3 mr-1"/> Checklist de Visita Técnica</span>
                    <span className="text-zinc-400">PAGARIA: R$ 197,00</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                    <span><Plus className="inline w-3 h-3 mr-1"/> Guia de Postura e Liderança</span>
                    <span className="text-zinc-400">PAGARIA: R$ 297,00</span>
                  </div>
                  <div className="flex justify-between items-center text-brand-gold text-[11px] font-black uppercase tracking-wider">
                    <span><Plus className="inline w-3 h-3 mr-1"/> ACESSO AO GRUPO VIP</span>
                    <span className="bg-brand-gold/10 px-2 py-0.5">INCLUSO</span>
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest mb-1">
                    Preço total se comprado separadamente: <span className="line-through text-zinc-400">R$ 1.188,00</span>
                  </p>
                  
                  <div className="mb-2">
                    <span className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em] block mb-1">INVESTIMENTO ÚNICO</span>
                    <h3 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight animate-pulse-slow">
                      APENAS R$ 49,90
                    </h3>
                  </div>
                </div>

                <button onClick={scrollToForm} className="w-full bg-brand-gold text-brand-black py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-hard active:scale-95 group">
                   GARANTIR MINHA VAGA AGORA <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
          </div>
        </section>

        {/* GUARANTEE - CTA FINAL IMPLEMENTADO */}
        <section className="py-20 bg-zinc-50 reveal">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="bg-white border border-zinc-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative">
                <ShieldCheck className="w-24 h-24 text-brand-gold" />
                <div className="absolute inset-0 flex items-center justify-center font-black text-brand-black text-xl pt-1">7</div>
              </div>
              <div className="text-left space-y-3">
                <h2 className="text-xl md:text-2xl font-black text-brand-black uppercase tracking-tight">Garantia Incondicional de 7 Dias</h2>
                <p className="text-xs md:text-sm text-zinc-500 font-medium leading-relaxed">
                  Inscreva-se com tranquilidade absoluta. Se você participar da imersão e sentir que o conteúdo não é para você, basta solicitar o reembolso total em até 7 dias. O risco é todo nosso.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-brand-black">Pronta para assumir o comando da sua obra?</h3>
              <MainCTA className="w-full md:w-auto shadow-gold">SIM, QUERO O CRONOGRAMA 2.0</MainCTA>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white reveal">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-xl font-black text-center mb-4 uppercase tracking-widest">Dúvidas Frequentes</h2>
            <div className="space-y-2 mt-8">
              {FAQ_ITEMS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-zinc-200 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex justify-between items-center px-5 py-4 text-left group">
                    <span className="font-bold text-[10px] md:text-[11px] uppercase tracking-wider text-brand-black group-hover:text-brand-gold transition-colors">{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-3.5 h-3.5 text-brand-gold" /> : <ChevronDown className="w-3.5 h-3.5 text-zinc-300" />}
                  </button>
                  {openFaqIndex === idx && <div className="px-5 pb-5 text-zinc-500 text-[11px] font-medium leading-relaxed border-t border-zinc-50 pt-4">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-12 border-t border-zinc-100 text-center space-y-4">
        <Logo className="w-10 h-10 mx-auto opacity-50 grayscale" />
        <div className="flex justify-center gap-6">
           <a href="https://instagram.com/inovandonasuaobra" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-black transition-colors" aria-label="Instagram">
             <Instagram className="w-5 h-5" />
           </a>
        </div>
        <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-300">
          Cronograma O Mapa de Obras 2.0 • Todos os Direitos Reservados • 2026
        </p>
      </footer>

      <div className={`fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden transition-all duration-500 transform ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={scrollToForm}
          className="w-full bg-brand-gold text-brand-black py-4 px-6 text-[10px] font-black uppercase tracking-widest shadow-2xl border-2 border-brand-black flex items-center justify-between group active:scale-95"
        >
          <span>QUERO MINHA VAGA AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default App;
