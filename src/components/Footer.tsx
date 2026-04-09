import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Inicio", href: "/" },
  { name: "Oraciones", href: "/oraciones" },
  { name: "Noticias", href: "/noticias" },
  { name: "Testimonios", href: "/testimonios" },
  { name: "Seminarios", href: "/seminarios" },
  { name: "Comunidad", href: "/comunidad" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <Link to="/" className="font-heading text-xl font-bold tracking-tight text-primary">
            Luz de Fe
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luz de Fe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
