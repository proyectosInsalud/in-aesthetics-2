'use client'
import Image from "next/image"

export const HeroLaserTreatment = () => {
  return (
    <div className="relative min-h-[480px] md:min-h-screen">
      <Image
        priority
        alt="Tratamiento laser co2"
        src="/images/new_hero_image.png"
        fill
        sizes="100vw"
        quality={75}
        className="hidden md:block object-cover"
      />
      <Image
        priority
        alt="Tratamiento laser co2"
        src="/images/new_hero_image.png"
        fill
        sizes="100vw"
        quality={75}
        className="block md:hidden object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#571E03] to-transparent opacity-80" />
      <div className="bottom-8 md:top-auto md:translate-y-0 absolute text-center max-w-[1200px] lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center md:bottom-16 md:space-y-0 text-white px-6 lg:px-0">
        <p className="text-lg md:text-xl">Nuestro tratamiento con</p>
        <h2 className="text-center font-in-playfair text-[42px] lg:text-6xl pb-4">Láser CO2 de Alta Gama</h2>
        <h3 className="text-center font-in-playfair text-[36px] lg:text-5xl pb-4">DEKA (Italia)</h3>
        <p className="text-sm md:text-base pb-6">Es la solución más avanzada para eliminar verrugas, lunares y acrocordones sin dolor ni marcas. Es un procedimiento rápido, seguro y eficaz, realizado por especialistas en estética avanzada.</p>
      </div>  
     
    </div>
  )
}
