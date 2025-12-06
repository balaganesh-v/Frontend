// src/hooks/usePrincipal.js
import { useState, useEffect } from "react";
import { principalService } from "../services/principalService";

export const usePrincipal = () => {
    const [profile, setProfile] = useState(null);
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // ================================
    // Load All Data in Parallel
    // ================================
    const loadInitialData = async () => {
        setLoading(true);
        try {
            const [profileData, teachersData, studentsData] = await Promise.all([
                principalService.getProfile(),
                principalService.getTeachers(),
                principalService.getStudents(),
            ]);

            setProfile(profileData);
            setTeachers(teachersData);
            setStudents(studentsData);
        } catch (err) {
            setError(err.response?.data?.detail || err.message);
        } finally {
            setLoading(false);
        }
    };

    // ================================
    // Refresh Individual Lists
    // ================================
    const fetchTeachers = async () => {
        try {
            const data = await principalService.getTeachers();
            setTeachers(data);
        } catch (err) {
            setError(err.response?.data?.detail || err.message);
        }
    };

    const fetchStudents = async () => {
        try {
            const data = await principalService.getStudents();
            setStudents(data);
        } catch (err) {
            setError(err.response?.data?.detail || err.message);
        }
    };

    // ================================
    // Update Principal Profile
    // ================================
    const updateProfile = async (payload) => {
        setLoading(true);
        try {
            const data = await principalService.updateProfile(payload);
            setProfile(data);
            return data;
        } catch (err) {
            setError(err.response?.data?.detail || err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // ================================
    // Add User (Teacher or Student)
    // ================================
    const addUser = async (payload) => {
        setLoading(true);
        try {
            const data = await principalService.addUser(payload);

            // Refresh correct list
            if (payload.user_role === "teacher") await fetchTeachers();
            if (payload.user_role === "student") await fetchStudents();

            return data;
        } catch (err) {
            setError(err.response?.data?.detail || err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // ================================
    // Load All Data on Mount
    // ================================
    useEffect(() => {
        loadInitialData();
    }, []);

    return {
        profile,
        teachers,
        students,
        loading,
        error,
        updateProfile,
        addUser,
        fetchTeachers,
        fetchStudents,
    };
};
