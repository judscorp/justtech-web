import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Redução de tarefas manuais",
  "Mais organização nos processos",
  "Melhor comunicação interna",
  "Maior controle das operações",
  "Aumento de produtividade",
];

const Benefits = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(75 63% 81%) 1px, transparent 1px), linear-gradient(90deg, hsl(75 63% 81%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Resultados</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary-foreground">
            Benefícios para sua empresa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 px-6 py-4">
              <CheckCircle2 className="text-accent shrink-0" size={22} />
              <span className="font-medium text-primary-foreground">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
