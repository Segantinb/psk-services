import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import OnboardingForm from "@/components/ui/multistep-form";

const Form = () => {
  const [searchParams] = useSearchParams();
  const stepParam = searchParams.get('step');
  const initialStep = stepParam ? parseInt(stepParam, 10) : 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-gelada font-black text-[#333333] mb-4">
            INSCREVA SUA STARTUP
          </h1>
          <p className="text-lg text-[#333333] font-roboto">
            Plataforma de Trial para Startups de Bebidas - Zé Delivery
          </p>
        </div>
        <OnboardingForm initialStep={initialStep} />
      </div>
    </div>
  );
};

export default Form;

