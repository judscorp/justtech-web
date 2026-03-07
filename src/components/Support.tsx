import { Headphones } from "lucide-react";

const Support = () => {
  return (
    <section id="suporte" className="py-24 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <Headphones className="text-accent" size={32} />
          </div>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Suporte</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Acompanhamento contínuo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Just Tech oferece acompanhamento contínuo para garantir que as soluções implementadas continuem evoluindo junto com o crescimento da empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
