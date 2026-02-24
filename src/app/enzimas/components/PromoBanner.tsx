export const PromoBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
        <section data-aos="zoom-in"  data-aos-delay="0" className="relative">
            <video src="/video/promo-banner-2.mp4" 
            autoPlay 
            muted 
            loop
            className="h-64 bg-center w-full object-cover border-none rounded-2xl mb-6"></video>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 to-transparent rounded-2xl"></div>
            <h1 className="absolute top-1/2 -translate-y-1/2 px-4 w-5/6 md:px-12 text-xl md:w-1/2 text-left text-white drop-shadow-md">Moldea tu cuerpo sin cirugía con nuestro tratamiento de <span className="font-semibold text-in-orange-base text-3xl md:text-2xl px-1 rounded">Enzimas Inbiozyme</span> </h1>
        </section>
    </div>
  )
}
