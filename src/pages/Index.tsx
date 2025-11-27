import React, { useEffect } from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Features } from "@/components/ui/features-1";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { FeatureSteps } from "@/components/ui/feature-section";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import {
  Volume2,
  Music2,
  Lightbulb,
  PartyPopper,
  MoveRight,
  CalendarDays,
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

  const featuredServices = [
    {
      title: "Sound System",
      description:
        "Professional sound systems for any size venue, from small gatherings to large festivals.",
      icon: <Volume2 size={24} />,
      imageSrc:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      link: "/services#sound",
    },
    {
      title: "Lighting Equipment",
      description:
        "Create the perfect atmosphere with our state-of-the-art lighting equipment and expert setup.",
      icon: <Lightbulb size={24} />,
      imageSrc:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=1200&q=80",
      link: "/services#lighting",
    },
    {
      title: "DJ Services",
      description:
        "Experienced DJs to keep your event energized with the perfect music selection.",
      icon: <Music2 size={24} />,
      imageSrc:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80",
      link: "/services#dj",
    },
  ];

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

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Professional equipment and expert technicians for all your sound
                and lighting needs
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 flex items-center text-green-500 hover:text-green-400 transition-colors"
            >
              View all services
              <MoveRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              Perfect for Any Event
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide custom sound and lighting solutions for a wide range of
              events
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Concerts", icon: <Volume2 size={32} /> },
              { name: "Weddings", icon: <PartyPopper size={32} /> },
              { name: "Corporate", icon: <CalendarDays size={32} /> },
              { name: "Festivals", icon: <Music2 size={32} /> },
            ].map((event, index) => (
              <div
                key={index}
                className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-green-500 mb-4">{event.icon}</div>
                <h3 className="text-lg font-medium text-white">{event.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/booking"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Book Your Event
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's work together to create an unforgettable experience for your
              guests. Book our services today and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

