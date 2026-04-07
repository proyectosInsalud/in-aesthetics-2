import Image from "next/image"

type ButtonWspProps = {
   message: string
   phoneNumber?: string
}

export const ButtonWsp = ({ message, phoneNumber = "51997621747" }: ButtonWspProps) => {

   const encodedMessage = encodeURIComponent(message)

   return (
      <div className="container max-w-[1200] mx-auto relative">
         <a id={"floating-wsp-custom"} className="fixed bottom-1/12 w-12 h-12 right-6 z-50  rounded-full shadow-lg transition-transform duration-300 hover:scale-105 bg-in-brown flex justify-center items-center" href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} target="_blank" rel="noopener noreferrer">
            <Image
               alt="icono whatsapp"
               src="/icons/button_wsp.svg"
               width={24}
               height={24}
               style={{ width: '24px', height: '24px' }}
            />
         </a>
      </div>

   )
}