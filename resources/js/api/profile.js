import http from './http';

/**
 * User profile API client.
 * Handles viewing, updating, avatar operations, and password changes.
 */
const profileApi = {
    async getProfile() {
        const { data } = await http.get('/user/profile');
        return data.data;
    },

    async updateProfile(payload) {
        const { data } = await http.put('/user/profile', payload);
        return data.data;
    },

    async uploadAvatar(file) {
        const formData = new FormData();
        formData.append('avatar', file);

        // The Axios instance defaults to Content-Type: application/json.
        // Setting Content-Type: undefined REMOVES the default header so the
        // browser sets 'multipart/form-data; boundary=...' automatically.
        // Without this, Laravel receives the request as JSON (no file) → 422 error.
        const { data } = await http.post('/user/avatar', formData, {
            headers: { 'Content-Type': undefined },
        });

        return data.data;
    },

    async deleteAvatar() {
        const { data } = await http.delete('/user/avatar');
        return data.data;
    },

    async changePassword(payload) {
        const { data } = await http.put('/user/change-password', payload);
        return data.data;
    },
};

export default profileApi;
