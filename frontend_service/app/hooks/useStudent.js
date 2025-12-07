import { useState } from "react";
import studentsService from "../services/studentService";

export default function useStudents() {
    const [loading, setLoading] = useState(false);

    const addStudent = async (studentData) => {
        setLoading(true);
        const result = await studentsService.addStudent(studentData);
        setLoading(false);
        return result;
    };

    return { addStudent, loading };
}
