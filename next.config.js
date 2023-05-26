/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async()=>{return [
    {
      source: '/about', //redirect the user from about to home directory
      destination: '/',
      permanent: false
    }
  ]
}
}

module.exports = nextConfig
