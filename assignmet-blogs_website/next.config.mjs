/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pngtree.com'
            }
        ]
    }
};

export default nextConfig;
