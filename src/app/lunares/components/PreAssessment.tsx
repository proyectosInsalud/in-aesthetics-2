"use client";

export const PreAssessment = () => {
  return (
    <section className="bg-in-pink px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-white shadow-lg rounded-2xl px-6 py-8 md:px-10 md:py-12 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="md:w-[55%] space-y-3">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-in-brown">
              Evaluación previa obligatoria
            </p>
            <h3 className="font-in-playfair text-3xl md:text-4xl text-in-title-base leading-tight">
              Analizamos cada lesión antes del láser
            </h3>
            <p className="text-sm md:text-base text-[#2c2c2c] leading-relaxed">
              Antes de cada procedimiento, nuestros especialistas realizan un análisis clínico de la lesión.
              Solo procedemos con el Láser CO2 en lesiones benignas estéticas. Si detectamos signos de sospecha,
              te brindamos la orientación médica necesaria para un manejo integral.
            </p>
          </div>

          <div className="md:w-[45%] grid grid-cols-1 gap-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF3ED] border border-[#F2D6C4]">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-in-brown" />
              <p className="text-sm md:text-base text-in-title-base">
                Revisión clínica por especialistas antes de cualquier disparo de láser.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF3ED] border border-[#F2D6C4]">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-in-brown" />
              <p className="text-sm md:text-base text-in-title-base">
                Procedemos solo con lesiones benignas de interés estético.
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FFF3ED] border border-[#F2D6C4]">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-in-brown" />
              <p className="text-sm md:text-base text-in-title-base">
                Si hay sospecha, orientamos el manejo integral y derivación adecuada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
