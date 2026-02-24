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
      duration: 55000,
    },
    {
      id: 2,
      videoId: "7607960869506452747",
      user: "inluxury.estetica",
      duration: 71000,
    },
  ]

  // Cargar script de TikTok una sola vez
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // Función para centrar el video activo
  const scrollToVideo = (index: number) => {
    const container = containerRef.current
    const videoElement = videoRefs.current[index]

    if (!container || !videoElement) return

    const containerWidth = container.offsetWidth
    const videoWidth = videoElement.offsetWidth

    const offset =
      videoElement.offsetLeft - (containerWidth - videoWidth) / 2

    container.scrollTo({
      left: offset,
      behavior: "smooth",
    })
  }

  // Auto rotación
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    scrollToVideo(currentIndex)

    const currentVideo = dataLinks[currentIndex]

    timeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % dataLinks.length
      setCurrentIndex(nextIndex)
    }, currentVideo.duration)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  return (
    <section className="relative bg-white z-10 py-10 md:py-14 xl:px-36">
      <div className="container mx-auto max-w-7xl px-4 space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-mo-brown-base">
          Casos reales en video
        </h2>

        <div
          ref={containerRef}
          className="
            flex
            gap-6
            overflow-x-auto
            lg:overflow-x-visible
            flex-nowrap
            lg:flex-wrap
            justify-start
            lg:justify-center
            scroll-smooth
          "
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