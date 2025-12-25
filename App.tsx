
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Instagram, 
  ChevronDown, 
  ChevronUp,
  Star,
  CheckCircle2,
  MonitorPlay,
  XCircle,
  Check,
  Zap,
  Calendar,
  Lock,
  ShieldCheck,
  Building2,
  AlertCircle,
  Users,
  HardHat,
  Trophy
} from 'lucide-react';
import { FAQ_ITEMS, BONUSES, AGENDA, QUALIFICATION } from './constants';

// Referências locais estáveis para as imagens enviadas pelo usuário
const LOGO_BLACK_GOLD = "input_file_3.png";
const LOGO_WHITE_GOLD = "input_file_4.png";
const actualMentorsImg = "input_file_2.png";

const Logo = ({ className = "w-10 h-10", variant = "black" }: { className?: string; variant?: "black" | "white" }) => (
  <img 
    src={variant === "black" ? LOGO_BLACK_GOLD : LOGO_WHITE_GOLD} 
    alt="Logo Cronograma O Mapa de Obras 2.0" 
    className={className} 
  />
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 0 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 items-center bg-brand-black px-4 py-2 border-2 border-brand-gold shadow-hard">
      <span className="text-[9px] font-black text-brand-gold uppercase tracking-[0.2em]">Lote 01 Expira em:</span>
      <span className="text-xs font-black text-white">{String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}</span>
    </div>
  );
};

const Header = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-brand-black py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Logo className="w-8 h-8" variant="black" />
        <span className="font-black text-brand-black text-[10px] md:text-xs uppercase tracking-tighter">CRONOGRAMA O MAPA DE OBRAS 2.0</span>
      </div>
      <button onClick={() => document.getElementById('ingresso')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-brand-black text-brand-gold px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all">
        GARANTIR VAGA
      </button>
    </div>
  </nav>
);

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  
  return (
    <div id="ingresso" className="bg-white border-2 border-brand-black p-8 md:p-10 shadow-gold relative z-10 scroll-mt-24">
      <div className="mb-8">
        <h3 className="text-xl font-black text-brand-black mb-1 uppercase tracking-tighter">Inscrição Imediata</h3>
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Workshop Online + Materiais Inclusos</p>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); window.location.href="https://checkout.hotmart.com/YOUR_LINK"; }} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Seu Nome</label>
          <input required type="text" placeholder="Arq. Fernanda Silva"
            className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-1 text-sm font-medium focus:border-brand-gold outline-none transition-all"
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        
        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">E-mail Profissional</label>
          <input required type="email" placeholder="contato@escritorio.com"
            className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-1 text-sm font-medium focus:border-brand-gold outline-none transition-all"
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400">WhatsApp</label>
          <input required type="tel" placeholder="(00) 00000-0000"
            className="w-full bg-zinc-50 border-b-2 border-zinc-200 py-3 px-1 text-sm font-medium focus:border-brand-gold outline-none transition-all"
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        </div>

        <div className="pt-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <span className="text-[10px] font-bold text-zinc-300 line-through uppercase block">R$ 197,00</span>
              <span className="text-4xl font-black text-brand-black tracking-tighter">R$ 49,90</span>
            </div>
            <span className="text-[9px] font-black text-brand-gold bg-brand-black px-2 py-1 uppercase tracking-widest">Lote 01</span>
          </div>
          
          <button type="submit" className="w-full bg-brand-black text-brand-gold py-5 flex items-center justify-center gap-3 text-xs font-black tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all border-2 border-brand-black shadow-hard group uppercase">
            QUERO MEU ACESSO <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
      
      <p className="mt-6 text-center text-[8px] font-bold text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-2">
        <Lock className="w-2.5 h-2.5" /> Pagamento 100% Seguro via Hotmart
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="antialiased font-sans text-brand-black bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="flex flex-col items-center lg:items-start gap-8">
                <Countdown />
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black leading-[0.95] tracking-tighter uppercase text-center lg:text-left">
                    DOMINE A EXECUÇÃO. <br />
                    <span className="text-brand-gold italic underline decoration-brand-black underline-offset-8">ASSUMA O COMANDO.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                    O método de gestão para arquitetas autônomas com 2 a 5 anos de mercado que querem parar de ser ignoradas no canteiro e transformar a obra no serviço mais lucrativo do escritório.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 text-[10px] font-black uppercase tracking-widest">
                    <Building2 className="w-4 h-4 text-brand-gold" /> Escritório Próprio
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-50 border border-zinc-100 text-[10px] font-black uppercase tracking-widest">
                    <Zap className="w-4 h-4 text-brand-gold" /> Gestão Prática
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* PAIN / IDENTIFICATION */}
      <section className="py-24 bg-brand-black text-white">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center md:text-left space-y-4 mb-16">
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.5em] block">QUALIFICAÇÃO PROFISSIONAL:</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-tight">
                VOCÊ JÁ ESTÁ NO MERCADO, MAS <br className="hidden md:block"/>
                <span className="text-brand-gold italic">A OBRA AINDA TE ASSUSTA?</span>
              </h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-10">
              {[
                { q: "O mestre de obras ignora suas orientações", d: "Ele faz do 'jeito dele' porque você não demonstra segurança técnica no campo." },
                { q: "Você faz visitas de graça por medo de cobrar", d: "Acha que gestão é 'cortesia' por não saber estruturar o serviço como um produto lucrativo." },
                { q: "Seu lucro some em retrabalhos imprevistos", d: "O projeto é lindo, mas a execução vira um ralo de dinheiro por falta de controle." },
                { q: "Você se sente uma 'moça do desenho'", d: "Sabe projetar como ninguém, mas trava quando o assunto é infra, hidráulica ou elétrica." }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 border-l-4 border-brand-gold p-6 space-y-2 hover:bg-zinc-800 transition-colors">
                   <h4 className="text-lg font-black uppercase tracking-tighter leading-none">{item.q}</h4>
                   <p className="text-sm font-medium text-zinc-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-black text-brand-black tracking-tighter uppercase">Cronograma da Imersão</h2>
              <div className="w-20 h-2 bg-brand-gold mx-auto"></div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
              {AGENDA.map((item, i) => (
                <div key={i} className="bg-white border-2 border-brand-black p-10 shadow-hard relative group">
                   <span className="absolute top-4 right-4 text-zinc-100 text-6xl font-black group-hover:text-brand-gold/10 transition-colors">{i+1}</span>
                   <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest block mb-2">{item.date}</span>
                   <h3 className="text-2xl font-black uppercase mb-8 border-b-2 border-zinc-50 pb-4 tracking-tighter">{item.title}</h3>
                   <ul className="space-y-4">
                      {item.topics.map((topic, j) => (
                        <li key={j} className="flex gap-3 text-sm font-bold text-zinc-600">
                           <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" /> {topic}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ABOUT MENTORS */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 border-2 border-brand-black shadow-hard bg-white overflow-hidden">
                <img 
                  src={actualMentorsImg} 
                  alt="Ingrid Zarza e Fernanda Bradaschia" 
                  className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold -z-0"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-brand-black -z-0"></div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.4em] block">AS VOZES POR TRÁS DO MÉTODO</span>
                <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tighter uppercase leading-tight">
                  DOMINE O CANTEIRO COM QUEM VIVE A OBRA <span className="text-brand-gold italic">TODOS OS DIAS.</span>
                </h2>
              </div>

              <div className="space-y-6 text-zinc-600 font-medium leading-relaxed text-sm md:text-base">
                <p>
                  Muito prazer, somos <span className="font-black text-brand-black">Ingrid Zarza e Fernanda Bradaschia</span>. Arquitetas apaixonadas por transformar o caos da gestão de obras em lucro e segurança técnica.
                </p>
                <p>
                  Fundamos a <span className="font-bold text-brand-black underline decoration-brand-gold underline-offset-4">INOVANDO ARQUITETURA</span> com um propósito claro: elevar o padrão dos projetos de interiores através de uma execução impecável. Juntas, já somamos <span className="font-black text-brand-black bg-brand-gold/20 px-1">+250 obras concluídas</span>, transformando o sonho de centenas de clientes em realidade técnica e estética.
                </p>
                <p>
                  Através do nosso Instagram <span className="font-black text-brand-black">@inovandonasuaobra</span>, compartilhamos diariamente a vida real do canteiro — sem filtros, com estratégias que só quem está no campo conhece. Em 2024, consolidamos esse conhecimento na nossa Mentoria, que já impactou dezenas de alunas que hoje dominam seus canteiros com confiança.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 border-2 border-zinc-100 flex flex-col items-center justify-center text-center">
                  <Trophy className="w-5 h-5 text-brand-gold mb-2" />
                  <span className="text-xl font-black text-brand-black tracking-tighter">+250</span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Obras Entregues</span>
                </div>
                <div className="p-4 border-2 border-zinc-100 flex flex-col items-center justify-center text-center">
                  <Users className="w-5 h-5 text-brand-gold mb-2" />
                  <span className="text-xl font-black text-brand-black tracking-tighter">Dezenas</span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Alunas Ativas</span>
                </div>
                <div className="p-4 border-2 border-zinc-100 flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
                  <HardHat className="w-5 h-5 text-brand-gold mb-2" />
                  <span className="text-xl font-black text-brand-black tracking-tighter">Campo</span>
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Vivência Real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="py-24 bg-zinc-50 border-y-2 border-brand-black">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16">
               <div className="space-y-8">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                     <Check className="w-6 h-6 text-brand-gold" /> É para o seu escritório se:
                  </h3>
                  <div className="space-y-3">
                     {QUALIFICATION.for.map((item, i) => (
                       <div key={i} className="flex items-center gap-4 bg-white border-2 border-brand-black p-4 shadow-hard">
                          <span className="text-sm font-black uppercase tracking-tight">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="space-y-8 opacity-50">
                  <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                     <XCircle className="w-6 h-6 text-zinc-400" /> Não é para você se:
                  </h3>
                  <div className="space-y-3">
                     {QUALIFICATION.notFor.map((item, i) => (
                       <div key={i} className="flex items-center gap-4 border-2 border-dashed border-zinc-200 p-4">
                          <span className="text-sm font-bold text-zinc-400">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* BONUSES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20 space-y-2">
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.5em] block">FERRAMENTAS DE ALTO PADRÃO</span>
              <h2 className="text-4xl font-black text-brand-black tracking-tighter uppercase">MATERIAIS INCLUSOS</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {BONUSES.map((bonus, idx) => (
                <div key={idx} className="bg-white border-2 border-brand-black p-10 shadow-gold flex flex-col items-center text-center group">
                   <div className="mb-6 text-brand-black group-hover:scale-110 transition-transform">
                      {bonus.icon}
                   </div>
                   <h3 className="text-xs font-black uppercase mb-3 tracking-widest text-brand-black">{bonus.title}</h3>
                   <p className="text-[13px] text-zinc-500 mb-8 font-medium leading-relaxed">{bonus.description}</p>
                   <div className="mt-auto pt-6 border-t border-zinc-50 w-full">
                      <span className="text-[10px] font-black text-brand-gold bg-brand-black px-4 py-1.5 uppercase tracking-widest">BÔNUS LIBERADO</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA & FAQ */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-brand-black border-2 border-brand-gold p-12 md:p-20 text-center shadow-hard">
             <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
               Assuma o comando técnico <br /> do seu escritório hoje.
             </h2>
             <button onClick={() => document.getElementById('ingresso')?.scrollIntoView({ behavior: 'smooth' })} 
                     className="bg-brand-gold text-brand-black px-12 py-5 text-sm font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-hard mb-10">
                QUERO MEU ACESSO • R$ 49,90
             </button>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
                   <ShieldCheck className="w-4 h-4 text-brand-gold" /> Garantia de 7 Dias
                </p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
                   <Lock className="w-4 h-4 text-brand-gold" /> Pagamento Seguro
                </p>
             </div>
          </div>

          <div className="mt-24 space-y-4">
            <h3 className="text-xl font-black text-center mb-10 uppercase tracking-widest">Dúvidas Frequentes</h3>
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="bg-white border-2 border-brand-black shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex justify-between items-center px-6 py-5 text-left">
                  <span className="font-black text-xs uppercase tracking-widest text-brand-black">{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4 text-zinc-300" />}
                </button>
                {openFaqIndex === idx && <div className="px-6 pb-6 text-zinc-500 text-sm font-medium leading-relaxed border-t-2 border-zinc-50 pt-5">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 border-t-2 border-brand-black">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <Logo className="w-12 h-12" variant="black" />
          <div className="flex gap-8">
             <a href="https://instagram.com/inovandonasuaobra" target="_blank" className="text-zinc-400 hover:text-brand-black transition-colors">
                <Instagram className="w-6 h-6" />
             </a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 text-center">
            CRONOGRAMA O MAPA DE OBRAS 2.0 <br /> 
            <span className="text-[8px] tracking-[0.5em] text-zinc-200">Inovando Arquitetura • 2026</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
