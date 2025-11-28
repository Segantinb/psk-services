import { Check, Trophy } from "lucide-react";

function Feature() {
  return (
    <div className="w-full py-7 lg:py-14 flex justify-center bg-[#f3f6f3]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex gap-4 pt-0 pb-7 lg:pt-0 lg:pb-14 flex-col items-start">
          <div className="flex gap-2 flex-col">
            <h2 className="text-4xl md:text-[42px] tracking-tight lg:max-w-xl font-gelada font-black text-[#333333] uppercase leading-tight">
              Vantagens e Facilidades
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-600">
              Conheça os benefícios para os participantes e vencedores
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-[#FFC800]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#333333] font-semibold">Setup Rápido</p>
                  <p className="text-muted-foreground text-sm">
                    Integração ágil e descomplicada para começar rapidamente.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-[#FFC800]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#333333] font-semibold">Suporte Dedicado</p>
                  <p className="text-muted-foreground text-sm">
                    Equipe especializada pronta para ajudar em cada etapa.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-[#FFC800]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#333333] font-semibold">Dados em Tempo Real</p>
                  <p className="text-muted-foreground text-sm">
                    Acompanhe métricas e resultados instantaneamente.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Trophy className="w-4 h-4 mt-2 text-[#FFC800]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#333333] font-semibold">Ecossistema Ambev</p>
                  <p className="text-muted-foreground text-sm">
                    Visita a Fábrica de Guarulhos, ao CIT e ao Zé
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Trophy className="w-4 h-4 mt-2 text-[#FFC800]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#333333] font-semibold">Mentoria com Executivos Ambev</p>
                  <p className="text-muted-foreground text-sm">
                    Orientação estratégica com líderes experientes do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

