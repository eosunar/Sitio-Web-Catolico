import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, Calendar, Star } from "lucide-react";

const seminars = [
  {
    title: "Introducción a la Teología",
    instructor: "Pbro. David Martínez",
    duration: "12 horas",
    rating: 4.9,
    category: "Teología",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    price: "Gratis"
  },
  {
    title: "Vivir el Evangelio hoy",
    instructor: "Dra. Lucía Fernández",
    duration: "8 horas",
    rating: 4.8,
    category: "Espiritualidad",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=800&auto=format&fit=crop",
    price: "Inscripción abierta"
  },
  {
    title: "Historia de la Iglesia",
    instructor: "Dr. Roberto Sanz",
    duration: "15 horas",
    rating: 5.0,
    category: "Historia",
    image: "https://images.unsplash.com/photo-1548625361-195fe57724e1?q=80&w=800&auto=format&fit=crop",
    price: "Próximamente"
  }
];

export function Seminars() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Seminarios y Cursos</h1>
          <p className="text-muted-foreground">Formación continua para profundizar en tu fe y conocimiento.</p>
        </div>
        <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8">
          Ver todos los cursos
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {seminars.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all rounded-3xl h-full flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white border-none">{s.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-amber-500 text-sm font-bold">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    {s.rating}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {s.duration}
                  </div>
                </div>
                <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">
                  {s.title}
                </CardTitle>
                <CardDescription className="text-base">
                  Por {s.instructor}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex items-center justify-between mt-4">
                  <span className="font-bold text-primary">{s.price}</span>
                  <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                    Inscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
