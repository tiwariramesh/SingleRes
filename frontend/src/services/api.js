import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const api = {
    // Get main profile data
    getProfile: async () => {
        const response = await apiClient.get('/profile?populate=*');
        return response.data;
    },

    // Get skills
    getSkills: async () => {
        const response = await apiClient.get('/skills?sort=order:asc&populate=*');
        return response.data;
    },

    // Get experiences
    getExperiences: async () => {
        const response = await apiClient.get('/experiences?sort=order:asc&populate=*');
        return response.data;
    },

    // Get education
    getEducation: async () => {
        const response = await apiClient.get('/educations?sort=order:asc&populate=*');
        return response.data;
    },

    // Get projects
    getProjects: async () => {
        const response = await apiClient.get('/projects?sort=order:asc&populate=*');
        return response.data;
    },

    // Get services
    getServices: async () => {
        const response = await apiClient.get('/services?sort=order:asc&populate=*');
        return response.data;
    },

    // Get social proof/stats
    getSocialProof: async () => {
        const response = await apiClient.get('/social-proofs?sort=order:asc');
        return response.data;
    },

    // Helper to get full media URL
    getMediaUrl: (url) => {
        if (!url) return null;
        if (url.startsWith('http')) return url;
        return `${STRAPI_URL}${url}`;
    }
};

export default api;
