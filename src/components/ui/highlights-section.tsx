import React from "react";

export function HighlightsSection() {
  return (
    <section className="bg-[#f3f6f3] py-16 md:py-24 flex items-center justify-center">
      <div className="mx-auto flex max-w-6xl flex-col gap-[14px] px-4 md:flex-row md:gap-[14px]">
        {/* Coluna 1 - Teste rápido */}
        <div className="flex w-[407px] h-[645px] flex-col items-center rounded-3xl bg-white shadow-lg">
          <div className="text-center px-6 pt-[64px]">
            <h2 className="font-gelada text-[48px] font-black italic tracking-[0] text-[#333333] uppercase m-0">
              TESTE RÁPIDO
            </h2>
            <p className="text-[20px] font-medium leading-[24px] tracking-[0.5%] text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Seu produto no app do Zé
              <br />
              em poucas semanas.
            </p>
          </div>
          <div className="w-full flex-1 flex justify-center items-end">
            <img
              src="/img/sacooler.png"
              alt="Sacola amarela com bebidas"
              className="w-[297px] h-[411px] object-contain object-bottom"
            />
          </div>
        </div>

        {/* Coluna 2 - Insights reais */}
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          <div className="flex flex-1 flex-col items-center justify-center rounded-3xl bg-[#FFC800] px-10 py-10 text-center shadow-lg">
            <h2 className="font-gelada text-[56px] font-black leading-[60px] text-[#333333] uppercase break-words" style={{ fontWeight: 900 }}>
              INSIGHTS
              <br />
              REAIS
            </h2>
            <p className="mt-4 text-[20px] font-medium text-[#555555] break-words" style={{ fontFamily: 'Roboto Flex, Roboto, sans-serif', letterSpacing: '0.22px', fontWeight: 500 }}>
              Dashboards com seus KPIs
              <br />
              de forma simples e intuitiva.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-black shadow-lg">
            <img
              src="/img/joaofeliz.png"
              alt="Cliente feliz com sacolas do Zé Delivery"
              className="h-64 w-full object-cover opacity-90"
            />
          </div>
        </div>

        {/* Coluna 3 - Alcance nacional */}
        <div className="flex w-full flex-col gap-4 md:w-1/3 justify-end">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg flex justify-end">
            <img
              src="/img/mulherapp.png"
              alt="Consumidora usando o app"
              className="w-[395px] h-[220px] object-cover object-right"
            />
          </div>
          <div className="flex flex-col gap-[40px] rounded-[24px] bg-[#1c1c1c] px-[36px] py-[45px] text-left shadow-lg">
            <h2 className="font-gelada text-[56px] font-black uppercase text-[#FFCC01] leading-[64px] break-words" style={{ fontWeight: 900, letterSpacing: '0.56px' }}>
              ALCANCE
              <br />
              NACIONAL
            </h2>
            <div className="w-full flex flex-col gap-[2px] text-white">
              <div className="flex items-center gap-[16px]">
                <div className="w-[58px] h-[58px] relative flex items-center justify-center shrink-0">
                  <img src="/img/calendar.svg" alt="Calendário" className="w-[49px] h-[51px]" />
                </div>
                <p className="w-[290px] text-[22px] font-medium text-white break-words" style={{ fontFamily: 'Roboto Flex, Roboto, sans-serif', letterSpacing: '0', fontWeight: 500 }}>Piloto em SP, RJ e MG</p>
              </div>
              <div className="w-[51px] h-[22px]">
                <img src="/img/dot.svg" alt="Linha" className="w-[51px] h-[22px]" />
              </div>
              <div className="flex items-center gap-[16px]">
                <img src="/img/bola.svg" alt="Ícone" className="w-[58px] h-[58px]" />
                <p className="w-[266px] text-[23px] font-bold text-white break-words" style={{ fontFamily: 'Roboto Flex, Roboto, sans-serif', letterSpacing: '0.28px', fontWeight: 700 }}>Expansão Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


