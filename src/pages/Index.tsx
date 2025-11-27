import React, { useEffect } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Features } from "@/components/ui/features-1";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { FeatureSteps } from "@/components/ui/feature-section";
import {
  Zap,
  TrendingUp,
  BarChart3,
  Users,
  Rocket,
  Package,
  LineChart,
  MessageSquare,
  Target,
  MapPin,
  Map,
  Headphones,
} from "lucide-react";

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

      {/* Features Section */}
      <Features />

      {/* Feature108 Section */}
      <Feature108 
        badge="" 
        heading="Seu produto na mão das pessoas para experimentação"
        tabs={[
          {
            value: "tab-1",
            icon: <Zap className="h-auto w-4 shrink-0" />,
            label: "Velocidade",
            content: {
              badge: "Velocidade de Execução",
              title: "Lançamento em poucas semanas",
              description: [
                { icon: <Rocket className="h-5 w-5" />, text: "Onboarding guiado" },
                { icon: <Users className="h-5 w-5" />, text: "Equipe dedicada" },
                { icon: <Package className="h-5 w-5" />, text: "Setup rápido de produtos" },
              ],
              buttonText: "Ver Mais",
              imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
              imageAlt: "Velocidade",
            },
          },
          {
            value: "tab-2",
            icon: <BarChart3 className="h-auto w-4 shrink-0" />,
            label: "Insights",
            content: {
              badge: "Resultados em tempo real",
              title: "Receba insights que viram decisões",
              description: [
                { icon: <LineChart className="h-5 w-5" />, text: "Dashboards para monitoramento" },
                { icon: <MessageSquare className="h-5 w-5" />, text: "Feedbacks de consumidores" },
                { icon: <Target className="h-5 w-5" />, text: "KPIs na sua mão" },
              ],
              buttonText: "Ver Mais",
              imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
              imageAlt: "Insights",
            },
          },
          {
            value: "tab-3",
            icon: <TrendingUp className="h-auto w-4 shrink-0" />,
            label: "Escala",
            content: {
              badge: "Escala Nacional",
              title: "Do piloto ao Brasil inteiro",
              description: [
                { icon: <MapPin className="h-5 w-5" />, text: "Piloto lançado nos estados SP, RJ e MG" },
                { icon: <Map className="h-5 w-5" />, text: "Possibilidade de escalar para todo o país" },
                { icon: <Headphones className="h-5 w-5" />, text: "Suporte para evolução operacional" },
              ],
              buttonText: "Ver Mais",
              imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              imageAlt: "Escala",
            },
          },
        ]}
      />

      {/* FeatureSteps Section */}
      <FeatureSteps
        title="Como Funciona o Programa"
        autoPlayInterval={4000}
        features={[
          {
            step: "Etapa 1",
            title: "Inscreva sua startup",
            content: "Preencha o formulário com dados da empresa, produtos e capacidade de fornecimento.",
            image: "https://images.unsplash.com/photo-1554224311-beee460ae6ba?auto=format&fit=crop&w=1200&q=80",
          },
          {
            step: "Etapa 2",
            title: "Seleção e alinhamento do trial",
            content: "Curadoria do time Ambev considerando categoria, inovação, operação e fit com o app.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
          },
          {
            step: "Etapa 3",
            title: "Etapa presencial em São Paulo no Escritório do Zé Delivery",
            content: "Seleção final das startups vencedoras",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
          },
          {
            step: "Etapa 4",
            title: "Lançamento no app",
            content: "Seu produto aparece na prateleira do Zé para um grupo de clientes, com bonificação de estoque inicial.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
          },
          {
            step: "Etapa 5",
            title: "Análise e próximos passos",
            content: "Você recebe relatórios e recomendações: expansão, ajustes ou encerramento do teste.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
          },
        ]}
      />

    </div>
  );
};

export default Index;

