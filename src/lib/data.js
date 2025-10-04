import { getBaseUrl } from "./getBaseUrl";

async function apiFetch(endpoint, options = {}) {
    const baseUrl = await getBaseUrl();
    try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            cache: options.cache || 'force-cache',
            ...options,
        });

        const data = await res.json();

        if (!res.ok) {
            return {
                success: false,
                error: data.error || `Failed to fetch ${endpoint} (${res.status})`,
                data: null,
            };
        }

        return {
            success: true,
            data: data.data || data,
            error: null,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            data: null,
        };
    }
}


export async function getOrders() {
    return apiFetch('/api/orders', { cache: "no-store" });
}


export async function getProducts() {
    return apiFetch('/api/products', { cache: "no-store" });
}

export async function getStats() {
    return apiFetch('/api/stats', { cache: "no-store" });
}