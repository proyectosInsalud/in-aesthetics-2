import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'

export const CtaTreatmentWsp = () => {
    return (
        <div data-aos="fade-up" data-aos-delay="0" className='container max-w-[1200px] mx-auto my-16 lg:my-32'>
            <div className='flex flex-col justify-center mx-auto md:flex-row bg-in-pink max-w-[500px] md:max-w-none rounded-tl-[48px] rounded-tr-[48px] md:rounded-tl-[140px] md:rounded-bl-[140px] gap-0 md:gap-4 items-center w-10/12 rounded-lg md:rounded-2xl'>
                <div className='w-full md:w-1/2 md:pl-16 lg:pl-22 xl:pl-32 space-y-3 md:space-y-4 flex flex-col items-center md:items-start pt-16 pb-10 md:py-0'>
                    <h3 className='font-in-playfair text-in-title-base text-2xl px-10 sm:px-8 lg:text-5xl text-center md:text-left md:px-0'>¡Elimina esas imperfecciones hoy mismo!</h3>
                    <a href="https://api.whatsapp.com/send?phone=51997621747" target="_blank" rel="noopener noreferrer" className='cta-custom-wsp flex justify-start items-center bg-in-brown rounded-3xl px-4 py-2 lg:py-3 animate-suave-latido'>
                        <FaWhatsapp className='text-in-pink text-4xl' size={24} />
                        <p className='bg-in-blue text-sm lg:text-base text-white px-2 lg:px-4 rounded-full'>Agendar ahora</p>
                    </a>
                </div>
                <Image
                    src={'/images/moldea/imageTreatment.png'}
                    alt='cta-treatment-wsp'
                    width={100}
                    height={100}
                    unoptimized
                    className='object-cover w-full md:w-1/2 max-w-[500px]'
                />

            </div>
        </div>
    )
}
