/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlp7257gkjhtxzam.public.blob.vercel-storage.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
