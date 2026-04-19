// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   basePath: '/solveria-labs',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;