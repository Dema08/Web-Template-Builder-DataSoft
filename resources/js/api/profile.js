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

        const { data } = await http.post('/user/avatar', formData);

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
