import Image from "next/image";

export const InfoEnzimas = () => {
  return (
    <section className="bg-white rounded-tl-4xl rounded-tr-4xl py-12 md:spy-24">
      <div className="container max-w-7xl mx-auto px-4 lg:px-32 space-y-12">
        <h2 className="text-3xl text-center md:text-left md:text-4xl lg:text-6xl text-mo-brown-base mb-4 md:mb-12">
          Las enzimas Inbiozyme
        </h2>
        <div className="flex flex-col md:flex-row md:gap-4 lg:gap-12 space-y-12 md:space-y-0">
            <div  className="hidden  md:block w-full md:w-1/2   relative h-[300px] md:h-[400px]">
              <Image 
                data-aos="fade-right" data-aos-delay="0"
                
                src="/images/reduccion/encimas-pb-serum.png"
                alt="Enzimas Inbiozyme"
                fill
                className="absolute object-cover rounded-3xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div> 
            <div data-aos="fade-up" data-aos-delay="0" className="max-w-[600px] md:w-1/2 mx-auto md:mx-0">
                <Image 
                    src="/images/reduccion/encimas-pb-serum-2.png"
                    alt="Enzimas Inbiozyme"
                    width={1000}    
                    height={1000}
                    
                    className=" w-full object-cover shadow-lg mb-4 rounded-3xl "
                />
                <p className="text-mo-brown-base">Tratamiento médico no invasivo con enzimas bioactivas diseñado para favorecer la reducción de <strong>grasa localizada</strong> en zonas específicas del cuerpo. Este tratamiento no invasivo es ideal para zonas como abdomen, brazos, piernas y papada, brindando Los resultados pueden apreciarse de forma progresiva a lo largo del protocolo de tratamiento (según evaluación médica individual).</p>
            </div>
        </div>
      </div>
    </section>
  );
};
