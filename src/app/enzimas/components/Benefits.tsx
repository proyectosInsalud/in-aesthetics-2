import Image from "next/image";

export const Benefits = () => {
  return (
    <div id="beneficios" className="container mx-auto max-w-7xl px-4 relative z-20">
      <h2 className=" md:hidden text-mo-brown-base text-center pb-6 text-3xl w-full md:w-1/2">
        Beneficios y características
      </h2>
      <section data-aos="zoom-in"  data-aos-delay="0" className="bg-mo-brown-base p-6 md:p-10 lg:p-16 rounded-4xl space-y-6">
        <div className="flex gap-4 items-center">
          <h2 className="hidden md:block text-[#F5E7D3] text-4xl lg:text-5xl w-full md:w-1/2">
            Beneficios y características
          </h2>
          <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
            <Image
              src="/svg/botiquin.svg"
              alt="Beneficios y características"
              width={32}
              height={32}
              className="w-14 pb-8"
            />
           <div className="flex flex-col text-mo-brown-base">
              <p className="font-semibold text-lg">
                Apoya la reducción de adiposidad localizada
              </p>
              <p>
                mediante enzimas colabora con lipólisis y mejora de microcirculación dependiendo de cada caso clínico evaluado.
              </p>
            </div>
          </article>
        </div>
        <div className="md:flex gap-6">
          <div className="flex flex-col sm:flex-row md:w-8/12 gap-6 pb-6 md:pb-0">
            <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
              <Image
                src="/svg/botiquin.svg"
                alt="Beneficios y características"
                width={32}
                height={32}
                className="w-14 pb-8"
              />
              <div className="flex flex-col text-mo-brown-base">
                <p className="font-semibold text-lg">Mínimamente invasivo</p>
                <p>sin tiempo de recuperación prolongado.</p>
              </div>
            </article>
            <article className="w-full md:w-1/2 bg-ve-pink-bg p-6 rounded-2xl">
              <Image
                src="/svg/botiquin.svg"
                alt="Beneficios y características"
                width={32}
                height={32}
                className="w-14 pb-8"
              />
              <div className="flex flex-col text-mo-brown-base">
                <p className="font-semibold text-lg">Resultados</p>
                <p>visibles desde la primera sesión.</p>
              </div>
            </article>
          </div>

          <article className="md:w-4/12 bg-ve-pink-bg p-6 rounded-2xl">
            <Image
              src="/svg/botiquin.svg"
              alt="Beneficios y características"
              width={32}
              height={32}
              className="w-14 pb-8"
            />
           <div className="flex flex-col text-mo-brown-base">
              <p className="font-semibold text-lg">
                Procedimiento personalizado
              </p>
              <p>
                con bajo riesgo de efectos adversos cuando se realiza tras evaluación clínica completa y bajo supervisión profesional.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
