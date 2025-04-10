// next.config.mjs
export default {
    reactStrictMode: true,
    swcMinify: true, // If you're using SWC for minification (recommended for better performance)
    webpack(config) {
      return config;
    },
  };
  
