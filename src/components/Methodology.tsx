import { Search, Map, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico do negócio",
    description: "Análise dos processos e identificação de gargalos.",
  },
  {
    icon: Map,
    title: "Mapeamento de processos",
    description: "Entendimento de como a empresa opera no dia a dia.",
  },
  {
    icon: Wrench,
    title: "Implementação de soluções",
    description: "Aplicação de ferramentas para melhorar a eficiência do seu negócio.",
  },
  {
    icon: TrendingUp,
    title: "Monitoramento e melhoria",
    description: "Acompanhamento contínuo e evolução das soluções.",
  },
];

const Methodology = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Metodologia</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Como trabalhamos
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] glow-line" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors relative z-10 bg-background">
                <step.icon className="text-accent" size={24} />
              </div>
              <span className="text-xs font-bold text-accent mb-2 block">0{i + 1}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
