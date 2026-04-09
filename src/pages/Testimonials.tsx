import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Madre de familia",
    text: "Luz de Fe ha sido mi refugio en momentos de incertidumbre. Las oraciones diarias me dan la fuerza que necesito para guiar a mis hijos en el camino del bien.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Juan Pablo Torres",
    role: "Estudiante universitario",
    text: "Encontrar una comunidad joven y vibrante aquí me hizo darme cuenta de que la fe no es algo del pasado, sino una fuerza viva que transforma mi presente.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rodríguez",
    role: "Catequista",
    text: "Los seminarios y recursos educativos son de una calidad excepcional. Me ayudan muchísimo a preparar mis clases y a profundizar en mi propia espiritualidad.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonios de Fe</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Historias reales de personas cuyas vidas han sido transformadas por el amor de Dios y nuestra comunidad.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-none shadow-lg rounded-3xl overflow-hidden bg-white h-full">
              <CardContent className="pt-12 px-8 pb-8 flex flex-col h-full">
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                <p className="text-lg text-foreground/80 italic mb-8 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-primary/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
