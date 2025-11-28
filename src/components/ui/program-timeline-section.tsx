import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline-new";
import { 
  FileText, 
  Users, 
  Presentation, 
  Rocket, 
  BarChart3 
} from "lucide-react";

export function ProgramTimelineSection() {
  const items = [
    {
      date: "Etapa 1",
      description: "Preencha o formulário com dados da empresa, produtos e capacidade de fornecimento.",
      id: 1,
      title: "Inscreva sua startup",
      icon: <FileText className="h-3 w-3" />,
    },
    {
      date: "Etapa 2",
      description: "Curadoria do time Ambev considerando categoria, inovação, operação e fit com o app.",
      id: 2,
      title: "Seleção e alinhamento do trial",
      icon: <Users className="h-3 w-3" />,
    },
    {
      date: "Etapa 3",
      description: "Seleção final das startups vencedoras no Escritório do Zé Delivery em São Paulo",
      id: 3,
      title: "Etapa presencial em São Paulo",
      icon: <Presentation className="h-3 w-3" />,
    },
    {
      date: "Etapa 4",
      description: "Seu produto aparece na prateleira do Zé para um grupo de clientes, com bonificação de estoque inicial.",
      id: 4,
      title: "Lançamento no app",
      icon: <Rocket className="h-3 w-3" />,
    },
    {
      date: "Etapa 5",
      description: "Você recebe relatórios e recomendações: expansão, ajustes ou encerramento do teste.",
      id: 5,
      title: "Análise e próximos passos",
      icon: <BarChart3 className="h-3 w-3" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-gelada font-black text-[#333333] uppercase mb-4">
            Jornada do Programa
          </h2>
          <p className="text-lg text-gray-600 font-roboto">
            Acompanhe todas as etapas do processo de seleção
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-12">
          <Timeline defaultValue={3} orientation="horizontal">
            {items.map((item) => (
              <TimelineItem key={item.id} step={item.id}>
                <TimelineHeader>
                  <TimelineSeparator />
                  <TimelineDate>{item.date}</TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineIndicator>{item.icon}</TimelineIndicator>
                </TimelineHeader>
                <TimelineContent>{item.description}</TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            ⏱️ Processo completo: aproximadamente 60-90 dias
          </p>
        </div>
      </div>
    </section>
  );
}

