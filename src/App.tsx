
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Write from "./pages/Write";
import News from "./pages/News";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/write" element={<Write />} />
          <Route path="/news" element={<News />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
