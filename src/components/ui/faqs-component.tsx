import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqItems = [
  {
    id: "item-1",
    question: "Quem pode participar?",
    answer:
      "Para participar, é necessário comprovar o registro do produto junto à ANVISA e/ou MAPA, conforme a categoria da bebida, mediante apresentação do certificado de registro, número de processo ou declaração de isenção aplicável. Também é preciso apresentar certificado ou protocolo de registro de marca no INPI ou documento de licenciamento válido; comprovar que o estabelecimento fabricante e/ou industrializador está regularizado junto ao MAPA/ANVISA, conforme aplicável; garantir volume mínimo de 2.000 unidades de produto por estado, sendo 50% custeado pela startup para o trial; disponibilizar materiais de marketing da marca; e comprometer-se com a reposição e manutenção do estoque de produto. Tenha todos esses materiais em mãos para realizar a inscrição.",
  },
  {
    id: "item-2",
    question: "Como é feita a inscrição?",
    answer:
      "A inscrição é realizada online por meio do preenchimento de um formulário e envio da documentação diretamente no link oficial do programa. Todos os dados fornecidos são tratados em conformidade com a LGPD.",
  },
  {
    id: "item-3",
    question: "Quanto tempo dura o experimento?",
    answer:
      "O experimento dura, no mínimo, 3 meses dentro do app, ou enquanto durarem os estoques. O objetivo é disponibilizar seu produto para o máximo de consumidores dentro das regiões escolhidas, promovendo aprendizado constante sobre preço, disponibilidade, NPS e outros indicadores relevantes.",
  },
  {
    id: "item-4",
    question: "O que acontece depois do período de experimentação?",
    answer:
      "Caso o produto apresente resultados promissores, será possível escalar a distribuição para todo o Brasil e seguir uma curva de expansão frente aos milhões de consumidores do Zé Delivery. Isso pode incluir prateleiras exclusivas, pacotes de comunicação para bases selecionadas e outras iniciativas para impulsionar ainda mais as vendas dentro do maior app de bebidas do mundo.",
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


