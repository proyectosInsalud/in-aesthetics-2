import { BenefitsCarousel } from "./BenefitsCarousel";

export const Benefits = () => {
  return (
    <section id="beneficios" className="container mx-auto max-w-7xl px-4 pt-4 mb-16 md:mb-32">
      <div className="flex flex-col items-center md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-4/12">
          <h2 className="text-3xl font-in-playfair md:text-4xl lg:text-5xl text-in-title-base text-center md:text-left">Beneficios y características</h2>
          <a href="https://api.whatsapp.com/send?phone=51997621747" target="_blank" rel="noopener noreferrer" className="cta-custom-wsp bg-in-brown text-white px-8 py-3 rounded-full hidden md:block">Agendar cita</a>
        </div>
        <div className="w-full md:w-8/12">
          <BenefitsCarousel />
        </div>
      </div>
    </section>
  )
}
