import http from './http';

const notificationApi = {
    async getNotifications() {
        const { data } = await http.get('/notifications');
        return data.data;
    },

    async markAsRead(id) {
        const { data } = await http.patch(`/notifications/${id}/read`);
        return data.data;
    },

    async markAllAsRead() {
        const { data } = await http.patch('/notifications/read-all');
        return data.data;
    },
};

export default notificationApi;
