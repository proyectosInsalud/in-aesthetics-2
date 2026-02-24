"use client"

import { useEffect, useRef, useState } from "react"

export const AnchoredVideos = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<HTMLDivElement[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const dataLinks = [
    {
      id: 1,
      videoId: "7608212447677123852",
      user: "inluxury.estetica",
      duration: 55000, // 45 segundos
    },
    {
      id: 2,
      videoId: "7607960869506452747",
      user: "inluxury.estetica",
      duration: 71000, // 1 minuto 11 segundos
    },
  ]

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Cleanup function
    return () => {
        document.body.removeChild(script)
    }
}, []) // <- no olvidar el array de dependencias

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollToVideo = (index: number) => {
      const videoElement = container.children[index] as HTMLElement
      if (videoElement) {
        videoElement.scrollIntoView({ behavior: "smooth", inline: "start" })
      }
    }

    // Limpiar timeout previo si cambia el video
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Scroll al video actual
    scrollToVideo(currentIndex)

    // Configurar timeout según duración real del video
    const currentVideo = dataLinks[currentIndex]
    timeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % dataLinks.length
      setCurrentIndex(nextIndex)
    }, currentVideo.duration)
  }, [currentIndex])

  return (
    <section className="relative bg-white z-10 py-10 md:py-14 xl:px-36">
      <div className="container mx-auto max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-mo-brown-base">
          Casos reales en video
        </h2>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto flex-nowrap justify-start scroll-smooth"
        >
          {dataLinks.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) videoRefs.current[index] = el
              }}
              className="flex-shrink-0"
              style={{ width: "325px" }}
            >
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/@${item.user}/video/${item.videoId}`}
                data-video-id={item.videoId}
                style={{ width: "325px" }}
              >
                <section />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}