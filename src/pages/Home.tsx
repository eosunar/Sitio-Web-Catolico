import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, MessageSquare, GraduationCap, Newspaper, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Oraciones",
    description: "Encuentra consuelo y conexión divina.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=800&auto=format&fit=crop",
    href: "/oraciones",
    color: "bg-amber-50"
  },
  {
    title: "Noticias Religiosas",
    description: "Mantente al día con la Iglesia en el mundo.",
    icon: Newspaper,
    image: "https://images.unsplash.com/photo-1548625361-195fe57724e1?q=80&w=800&auto=format&fit=crop",
    href: "/noticias",
    color: "bg-blue-50"
  },
  {
    title: "Testimonios",
    description: "Historias reales de fe que inspiran.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    href: "/testimonios",
    color: "bg-rose-50"
  },
  {
    title: "Seminarios",
    description: "Aprende y profundiza en tu camino espiritual.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    href: "/seminarios",
    color: "bg-emerald-50"
  },
  {
    title: "Reflexiones",
    description: "Meditaciones diarias para el alma.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800&auto=format&fit=crop",
    href: "/reflexiones",
    color: "bg-stone-50"
  },
  {
    title: "Comunidad",
    description: "Únete a otros en oración y fraternidad.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    href: "/comunidad",
    color: "bg-indigo-50"
  }
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2000&auto=format&fit=crop"
            alt="Iglesia al atardecer"
            className="h-full w-full object-cover brightness-[0.6]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Un espacio de <span className="text-primary">fe y esperanza</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
              Encuentra paz y guía espiritual cada día en nuestra comunidad digital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white" 
                render={<Link to="/oraciones" />}
                nativeButton={false}
              >
                Explorar Oraciones
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black">
                Unirse a la Comunidad
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Descubre tu camino</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora nuestras secciones diseñadas para fortalecer tu espíritu y conectarte con lo divino.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={cat.href}>
                  <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <div className={cn("p-3 rounded-2xl backdrop-blur-md bg-white/80 text-primary shadow-lg")}>
                          <cat.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle className="text-2xl font-heading mb-2 group-hover:text-primary transition-colors">
                        {cat.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {cat.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                        Saber más <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-semibold uppercase tracking-widest mb-4 block">Reflexión del día</span>
            <blockquote className="font-heading text-3xl md:text-5xl italic text-foreground/80 leading-snug mb-8">
              "La fe no es una luz que disipa todas nuestras tinieblas, sino una lámpara que guía nuestros pasos en la noche."
            </blockquote>
            <cite className="text-lg font-medium not-italic">— Papa Francisco</cite>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </section>
    </div>
  );
}
