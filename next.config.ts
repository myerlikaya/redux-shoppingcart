/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
}

module.exports = withNextIntl(nextConfig);


 