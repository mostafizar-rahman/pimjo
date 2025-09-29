import { headers } from 'next/headers';

export async function getBaseUrl() {
    // Browser
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }

    // Server - try to get from request headers
    try {
        const headersList = await headers();
        const host = headersList.get('host');

        if (host) {
            // Detect protocol based on host or environment
            const protocol = host.includes('localhost') ? 'http' : 'https';
            return `${protocol}://${host}`;
        }
    } catch (error) {
        // headers() not available in this context
    }

    // Vercel
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    // Custom domain
    if (process.env.NEXT_PUBLIC_BASE_URL) {
        return process.env.NEXT_PUBLIC_BASE_URL;
    }

    // Fallback
    return 'http://localhost:3000';
}