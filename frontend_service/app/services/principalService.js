import axios from "axios";
import { USE_MOCK_API } from "../config";
import { principalMockAPI } from "./principalMock";

const API_BASE = "http://localhost:8000/principal";

export const principalService = {
    login: async (payload) => {
        if (USE_MOCK_API) return { access_token: "mock-token", token_type: "bearer" };
        const response = await axios.post(`${API_BASE}/login`, payload);
        return response.data;
    },

    forgetPassword: async (principal_email) => {
        if (USE_MOCK_API) return { ok: true };
        const response = await axios.post(`${API_BASE}/forget_password`, null, {
            params: { principal_email },
        });
        return response.data;
    },

    resetPassword: async (token, new_password) => {
        if (USE_MOCK_API) return { ok: true };
        const response = await axios.post(`${API_BASE}/reset_password`, null, {
            params: { token, new_password },
        });
        return response.data;
    },

    getProfile: async () => {
        if (USE_MOCK_API) return principalMockAPI.getProfile();
        const response = await axios.get(`${API_BASE}/profile_details`);
        return response.data;
    },

    updateProfile: async (payload) => {
        if (USE_MOCK_API) return principalMockAPI.updateProfile(payload);
        const response = await axios.put(`${API_BASE}/update_profile`, payload);
        return response.data;
    },

    addUser: async (payload) => {
        if (USE_MOCK_API) return principalMockAPI.addUser(payload);
        const response = await axios.post(`${API_BASE}/add_user`, payload);
        return response.data;
    },

    getTeachers: async () => {
        if (USE_MOCK_API) return principalMockAPI.getTeachers();
        const response = await axios.get(`${API_BASE}/teachers`);
        return response.data;
    },

    getStudents: async () => {
        if (USE_MOCK_API) return principalMockAPI.getStudents();
        const response = await axios.get(`${API_BASE}/students`);
        return response.data;
    },
};
