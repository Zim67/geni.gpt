const domain = process.env.VERCEL_URL ?? 'localhost:3000'
const url = `http${domain === 'localhost:3000' ? null : 's'}://${domain}`
const nextConfig = {
  env: {
    NEXT_PUBLIC_DOMAIN: url,
    NEXT_PUBLIC_API_DOMAIN: `${url}/api`,
    NEXTAUTH_URL: url
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      pathname: '**'
    }]
  }
}
export default nextConfig