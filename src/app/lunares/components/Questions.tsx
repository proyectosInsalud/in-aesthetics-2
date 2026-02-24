"use client"

import { Accordion } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export const Questions = () => {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleValueChange = (value: string) => {
    setOpenItem(value);
      };

  return (
    <section className="container mx-auto max-w-[1200px] px-4 my-16 lg:my-32">
        <h3 className="text-center text-in-title-base font-in-playfair text-4xl md:text-5xl mb-10">Preguntas Frecuentes</h3>
        <Accordion.Root
            type="single"
            collapsible
            onValueChange={handleValueChange}
            value={openItem}
            className="accordion-root"
        >  
        <div className="md:flex space-y-4 md:space-y-0 gap-4">
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-1">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown text-lg">¿Es seguro?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-1" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            Sí, el procedimiento es seguro. Utilizamos tecnología especializada y
personal médico capacitado para garantizar una eliminación precisa y con
mínimos riesgos. Antes del tratamiento, realizamos una evaluación médica
para asegurar que la lesión sea benigna.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-2">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown">¿Cuánto dura la recuperación?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-2" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            La recuperación suele ser rápida. En la mayoría de los casos, podrás
retomar tus actividades el mismo día. Es normal que la zona tratada
forme una pequeña costra temporal y recomendamos cuidados específicos
que te indicaremos tras el procedimiento.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </div>
            <div className="md:w-1/2 space-y-4">
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-3">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown">¿Puedo eliminar varias imperfecciones en una sola sesión?</p>
                        <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-4" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                            Sí, es posible tratar varias lesiones en una misma sesión, siempre que
estén indicadas clínicamente para su remoción. Esto se determinará
durante tu consulta médica previa.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item className="bg-white shadow-lg rounded-lg w-full text-left" value="item-4">
                    <Accordion.Trigger className="w-full text-left flex p-4 justify-between items-center cursor-pointer">
                        <p className="font-semibold text-in-brown">
                            ¿Qué tipo de lesiones se pueden tratar?
                        </p>
                    <IoIosArrowDown className={`text-in-title-base transition-transform duration-300 ${openItem === "item-2" ? "rotate-180" : ""}`} />
                    </Accordion.Trigger>
                    <Accordion.Content className="accordion-content">
                        <div className="px-4 pb-4">
                            <p className="text-sm pr-4">
                                Es ideal para verrugas virales, acrocordones (fibromas blandos), queratosis seborreicas y nevos (lunares) previamente diagnosticados como benignos.
                            </p>
                        </div>
                    </Accordion.Content>
                </Accordion.Item>
            </div>
        </div>
        </Accordion.Root>
        
        
    </section>
  ) 
}