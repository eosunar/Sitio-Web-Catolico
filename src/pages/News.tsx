import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Calendar, User, ArrowRight } from "lucide-react";

const news = [
  {
    title: "El Papa Francisco pide paz en el mundo",
    date: "8 Abr, 2026",
    author: "Vatican News",
    category: "Vaticano",
    excerpt: "Durante la audiencia general, el Santo Padre hizo un llamado urgente a la fraternidad universal y al cese de los conflictos armados.",
    image: "https://images.unsplash.com/photo-1548625361-195fe57724e1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nueva encíclica sobre el cuidado de la creación",
    date: "5 Abr, 2026",
    author: "Luz de Fe",
    category: "Doctrina",
    excerpt: "Se anuncia la publicación de un nuevo documento que profundiza en la ecología integral y nuestra responsabilidad como custodios de la tierra.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Jornada Mundial de la Juventud 2027",
    date: "2 Abr, 2026",
    author: "JMJ Org",
    category: "Eventos",
    excerpt: "Se revelan los primeros detalles de la sede y el lema para el próximo encuentro masivo de jóvenes católicos de todo el mundo.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
  }
];

export function News() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Noticias Religiosas</h1>
        <p className="text-muted-foreground">Mantente informado sobre la actualidad de nuestra fe y la Iglesia.</p>
      </div>

      <div className="grid gap-12">
        {news.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-none shadow-none bg-transparent flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center py-4">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="mr-1 h-4 w-4" />
                    {item.author}
                  </div>
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform cursor-pointer">
                  Leer noticia completa <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
