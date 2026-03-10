import { Cog, Database, MessageCircle, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Cog,
    title: "Automação de processos",
    description: "Automatização de tarefas repetitivas, agentes de IA, integração de sistemas.",
  },
  {
    icon: Database,
    title: "Análise de dados",
    description: "Dashboards, relatórios automáticos, acompanhamento de indicadores.",
  },
  {
    icon: MessageCircle,
    title: "Organização de processos",
    description: "Sistemas de comunicação interna, atendimento, agendamento ou lembretes automáticos.",
  },
  {
    icon: BarChart3,
    title: "Comunicação visual",
    description: "Páginas web, estrutura de comunicação, identidade visual, gestão de redes e mais.",
  },
];

const Solutions = () => {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Soluções oferecidas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((sol) => (
            <div key={sol.title} className="glass-card rounded-xl p-8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <sol.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{sol.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
