const Footer = () => {
  const links = [
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Contato", href: "#contato" },
    { label: "Suporte", href: "#suporte" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-heading font-bold text-foreground">Just Tech</span>
            <p className="text-sm text-muted-foreground mt-1">
              Soluções tecnológicas para eficiência empresarial.
            </p>
          </div>

          <nav className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Just Tech — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
