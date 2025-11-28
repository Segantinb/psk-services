import React, { useEffect } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { HighlightsSection } from "@/components/ui/highlights-section";
import { Feature } from "@/components/ui/feature-with-advantages";
import ProcessStepsFigma from "@/components/ui/process-steps-figma";
import FAQs from "@/components/ui/faqs-component";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroGeometric
        badge="ADICIONAR O LOGO AQUI"
        title1="AS BEBIDAS DO FUTURO"
        title2="ESTÃO NO ZÉ DELIVERY"
      />

      {/* Segunda sessão: bloco TESTE RÁPIDO / INSIGHTS REAIS / ALCANCE NACIONAL (Figma) */}
      <HighlightsSection />
      
      <Feature />
      
      <ProcessStepsFigma />
      
      <FAQs />
    </div>
  );
};

export default Index;

