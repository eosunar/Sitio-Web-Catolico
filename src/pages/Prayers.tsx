import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Heart, Search, Filter } from "lucide-react";

const prayers = [
  {
    title: "Padre Nuestro",
    category: "Básicas",
    text: "Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo...",
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Ave María",
    category: "Marianas",
    text: "Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús...",
    image: "https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Oración por la Paz",
    category: "Especiales",
    text: "Señor, haz de mí un instrumento de tu paz. Que allá donde hay odio, yo ponga el amor; que allá donde hay ofensa, yo ponga el perdón...",
    image: "https://images.unsplash.com/photo-1490730141103-6ac27d020028?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Credo de los Apóstoles",
    category: "Básicas",
    text: "Creo en Dios, Padre Todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, Nuestro Señor...",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Ángel de mi Guarda",
    category: "Niños",
    text: "Ángel de mi guarda, dulce compañía, no me desampares ni de noche ni de día. No me dejes solo que me perdería...",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "Magnificat",
    category: "Marianas",
    text: "Proclama mi alma la grandeza del Señor, se alegra mi espíritu en Dios, mi salvador; porque ha mirado la humillación de su esclava...",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=400&auto=format&fit=crop"
  }
];

export function Prayers() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Oraciones</h1>
          <p className="text-muted-foreground">Encuentra la oración perfecta para cada momento de tu vida.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar oración..."
              className="pl-10 pr-4 py-2 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-64"
            />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {prayers.map((prayer, index) => (
          <motion.div
            key={prayer.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-all rounded-3xl h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prayer.image}
                  alt={prayer.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white">{prayer.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center justify-between">
                  {prayer.title}
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-rose-500">
                    <Heart className="h-5 w-5" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-4 italic">
                  "{prayer.text}"
                </p>
                <Button variant="link" className="p-0 mt-4 text-primary font-semibold">
                  Leer completa
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
