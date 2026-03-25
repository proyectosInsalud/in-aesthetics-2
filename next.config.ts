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
  async redirects() {
    return [
      {
        source: '/inluxury',
        destination: 'https://www.inluxury.pe/',
        permanent: true,
      },
      {
        source: '/inluxury/:path*',
        destination: 'https://www.inluxury.pe/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
