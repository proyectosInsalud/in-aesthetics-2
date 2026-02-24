import Image from "next/image"

export const TreatmentDetails = () => {
  return (
    <section data-aos="fade-up" data-aos-delay="100"  className="container mx-auto max-w-7xl pl-4 pr-4 md:pr-0 lg:pr-4 md:px-24 mb-16 md:my-32 lg:mt-48 ">
      <div className="md:hidden text-center pb-8">
          <p className="text-in-title-base text-lg">Nuestro tratamiento</p>
          <h2 className="text-in-title-base font-in-playfair text-5xl pb-4">Hydrafacial</h2>
          <p className="text-mo-brown-base w-full md:w-3/6">Es un tratamiento no invasivo que limpia, exfolia, extrae impurezas e hidrata tu piel en un solo procedimiento. Diseñado para todo tipo de pieles, combate problemas como opacidad, acné, poros dilatados y signos de envejecimiento.
          </p>
        </div>
        <div className="bg-in-pink md:py-52 md:px-12 rounded-t-full md:rounded-t-none md:rounded-tl-full md:rounded-bl-full relative mx-auto max-w-[300px] md:max-w-full">

        <div className="md:absolute md:top-1/2 hidden md:block md:-translate-y-1/2 md:-left-12 text-center md:text-left">
          <p className="text-in-title-base text-lg">Nuestro tratamiento</p>
          <h2 className="text-in-title-base font-in-playfair text-4xl lg:text-6xl pb-4">Hydrafacial</h2>
          <p className="text-mo-brown-base w-full md:w-3/6">Es un tratamiento no invasivo que limpia, exfolia, extrae impurezas e hidrata tu piel en un solo procedimiento. Diseñado para todo tipo de pieles, combate problemas como opacidad, acné, poros dilatados y signos de envejecimiento.
          </p>
        </div>
        <Image 
                data-aos="fade-left"
                data-aos-delay="150"
                src="/images/treatment-co2.png" 
                alt="Láser CO2 DEKA" 
                width={100} height={100} 
                className="w-full pt-12 md:w-1/2 md:absolute mx-auto right-0 lg:-right-16 bottom-0"
                unoptimized
            />
        </div>

    </section>
  )
}
