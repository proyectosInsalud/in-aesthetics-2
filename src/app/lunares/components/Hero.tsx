import { Comparator } from "./Comparator";
import { SimpleForm } from "./SimpleForm";

export const Hero = () => {
  return (

    <>
      <div className="bg-linear-to-b from-[#FFECE3]/0 to-[#FFECE3]">
        <section className="max-w-7xl mx-auto px-4 container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 py-4 md:pt-8 md:pb-16 px-[1rem] md:px-8">  
          <div className="space-y-0 md:space-y-4 mb-2 md:mb-0 lg:space-y-8">
          <h1 className="text-center md:text-left font-in-playfair text-in-title-base leading-tight space-y-1">
  <span className="block text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px]">
    Elimina verrugas
  </span>
  <span className="block  text-in-brown font-semibold text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px]">
    con Láser CO2 DEKA:
  </span>
  <span className="block text-[1.1rem] sm:text-xl md:text-2xl lg:text-[28px] text-in-title-base/85 mt-6">
    Resultados de alta precisión
  </span>
  <span className="block text-[1.1rem] sm:text-xl md:text-2xl lg:text-[28px] text-in-title-base/85">
    con la mínima huella dermatológica.
  </span>
</h1>
              <div className="hidden md:block">
                <SimpleForm />
              </div>
            </div>

            <div>
              <Comparator />
              
            </div>
          </div>


        </section>
      </div>
      <div className="md:hidden px-4 py-8">
        <SimpleForm />
      </div>
    </>
  )
}
