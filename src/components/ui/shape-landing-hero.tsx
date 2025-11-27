"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Waves } from "@/components/ui/wave-background";

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Waves Background */}
      <Waves 
        className="absolute inset-0 opacity-10" 
        strokeColor="#9ca3af" 
        backgroundColor="#ffffff"
        pointerSize={0}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/[0.05] border border-gray-900/[0.12] mb-8 md:mb-12"
              >
                <Circle className="h-2 w-2 fill-rose-500" />
                <span className="text-sm text-gray-600 tracking-wide">
                  {badge}
                </span>
              </motion.div>

              <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="font-gelada text-[1.75rem] sm:text-[2.125rem] md:text-[3.5rem] font-black tracking-tight text-black leading-tight" style={{ marginBottom: '29px', fontWeight: 900, lineHeight: '1.15' }}>
                  {title1} ESTÃO NO <span className="text-[#FFC800]">ZÉ DELIVERY</span>
                </h1>
              </motion.div>

              <motion.div
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed tracking-wide" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 }}>
                  Transforme o Zé Delivery no laboratório da sua bebida. Milhões de clientes, dados reais e a escalabilidade que<br />sua startup precisa.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <GetStartedButton />
              </motion.div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end items-start"
            >
              <img
                src="/hero-image.png"
                alt="Zé Delivery"
                className="w-auto h-full max-h-[480px] md:max-h-[600px] object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };

