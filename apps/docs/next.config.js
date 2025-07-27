import createMDX from "@next/mdx";

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
