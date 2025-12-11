// Direct API calls for teachers
const TEACHER_API = "http://localhost:8000/principal";

export async function getAllTeachers() {
    try {
        const response = await fetch(`${TEACHER_API}/teachers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch teachers");
        return await response.json();
    } catch (error) {
        console.error("Get Teachers Error:", error);
        throw error;
    }
}

export async function addTeacher(payload) {
    try {
        const response = await fetch(`${TEACHER_API}/add_teacher`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Failed to add teacher");
        return await response.json();
    } catch (error) {
        console.error("Add Teacher Error:", error);
        throw error;
    }
}
