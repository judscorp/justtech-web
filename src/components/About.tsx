import { Target, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const highlights = [
  { icon: Target, label: "Identificação de gargalos" },
  { icon: Lightbulb, label: "Soluções tecnológicas" },
  { icon: Shield, label: "Eficiência garantida" }];


  return (
    <section id="quem-somos" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Quem somos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Sobre a Just Tech
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">A Just Tech é uma agência focada em melhoria operacional através da tecnologia. Nosso objetivo é identificar gargalos dentro das empresas e aplicar soluções tecnológicas simples que aumentem produtividade, organização e eficiência no dia a dia do seu negócio.

          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {highlights.map((item) =>
          <div key={item.label} className="glass-card rounded-xl p-6 text-center hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-accent/10 mx-auto mb-4 flex items-center justify-center shadow">
                <item.icon className="text-accent" size={24} />
              </div>
              <p className="font-medium text-foreground">{item.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default About;