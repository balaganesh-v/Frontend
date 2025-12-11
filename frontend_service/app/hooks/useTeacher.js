import { useState } from "react";
import teachersService from "../services/teacherService";

export default function useTeachers() {
    const [loading, setLoading] = useState(false);

    const addTeacher = async (teacherData) => {
        setLoading(true);
        const result = await teachersService.addTeacher(teacherData);
        setLoading(false);
        return result;
    };

    return { addTeacher, loading };
}
