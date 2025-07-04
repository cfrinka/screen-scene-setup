import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cursos from "./pages/Cursos";
import Catalogo from "./pages/Catalogo";
import SobreNos from "./pages/SobreNos";
import GestaoDeCultura from "./pages/GestaoDeCultura";
import Historia from "./pages/Historia";
import Layout from "./components/Layout";
import EnrollmentPage from "./pages/EnrollmentPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/gestao-de-cultura" element={<GestaoDeCultura />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/inscricao" element={<EnrollmentPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
