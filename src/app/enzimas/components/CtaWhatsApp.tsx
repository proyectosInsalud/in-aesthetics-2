import Image from "next/image"

export const CtaWhatsApp = () => {
  return (
        <div className="container mx-auto max-w-7xl px-4 pt-8 md:pt-0 -mb-24">
            <section data-aos="zoom-in" data-aos-delay="0" className="bg-mo-brown-base py-6 px-6 md:py-8  md:grid md:grid-cols-12 lg:py-12 lg:px-16 rounded-[34px] relative">
                    <div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 md:left-32">
                        <Image 
                        src="/images/moldea/chica-sonrisa.png" 
                        alt="WhatsApp" 
                        width={200} 
                        height={200} 
                        unoptimized
                        />
                    </div>
                <div className="md:col-start-3 md:col-span-full">
                    <div className="flex flex-col lg:flex-row items-center md:items-end lg:items-center justify-end lg:gap-16 space-y-4 lg:space-y-0">
                        <p className="text-xl md:text-2xl lg:text-3xl text-center md:text-left md:pl-16 text-white font-light lg:w-2/3 lg:pl-4">
                            <span className="font-bold">Consulta médica previa</span> para determinar si el tratamiento enzimático es adecuado para ti, con explicaciones claras sobre <span className="font-bold">expectativas y cuidados</span>.
                        </p>
                        <a className="cta-custom-wsp flex items-center justify-center gap-4 bg-in-pink py-2 px-4 lg:p-3 rounded-4xl lg:w-1/3" href="https://api.whatsapp.com/send?phone=51974309260&text=Hola%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20sobre%20el%20tratamiento%20con%20enzimas%20para%20eliminar%20grasa%20localizada%20y%20estoy%20interesado.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F" target="_blank" rel="noopener noreferrer">
                            <Image 
                            src="/icons/button_wsp_style_2.svg" 
                            alt="WhatsApp" 
                            width={34} 
                            height={34} 
                            />
                            <p className="font-bold text-mo-brown-base ">¡Agendar una cita!</p>
                        </a>
                    </div>
                </div>
                
            </section>
                <Image 
                src="/images/moldea/chica-sonrisa.png" 
                alt="WhatsApp" 
                width={200} 
                height={200} 
                className="w-full h-full object-cover max-w-[300px] mx-auto md:hidden"
                
                />
        </div>
  )
}
