import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const Questions = () => {
  return (
    <div id="preguntas-frecuentes" className="bg-white rounded-[54px] lg:px-48">
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-32">
        <div className="flex flex-col md:flex-row md: gap-4">
          <div data-aos="fade-up-right" data-aos-delay="0" className="mb-6 md:w-8/12">
            <h2 className="text-3xl  md:text-4xl lg:text-5xl text-center md:text-left text-mo-brown-base mb-12">
              Preguntas Frecuentes
            </h2>
            <div>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    <h3 className="text-mo-brown-base text-base md:text-lg font-semibold">
                    ¿Es seguro para todo tipo de piel?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-mo-brown-base">
                    Generalmente seguro cuando se aplica bajo evaluación médica profesional; ciertos factores como embarazo, trastornos de coagulación o patologías cutáneas requieren evaluación y exclusión según criterio clínico.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    <h3 className="text-mo-brown-base text-base md:text-lg font-semibold">
                    ¿Cuánto dura el procedimiento?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-mo-brown-base">
                    El procedimiento es rápido, dura aproximadamente 30 a 45 minutos.
Incluye una evaluación médica previa y puede combinarse con aparatología
para potenciar resultados.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    <h3 className="text-mo-brown-base text-base md:text-lg font-semibold hover:no-underline">
                    ¿Cuándo veré resultados?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-mo-brown-base">
                    Los resultados comienzan a notarse desde la primera semana. Sin embargo,
el efecto completo suele observarse después de 2 a 3 semanas,
dependiendo del metabolismo de cada paciente y la zona tratada.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <Image
          data-aos="fade-up-left" data-aos-delay="0"
            src="/images/moldea/doctor-questions-section-brown.png"

            alt="Moldea Questions"
            width={1000}
            height={1000}
            className="hidden md:block w-full h-auto object-contain max-w-[320px] mx-auto md:w-4/12"
          />
        </div>
      </section>
    </div>
  );
};
