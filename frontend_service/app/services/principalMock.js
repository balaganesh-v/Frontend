// Mock implementations for principal endpoints so UI can render without backend
export const principalMockAPI = {
    getProfile: async () => {
        return new Promise((res) =>
            res({ principal_name: "Demo Principal", principal_email: "principal@example.com" })
        );
    },

    getTeachers: async () => {
        return new Promise((res) =>
            res([
                { teacher_id: "t1", teacher_name: "Alice Johnson", teacher_email: "alice@example.com" },
                { teacher_id: "t2", teacher_name: "Carlos Gomez", teacher_email: "carlos@example.com" },
            ])
        );
    },

    getStudents: async () => {
        return new Promise((res) =>
            res([
                { student_id: "s1", student_name: "Bob Smith", student_email: "bob@example.com" },
                { student_id: "s2", student_name: "Nina Patel", student_email: "nina@example.com" },
            ])
        );
    },

    addUser: async (payload) => {
        return new Promise((res) =>
            res({ user_id: `mock-${Date.now()}`, user_email: payload.user_email, totp_secret: null })
        );
    },

    updateProfile: async (payload) => {
        return new Promise((res) =>
            res({ principal_name: payload.principal_name || "Demo Principal", principal_email: payload.principal_email || "principal@example.com" })
        );
    },
};
