import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, ClipboardCheck } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Entre em contato e descubra como a tecnologia pode transformar a operação da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" size={20} />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="mailto:contato@justtech.com">
                <Mail className="mr-2" size={20} />
                Enviar e-mail
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contato">
                <ClipboardCheck className="mr-2" size={20} />
                Solicitar diagnóstico
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
