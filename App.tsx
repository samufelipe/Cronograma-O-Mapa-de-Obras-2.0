
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Instagram, 
  ChevronDown, 
  ChevronUp,
  User,
  Mail,
  Phone,
  Star,
  CheckCircle2,
  Timer,
  ShoppingBag,
  Eye,
  HardHat,
  MessageCircle,
  MonitorPlay,
  MailCheck,
  UserPlus,
  ShieldCheck,
  Target,
  CheckCircle,
  ArrowUpRight,
  ShieldQuestion,
  Gift,
  XCircle,
  CreditCard,
  Lock,
  Flame,
  TrendingDown,
  TrendingUp,
  Check,
  Info,
  Award,
  Zap,
  Calendar
} from 'lucide-react';
import { LEARNING_CARDS, FAQ_ITEMS, ICON_MAP, BONUSES } from './constants';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 500 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M120 320 L420 50 L350 450 Z" fill="#FFB800" />
    <path d="M50 350 L180 250 L180 450 L50 350 Z" fill="black" />
  </svg>
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
    <div className="flex gap-2 justify-center lg:justify-start items-center font-black">
      <div className="bg-black text-brand-gold px-2 py-1 rounded text-sm">{String(timeLeft.h).padStart(2, '0')}h</div>
      <span className="text-black text-sm">:</span>
      <div className="bg-black text-brand-gold px-2 py-1 rounded text-sm">{String(timeLeft.m).padStart(2, '0')}m</div>
      <span className="text-black text-sm">:</span>
      <div className="bg-black text-brand-gold px-2 py-1 rounded text-sm">{String(timeLeft.s).padStart(2, '0')}s</div>
      <span className="text-[9px] text-black/40 uppercase tracking-widest ml-2">Vagas de Lote 1</span>
    </div>
  );
};

const scrollToForm = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  const element = document.getElementById('ingresso');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Header = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-black/5 py-3">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Logo className="w-7 h-7" />
        <div className="hidden sm:block">
          <span className="font-black text-black text-sm tracking-tighter block leading-none uppercase">Inovando</span>
          <span className="text-brand-gold font-bold text-[7px] uppercase tracking-[0.3em]">Arquitetura</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={scrollToForm} className="bg-black text-white px-5 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all">
          Garantir Vaga
        </button>
      </div>
    </div>
  </nav>
);

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://checkout.hotmart.com/YOUR_HOTMART_CODE_HERE";
  };

  return (
    <div id="ingresso" className="bg-white border-2 border-black p-8 md:p-10 shadow-[24px_24px_0px_0px_rgba(255,184,0,1)] relative z-10 scroll-mt-32">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-gold text-black px-3 py-1 mb-3">
           <Zap className="w-3 h-3 fill-current" />
           <span className="text-[9px] font-black uppercase tracking-widest text-black">Participação Online</span>
        </div>
        <h3 className="text-xl font-black text-black mb-1 uppercase tracking-tighter">Reserve seu Ingresso Live</h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Acesso aos 2 dias de evento</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[9px] font-black text-black/40 uppercase tracking-widest ml-1">Nome da Arquiteta</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/20" />
            <input required type="text" placeholder="Ex: Arq. Fernanda Silva"
              className="w-full bg-gray-50 border border-black/10 py-4 pl-10 pr-4 text-xs font-bold focus:bg-white focus:border-brand-gold outline-none transition-all"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-[9px] font-black text-black/40 uppercase tracking-widest ml-1">Seu Melhor E-mail</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/20" />
            <input required type="email" placeholder="seu@email.com"
              className="w-full bg-gray-50 border border-black/10 py-4 pl-10 pr-4 text-xs font-bold focus:bg-white focus:border-brand-gold outline-none transition-all"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-black text-black/40 uppercase tracking-widest ml-1">WhatsApp de Contato</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/20" />
            <input required type="tel" placeholder="(00) 00000-0000"
              className="w-full bg-gray-50 border border-black/10 py-4 pl-10 pr-4 text-xs font-bold focus:bg-white focus:border-brand-gold outline-none transition-all"
              value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>

        <div className="pt-2">
          <div className="flex justify-between items-end mb-4 px-1">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 line-through uppercase tracking-tighter">De R$ 197,00</span>
              <span className="text-4xl font-black text-black">R$ 49,90</span>
            </div>
            <div className="text-right">
              <span className="text-[8px] font-black bg-black text-brand-gold px-2 py-1 uppercase tracking-widest block mb-1">PAGAMENTO ÚNICO</span>
              <div className="flex items-center gap-1 justify-end text-brand-gold">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
            </div>
          </div>
          
          <button type="submit" className="w-full bg-black text-white py-6 btn-elegant flex items-center justify-center gap-3 text-xs tracking-[0.2em] hover:bg-brand-gold hover:text-black shadow-xl group">
            GARANTIR MEU ACESSO LIVE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 border-t border-black/5 pt-4 flex flex-col items-center gap-3">
             <div className="flex gap-4 grayscale opacity-40">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-3" alt="Paypal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="Mastercard" />
             </div>
             <div className="flex items-center gap-2 text-[8px] font-black text-gray-400 uppercase tracking-widest text-center">
                <Lock className="w-3 h-3" /> Evento Online via Hotmart
             </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 lg:hidden section-fade">
      <button onClick={scrollToForm} className="w-full bg-black text-brand-gold py-5 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t-2 border-brand-gold">
         Garantir Ingresso Workshop <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="antialiased">
      <Header />
      <StickyCTA />

      {/* HERO SECTION - FOCO EM ARQUITETAS AUTÔNOMAS 2-5 ANOS */}
      <section className="relative min-h-[90vh] flex items-center bg-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 section-fade">
              <div className="space-y-6 lg:space-y-8 mb-8 text-center lg:text-left">
                <Countdown />
                <div className="inline-block bg-black text-brand-gold px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em]">
                  Para arquitetas autônomas com 2 a 5 anos de mercado
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-[52px] font-black text-black leading-[1.1] tracking-tight uppercase">
                  O PRÓXIMO PASSO PARA <br className="hidden lg:block" />
                  ARQUITETAS QUE QUEREM <br className="hidden lg:block" />
                  <span className="text-brand-gold">DOMINAR O ESCRITÓRIO PRÓPRIO.</span>
                </h1>
                <p className="text-base md:text-xl text-black/70 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                  Pare de se sentir perdida no canteiro e assuma o comando técnico que o <span className="text-black font-black uppercase underline decoration-brand-gold decoration-4 underline-offset-4">alto padrão exige</span> da sua gestão.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-gold p-1.5"><Calendar className="w-4 h-4 text-black" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">31 Jan • 01 Fev</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-brand-gold p-1.5"><MonitorPlay className="w-4 h-4 text-black" /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black">Ao Vivo via Zoom</span>
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

      {/* BARRA DE AUTORIDADE / NÚMEROS */}
      <div className="bg-black py-8 border-y border-white/10 overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
               {[
                 { label: "Obras de Alto Padrão", val: "+250" },
                 { label: "Profissionais Formadas", val: "+1.2k" },
                 { label: "Experiência de Mercado", val: "12 Anos" },
                 { label: "Taxa de Aprovação", val: "98%" }
               ].map((item, i) => (
                 <div key={i} className="text-center md:text-left">
                    <span className="block text-2xl font-black text-brand-gold tracking-tighter">{item.val}</span>
                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em]">{item.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* O DESAFIO: ARQUITETA 1.0 VS 2.0 (REFINADO PARA AUTÔNOMAS) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Sua Transformação Profissional</span>
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter uppercase">VOCÊ PROJETA LUXO, <br/> MAS <span className="italic">GERENCIA CRISES?</span></h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gray-50 border border-black/5 p-10 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 text-black/5 group-hover:text-black/10 transition-colors">
                    <TrendingDown className="w-24 h-24" />
                 </div>
                 <h3 className="text-xl font-black uppercase mb-8 border-b-2 border-black/10 pb-4">A Arquiteta "Desenhista"</h3>
                 <ul className="space-y-5">
                    {[
                      "Acha que seu papel acaba no projeto executivo.",
                      "Sente que sua autoridade é testada toda vez que pisa na obra.",
                      "Tem medo de perguntas técnicas de mestres e fornecedores.",
                      "Perde dinheiro (e saúde) apagando incêndios que não previu."
                    ].map((txt, i) => (
                      <li key={i} className="flex gap-4 text-sm font-medium text-black/40">
                         <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> {txt}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-black p-10 relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 p-4 text-brand-gold/10">
                    <TrendingUp className="w-24 h-24" />
                 </div>
                 <h3 className="text-xl font-black uppercase mb-8 border-b-2 border-brand-gold pb-4 text-white">A Arquiteta <span className="text-brand-gold">Gestora 2.0</span></h3>
                 <ul className="space-y-5">
                    {[
                      "Usa o acompanhamento de obra como maior vitrine de vendas.",
                      "Domina o cronograma e antecipa problemas antes deles custarem caro.",
                      "É respeitada por todos os fornecedores pela sua base técnica.",
                      "Cobra honorários de gestão e escala o faturamento do escritório."
                    ].map((txt, i) => (
                      <li key={i} className="flex gap-4 text-sm font-medium text-white">
                         <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-gold" /> {txt}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO DE BÔNUS - STACK VISUAL */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">Workshop + Kit de Escalonamento</span>
              <h2 className="text-3xl font-black text-black tracking-tighter uppercase">UM INVESTIMENTO PARA <span className="italic">O SEU ESCRITÓRIO.</span></h2>
              <p className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest text-center">Ferramentas prontas para aplicação imediata</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {BONUSES.map((bonus, idx) => (
                <div key={idx} className="bg-white border border-black/10 p-8 shadow-xl hover:border-brand-gold transition-all relative overflow-hidden flex flex-col h-full">
                   <div className="mb-6 bg-black text-brand-gold w-12 h-12 flex items-center justify-center rounded-none">
                      {React.isValidElement(bonus.icon) ? React.cloneElement(bonus.icon as any, { className: "w-6 h-6" }) : <Gift className="w-6 h-6" />}
                   </div>
                   <h3 className="text-sm font-black uppercase mb-3 leading-tight">{bonus.title}</h3>
                   <p className="text-[11px] text-gray-500 mb-8 leading-relaxed flex-grow">{bonus.description}</p>
                   <div className="pt-4 border-t border-black/5 flex justify-between items-center mt-auto">
                      <span className="text-[9px] font-black uppercase text-gray-300 line-through">De {bonus.value}</span>
                      <span className="text-[9px] font-black uppercase text-brand-gold bg-black px-2 py-1">INCLUSO</span>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="max-w-xl mx-auto bg-black p-8 text-center shadow-2xl border-b-4 border-brand-gold">
              <h4 className="text-white text-lg font-black uppercase mb-4 tracking-tighter text-center">O QUE VOCÊ LEVA HOJE:</h4>
              <div className="space-y-2 mb-8 text-left">
                 <p className="text-[10px] text-white/50 uppercase font-bold flex justify-between"><span>Workshop Mapa de Obras 2.0</span> <span>R$ 197,00</span></p>
                 <p className="text-[10px] text-white/50 uppercase font-bold flex justify-between"><span>Template de Cronograma Real</span> <span>R$ 197,00</span></p>
                 <p className="text-[10px] text-white/50 uppercase font-bold flex justify-between"><span>Checklist de Primeira Visita</span> <span>R$ 47,00</span></p>
                 <p className="text-[10px] text-white/50 uppercase font-bold flex justify-between"><span>Guia de Precificação de Gestão</span> <span>R$ 97,00</span></p>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-center mb-8">
                 <span className="text-white text-xs font-black uppercase">VALOR TOTAL:</span>
                 <span className="text-white text-xs font-black line-through opacity-40 uppercase">R$ 538,00</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-brand-gold text-sm font-black uppercase">HOJE APENAS:</span>
                 <span className="text-brand-gold text-4xl font-black">R$ 49,90</span>
              </div>
              <p className="text-[8px] text-white/30 uppercase mt-4 tracking-widest text-center">Acesso individual aos 2 dias de live. Não inclui consultoria privada.</p>
           </div>

           <div className="mt-12 text-center">
              <button onClick={scrollToForm} className="bg-black text-white px-12 py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-black transition-all shadow-2xl group">
                 GARANTIR MEU ACESSO LIVE <ArrowRight className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div>
      </section>

      {/* QUALIFICAÇÃO (PÚBLICO ALVO ESPECÍFICO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
             <div className="space-y-8">
                <h3 className="text-xl font-black uppercase border-l-4 border-brand-gold pl-4 flex items-center gap-3">
                   Este Workshop é para você se:
                </h3>
                <ul className="space-y-5">
                   {[
                     "Você tem de 2 a 5 anos de mercado e ainda se sente 'perdida' no canteiro.",
                     "É arquiteta autônoma ou dona de escritório e quer profissionalizar sua gestão própria.",
                     "Sente que a faculdade te ensinou a projetar, mas não te deu base técnica para executar.",
                     "Quer ser respeitada tecnicamente por fornecedores e clientes de alto padrão."
                   ].map((item, i) => (
                     <li key={i} className="flex gap-3 text-sm font-medium text-black/70 text-left">
                        <Check className="w-5 h-5 text-brand-gold flex-shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="space-y-8 opacity-60">
                <h3 className="text-xl font-black uppercase border-l-4 border-gray-200 pl-4 flex items-center gap-3">
                   NÃO é para você se:
                </h3>
                <ul className="space-y-5">
                   {[
                     "Você ainda é estudante e nunca teve contato com o mercado real.",
                     "Você busca uma consultoria individual ou mentoria personalizada neste momento.",
                     "Acha que o papel da arquiteta é apenas fazer imagens bonitas.",
                     "Está satisfeita com o amadorismo e a falta de controle nas suas obras."
                   ].map((item, i) => (
                     <li key={i} className="flex gap-3 text-sm font-medium text-black/40 italic text-left">
                        <XCircle className="w-5 h-5 text-gray-200 flex-shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* MENTORAS */}
      <section id="mentoras" className="py-24 bg-black text-white relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative group">
               <div className="absolute inset-0 bg-brand-gold opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/arch-mentors-bw.jpg" alt="Mentoras" className="w-full grayscale shadow-2xl relative z-10 border-b-8 border-brand-gold" />
               <div className="absolute -bottom-6 -right-6 bg-brand-gold text-black p-6 z-20 shadow-2xl text-center">
                  <span className="text-3xl font-black block tracking-tighter">+250</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Obras Entregues</span>
               </div>
            </div>
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-6 py-1 px-3 border border-brand-gold/30 bg-brand-gold/10">
                <Award className="w-3 h-3 text-brand-gold" />
                <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">Expertise Comprovada</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-8 leading-[0.9]">INGRID ZARZA & <br/><span className="italic text-brand-gold">FERNANDA BRADASCHIA.</span></h2>
              <div className="space-y-6 text-white/60 font-medium text-lg leading-relaxed mb-10 text-left">
                <p>Com mais de 12 anos de experiência e centenas de obras de alto padrão no portfólio, a <strong>Inovando Arquitetura</strong> nasceu da necessidade de profissionais que projetam luxo, mas não aceitam a ineficiência no canteiro.</p>
                <p>Neste workshop online, abriremos o método que permitiu escalar nosso escritório para gerenciar múltiplas obras simultâneas com controle total e previsibilidade financeira.</p>
              </div>
              <button onClick={scrollToForm} className="bg-brand-gold text-black px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
                 CONHECER O MÉTODO <ArrowUpRight className="w-4 h-4 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-gray-50 border-2 border-black p-10 flex flex-col md:flex-row items-center gap-10 shadow-2xl text-left">
               <ShieldCheck className="w-20 h-20 text-brand-gold flex-shrink-0" />
               <div>
                  <h2 className="text-2xl font-black uppercase mb-4 tracking-tighter">7 DIAS DE SEGURANÇA TOTAL.</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">Você entra, participa do primeiro dia ao vivo e avalia o conteúdo. Se entender que o método não serve para o seu nível atual de escritório, devolvemos 100% do seu investimento. <strong>Seu risco é zero.</strong></p>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ REFINADO */}
      <section className="py-24 bg-gray-50 border-t border-black/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-black tracking-tighter uppercase">DÚVIDAS FREQUENTES</h2>
          </div>
          <div className="space-y-4 mb-16">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-black/5 shadow-sm">
                <button onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)} className="w-full flex justify-between items-center px-8 py-5 text-left group">
                  <span className="font-black text-[10px] uppercase tracking-widest leading-relaxed pr-4">{faq.question}</span>
                  {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-brand-gold" /> : <ChevronDown className="w-4 h-4 text-brand-gold" />}
                </button>
                {openFaqIndex === idx && <div className="px-8 pb-6 text-gray-500 text-xs leading-relaxed border-t border-black/5 pt-5 animate-fadeIn">{faq.answer}</div>}
              </div>
            ))}
          </div>
          <div className="text-center space-y-6">
             <button onClick={scrollToForm} className="bg-black text-white px-12 py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-black shadow-2xl w-full sm:w-auto">
                QUERO O MEU ACESSO LIVE
             </button>
             <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                <Info className="w-3 h-3" /> Transmissão exclusiva via Zoom/Hotmart
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 border-b border-white/5 pb-12">
            <div className="flex items-center gap-4">
              <Logo className="w-8 h-8" />
              <div className="text-left">
                <span className="font-black text-white text-xl tracking-tighter uppercase block leading-none">INOVANDO</span>
                <span className="text-brand-gold font-bold text-[8px] uppercase tracking-[0.4em]">Arquitetura</span>
              </div>
            </div>
            <div className="flex gap-12">
              <a href="https://instagram.com/inovandonasuaobra" target="_blank" className="flex items-center gap-3 hover:text-brand-gold transition-colors text-[10px] font-black uppercase tracking-widest">
                <Instagram className="w-5 h-5" /> @inovandonasuaobra
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-white/20">
            <p>© 2026 Inovando Arquitetura. Todos os direitos reservados.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
