import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqItems = [
  {
    id: "item-1",
    question: "Quem pode participar do programa?",
    answer:
      "Startups e marcas de bebidas que já possuam registro ativo do produto junto à ANVISA e/ou MAPA, conforme sua categoria. Também é necessário apresentar certificado ou protocolo de registro de marca no INPI (ou documento de licenciamento válido).",
  },
  {
    id: "item-2",
    question: "O que preciso comprovar na inscrição?",
    answer:
      "Você precisará enviar o Certificado, número de processo ou declaração de isenção da ANVISA/MAPA; Prova de registro ou protocolo de marca no INPI; E documento que comprove a regularização do fabricante/industrializador junto aos órgãos competentes.",
  },
  {
    id: "item-3",
    question: "Existe quantidade mínima de produto para o teste?",
    answer:
      "Sim. É necessário disponibilizar pelo menos 2.000 unidades por estado, sendo 50% desse volume custeado pela startup para o trial.",
  },
  {
    id: "item-4",
    question: "Preciso enviar materiais da marca?",
    answer:
      "Sim. É importante disponibilizar imagens, textos e materiais de marketing do produto para ativação no app e comunicações.",
  },
  {
    id: "item-5",
    question: "Há compromisso de reposição de estoque?",
    answer:
      "Sim. Durante o período de teste, a startup deve garantir a reposição e manutenção do estoque para não interromper as vendas.",
  },
  {
    id: "item-6",
    question: "Quem garante a propriedade dos meus dados e receitas?",
    answer:
      "Todo o tratamento de dados segue integralmente as normas da Lei Geral de Proteção de Dados (LGPD), garantindo segurança, confidencialidade e transparência em cada etapa do programa. Além disso, nenhuma fórmula, receita ou propriedade intelectual é compartilhada ou utilizada pela Ambev ou pelo Zé Delivery sem autorização prévia.",
  },
];

export default function FAQs() {
  return (
    <section className="bg-[#515151] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <h2 className="text-white text-4xl md:text-[42px] font-gelada font-black leading-tight tracking-tight uppercase">Dúvidas Frequentes</h2>
          <p className="text-white/80 mt-4 text-balance text-lg">
            Tire suas principais dúvidas sobre quem pode participar, como funciona a inscrição e o que acontece após o período de experimentação.
          </p>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="bg-white w-full rounded-lg border border-transparent px-8 py-3 shadow-lg"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dotted">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-gray-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-gray-700">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-white/80 mt-6">
            Para saber mais sobre o programa, faça o{" "}
            <Link to="/edital" className="text-[#FFC800] font-medium hover:underline">
              download do edital
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}


