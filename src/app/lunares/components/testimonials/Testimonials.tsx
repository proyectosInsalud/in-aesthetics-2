import { TestimonialCarousel } from "./TestimonialCarousel"


export const Testimonials = () => {
  return (
    <div className="relative bg-in-pink  z-10 pt-16 pb-4 md:py-24 xl:px-36">
      <section className="container mx-auto max-w-7xl px-4 space-y-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-mo-brown-base">Testimonios que nos respaldan</h2>
        <TestimonialCarousel />
      </section>
    </div>
  )
}
