"use client";

import { createContext, useContext, useState } from "react";
import useTeachers from "../hooks/useTeacher";
import useStudents from "../hooks/useStudent";

const PrincipalContext = createContext();

export function PrincipalProvider({ children }) {
    const teachers = useTeachers();
    const students = useStudents();

    return (
        <PrincipalContext.Provider value={{ teachers, students }}>
            {children}
        </PrincipalContext.Provider>
    );
}

export function usePrincipal() {
    return useContext(PrincipalContext);
}
