import React, { useEffect } from "react";
import OnboardingForm from "@/components/ui/multistep-form";

const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-gelada font-black text-black mb-4">
            INSCREVA SUA STARTUP
          </h1>
          <p className="text-lg text-black font-roboto">
            Plataforma de Trial para Startups de Bebidas - Zé Delivery
          </p>
        </div>
        <OnboardingForm />
      </div>
    </div>
  );
};

export default Form;

