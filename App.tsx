
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

// Using relative paths to ensure Vite resolves them correctly during the build process
const LOGO_BLACK_GOLD = "./input_file_0.png";
const LOGO_WHITE_GOLD = "./input_file_1.png";
const actualMentorsImg = "./input_file_2.png";

// Logo component used for branding across the page
const Logo = ({ className = "w-10 h-10", variant = "black" }: { className?: string; variant?: "black" | "white" }) => (
  <img 
    src={variant === "black" ? LOGO_BLACK_GOLD : LOGO_WHITE_GOLD} 
    alt="Logo Cronograma O Mapa de Obras 2.0" 
    className={`${className} object-contain block`}
    style={{ minWidth: '32px' }}
  />
);

// Countdown timer to create urgency for the offer
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

// Main navigation bar
const Header = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-brand-black py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Logo className="w-10 h-10" variant="black" />
        <span className="font-black text-brand-black text-[10px] md:text-xs uppercase tracking-tighter">CRONOGRAMA O MAPA DE OBRAS 2.0</span>
      </div>
      <button onClick={() => document.getElementById('ingresso')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-brand-black text-brand-gold px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all">
        GARANTIR VAGA
      </button>
    </div>
  </nav>
);

// Lead generation form for workshop registration
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

// Main Application component
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

      {/* AGENDA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Cronograma do Workshop</h2>
            <p className="text-zinc-500 font-medium">Dois dias de imersão profunda na prática do canteiro.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {AGENDA.map((item, idx) => (
              <div key={idx} className="border-2 border-brand-black p-8 relative shadow-hard bg-white">
                <div className="absolute -top-4 -left-4 bg-brand-gold text-brand-black font-black px-4 py-1 text-[10px] uppercase border-2 border-brand-black">
                  {item.day}
                </div>
                <div className="mb-6">
                  <span className="text-[10px] font-black text-brand-gold bg-brand-black px-2 py-1 uppercase tracking-widest block w-fit mb-2">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tighter">{item.title}</h3>
                </div>
                <ul className="space-y-4">
                  {item.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-zinc-50 border-y-2 border-brand-black">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white border-2 border-brand-black shadow-hard overflow-hidden">
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors"
                >
                  <span className="font-bold text-sm uppercase tracking-tight">{item.question}</span>
                  {openFaqIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 text-sm text-zinc-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black text-white py-12">
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <Logo variant="white" className="w-12 h-12" />
          <div className="flex gap-4">
            <a href="#" className="text-zinc-400 hover:text-brand-gold transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold text-center">
            © 2024 CRONOGRAMA O MAPA DE OBRAS - TODOS OS DIREITOS RESERVADOS
          </p>
        </div>
      </footer>
    </div>
  );
};

// Fixed: Added missing default export
export default App;
