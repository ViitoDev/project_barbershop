import { Scissors, Calendar, Droplets, Coffee, SprayCan, Sparkles, ChevronRight } from "lucide-react";

export default function Home() {
  const whatsappNumber = "5511999999999"; 
  const message = "Olá! Gostaria de agendar um horário na Hanser Corte Masculino.";
  const whatsappLink = `https://api.whatsapp.com/send?phone=5512988284651&text=Ol%C3%A1%20vim%20do%20site%20gostaria%20de%20um%20atendimento%20`;

  const features = [
    { name: "Corte Clássico", icon: <Scissors size={32} strokeWidth={1.5} /> },
    { name: "Lavagem", icon: <Droplets size={32} strokeWidth={1.5} /> },
    { name: "Barboterapia", icon: <SprayCan size={32} strokeWidth={1.5} /> },
    { name: "Resenha & Café", icon: <Coffee size={32} strokeWidth={1.5} /> },
  ];

  const services = [
    {
      title: "Corte na Tesoura",
      desc: "Corte clássico ou moderno, finalizado com perfeição na tesoura para um caimento natural.",
      icon: <Scissors size={28} className="text-barber-gold" />
    },
    {
      title: "Design de Barba",
      desc: "Alinhamento e desenho perfeito para o seu formato de rosto, com toalha quente e navalha.",
      icon: <SprayCan size={28} className="text-barber-gold" />
    },
    {
      title: "Barboterapia",
      desc: "Relaxamento total. Hidratação dos fios, massagem facial e um barbear impecável.",
      icon: <Droplets size={28} className="text-barber-gold" />
    },
    {
      title: "Estética Masculina",
      desc: "Limpeza de pele, hidratação capilar e cuidados essenciais para a sua imagem.",
      icon: <Sparkles size={28} className="text-barber-gold" />
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-barber-dark">
      {/* === HERO SECTION === */}
      <div className="relative flex flex-col min-h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        <header className="relative z-10 flex items-center justify-between py-6 px-8 md:px-16 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Scissors className="text-barber-gold" size={28} />
            <span className="text-2xl font-bold tracking-wider text-white">HANSER</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-barber-grayText">
            <a href="#" className="hover:text-barber-gold transition-colors">Home</a>
            <a href="#sobre" className="hover:text-barber-gold transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-barber-gold transition-colors">Serviços</a>
          </nav>

          <a href={whatsappLink} target="_blank" className="hidden md:flex items-center gap-2 border border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-white px-5 py-2 rounded transition-all text-sm font-bold uppercase">
            <Calendar size={16} /> Agendar
          </a>
        </header>

        <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-10 pb-40">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-barber-gold"></div>
            <span className="text-barber-gold font-bold tracking-[0.3em] uppercase text-sm">Est. 2024</span>
            <div className="h-[1px] w-12 bg-barber-gold"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
            Hanser Corte <br /> <span className="text-barber-gold">Masculinos</span>
          </h1>
          
          <p className="text-barber-grayText max-w-xl mx-auto mb-10 text-lg">
            Tradição, estilo e um atendimento de primeira. Agende seu horário e tenha a melhor experiência em barbearia da região.
          </p>

          <a href={whatsappLink} target="_blank" className="bg-barber-gold hover:bg-barber-goldHover text-white px-8 py-4 rounded font-bold uppercase tracking-widest flex items-center gap-3 transition-all transform hover:scale-105">
            <Calendar size={20} /> Agendar Meu Horário
          </a>
        </section>
      </div>

      {/* === MENU FLUTUANTE DE ÍCONES === */}
      <div className="relative z-20 -mt-20 max-w-5xl mx-auto px-4 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-barber-darker border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center gap-4 hover:border-barber-gold/50 transition-all group shadow-xl">
              <div className="w-20 h-20 rounded-full border border-barber-gold/30 flex items-center justify-center text-barber-grayText group-hover:text-barber-gold group-hover:border-barber-gold transition-all duration-300">
                {feature.icon}
              </div>
              <span className="text-sm font-semibold text-white tracking-wider uppercase text-center">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === SOBRE NÓS === */}
      <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 grid grid-cols-2 gap-4 relative w-full">
          <div className="flex flex-col gap-4 pt-12">
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" alt="Corte na tesoura" className="rounded-lg object-cover h-64 w-full shadow-lg" />
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" alt="Corte na máquina" className="rounded-lg object-cover h-48 w-full shadow-lg" />
          </div>
          <div className="flex flex-col gap-4">
            <img src="https://images.unsplash.com/photo-1512496015851-a1dc8bbc1e2e?q=80&w=800&auto=format&fit=crop" alt="Ambiente da barbearia" className="rounded-lg object-cover h-56 w-full shadow-lg" />
            <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop" alt="Equipamentos" className="rounded-lg object-cover h-72 w-full shadow-lg" />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-barber-gold font-bold tracking-widest uppercase text-sm mb-4">A Experiência Hanser</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
            Você com certeza terá um tempo <span className="text-barber-gold">clássico e de respeito.</span>
          </h2>
          <p className="text-barber-grayText mb-8 leading-relaxed text-lg">
            Existem coisas que as pessoas dizem na barbearia que não diriam nem na própria sala de estar. Porque é apenas um desses espaços onde você pode ser você mesmo. Venha para a esquina para um ótimo corte, uma boa conversa e um ambiente diferenciado.
          </p>
          
          <div className="flex items-center gap-4 bg-barber-darker p-5 rounded-lg border border-white/5 inline-flex w-full md:w-auto">
            <img src="https://ui-avatars.com/api/?name=Hanser&background=C59D5F&color=fff&size=128" alt="Hanser" className="w-14 h-14 rounded-full border-2 border-barber-gold" />
            <div>
              <p className="text-white font-bold text-lg">Hanser</p>
              <p className="text-barber-gold text-xs uppercase tracking-widest">Fundador & Mestre Barbeiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* === NOSSOS SERVIÇOS (NOVO) === */}
      <section id="servicos" className="py-24 px-6 max-w-7xl mx-auto w-full text-center">
        <h4 className="text-barber-gold font-bold tracking-widest uppercase text-sm mb-4">Nossos Serviços</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 uppercase">
          Serviços que <span className="text-barber-gold">Oferecemos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {services.map((service, index) => (
            <div key={index} className="bg-barber-darker border border-white/5 hover:border-barber-gold/50 p-8 rounded-lg transition-all group flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-barber-grayText text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>
              <a href={whatsappLink} target="_blank" className="flex items-center gap-2 text-barber-gold text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                Agendar Agora <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a href={whatsappLink} target="_blank" className="inline-block border border-white/20 hover:border-barber-gold text-white hover:text-barber-gold px-10 py-4 rounded uppercase tracking-widest font-bold transition-all text-sm">
            Ver Todos os Serviços
          </a>
        </div>
      </section>
      
      {/* RODAPÉ SIMPLES */}
      <footer className="bg-[#050505] py-8 text-center border-t border-white/5">
        <p className="text-barber-grayText text-sm">
          &copy; {new Date().getFullYear()} Hanser Corte Masculino. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}