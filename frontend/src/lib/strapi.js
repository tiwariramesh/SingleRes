const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export async function fetchProfile() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/profile?populate=*`);
        const json = await res.json();
        // Handling single type response structure
        return json.data?.attributes || json.data || null;
    } catch (err) {
        console.error("Error fetching profile:", err);
        return null;
    }
}

export async function fetchExperiences() {
    try {
        // Collection type response structure: { data: [{ id, attributes: {...} }] }
        const res = await fetch(`${STRAPI_URL}/api/experiences?populate=*&sort[0]=order:asc`);
        const json = await res.json();
        return json.data?.map(item => ({ id: item.id, ...item.attributes })) || [];
    } catch (err) {
        console.error("Error fetching experiences:", err);
        return [];
    }
}

export async function fetchServices() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/services?populate=*&sort[0]=order:asc`);
        const json = await res.json();
        return json.data?.map(item => ({ id: item.id, ...item.attributes })) || [];
    } catch (err) {
        console.error("Error fetching services:", err);
        return [];
    }
}

export async function fetchSocialLinks() {
    try {
        const res = await fetch(`${STRAPI_URL}/api/social-links?populate=*&sort[0]=order:asc`);
        const json = await res.json();
        return json.data?.map(item => ({ id: item.id, ...item.attributes })) || [];
    } catch (err) {
        console.error("Error fetching social links:", err);
        return [];
    }
}
