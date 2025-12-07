// Direct API calls for students
const STUDENT_API = "http://localhost:8000/principal";

export async function getAllStudents() {
    try {
        const response = await fetch(`${STUDENT_API}/students`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch students");
        return await response.json();
    } catch (error) {
        console.error("Get Students Error:", error);
        throw error;
    }
}

export async function addStudent(payload) {
    try {
        const response = await fetch(`${STUDENT_API}/add_student`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Failed to add student");
        return await response.json();
    } catch (error) {
        console.error("Add Student Error:", error);
        throw error;
    }
}
