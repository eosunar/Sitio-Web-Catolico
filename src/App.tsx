import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Prayers } from "./pages/Prayers.tsx";
import { News } from "./pages/News.tsx";
import { Testimonials } from "./pages/Testimonials.tsx";
import { Seminars } from "./pages/Seminars.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="oraciones" element={<Prayers />} />
          <Route path="noticias" element={<News />} />
          <Route path="testimonios" element={<Testimonials />} />
          <Route path="seminarios" element={<Seminars />} />
          <Route path="comunidad" element={
            <div className="container mx-auto px-4 py-24 text-center">
              <h1 className="text-4xl font-bold mb-4">Comunidad Luz de Fe</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Estamos preparando un espacio vibrante para que puedas conectar con otros hermanos en la fe. Próximamente.
              </p>
            </div>
          } />
          <Route path="reflexiones" element={
            <div className="container mx-auto px-4 py-24 text-center">
              <h1 className="text-4xl font-bold mb-4">Reflexiones Diarias</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Meditaciones profundas para acompañar tu caminar espiritual cada día. Próximamente.
              </p>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
