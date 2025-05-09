
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./contexts/transition-context";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

// Import all the new pages
import Solutions from "./pages/Solutions";
import CustomerSupport from "./pages/CustomerSupport";
import Enterprise from "./pages/Enterprise";
import ECommerce from "./pages/ECommerce";
import Healthcare from "./pages/Healthcare";
import Education from "./pages/Education";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesSettings from "./pages/CookiesSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TransitionProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* Routes for all the new pages */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/e-commerce" element={<ECommerce />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies-settings" element={<CookiesSettings />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TransitionProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
