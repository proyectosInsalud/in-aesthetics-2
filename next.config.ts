import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimización de imágenes
  images: {
    // Habilitar AVIF (formato ultra-optimizado) - WebP ya está habilitado por defecto
    formats: ['image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.inaesthetics.pe',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
