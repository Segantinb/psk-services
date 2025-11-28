import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inscreva sua startup",
    date: "Até 31/12",
    description: "Crie sua conta preencha o formulário com dados da empresa, produtos e capacidade de fornecimento,"
  },
  {
    number: "02",
    title: "Pré Seleção",
    date: "Até 11/01",
    description: "Curadoria do time Ambev considerando categoria, inovação, operação e fit com o app"
  },
  {
    number: "03",
    title: "Seleção Presencial",
    date: "Até 19/01",
    description: "Etapa final de avaliação das startups para classificação das vencedoras no escritório em São Paulo"
  },
  {
    number: "04",
    title: "Lançamento no App",
    date: "Até 15/02",
    description: "Seu produto aparece na prateleira do Zé para um grupo de clientes para teste"
  }
];

export default function ProcessStepsFigma() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="bg-[#515151] w-full py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-white text-4xl md:text-[42px] font-gelada font-black leading-tight tracking-tight uppercase">
            Etapas do processo
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="border-l border-[rgba(255,255,255,0.13)] px-6 pt-12 pb-8 min-h-[400px] flex flex-col relative"
            >
              {/* Large Background Number */}
              <div 
                className="absolute left-0 top-20 text-[160px] font-bold leading-none opacity-15 pointer-events-none select-none z-0"
                style={{
                  background: 'linear-gradient(to right, rgba(238,238,238,0) 10%, #eeeeee 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-20 flex flex-col h-full pt-56">
                {/* Title */}
                <h3 className="text-[#eeeeee] text-base md:text-[17px] font-normal leading-relaxed mb-6" style={{ fontFamily: 'Roboto Flex, Roboto, sans-serif' }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#eeeeee] opacity-40 text-sm md:text-[17px] leading-relaxed tracking-tight mb-auto">
                  {step.description}
                </p>

                {/* Date Badge */}
                <div className="bg-[rgba(238,238,238,0.1)] rounded-full h-[34px] px-3 inline-flex items-center gap-2 w-fit mt-8">
                  <Clock className="w-4 h-4 text-[#eeeeee]" />
                  <span className="text-[#eeeeee] text-sm leading-none">{step.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
