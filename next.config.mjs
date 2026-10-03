/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    localPatterns: [
      { pathname: "/image/**", search: "" },
      { pathname: "/_next/static/media/**", search: "" },
    ],
    qualities: [75],
  },
};

export default nextConfig;
