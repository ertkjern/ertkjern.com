/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      @import "styles/common/variables.scss";
      @import "styles/common/mixins.scss";

    `,
  },
}

module.exports = nextConfig
