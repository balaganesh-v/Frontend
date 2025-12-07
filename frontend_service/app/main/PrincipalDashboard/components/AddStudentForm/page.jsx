"use client";

import { useState } from "react";
import { usePrincipal } from "@/context/PrincipalContext";

export default function AddStudentForm() {
    const { students } = usePrincipal();

    const [form, setForm] = useState({
        student_name: "",
        student_image_url: "",
        student_class_name: "",
        student_gender: "Male",
        student_date_of_birth: "",
        student_roll_no: "",
        student_age: "",
        student_father_name: "",
        student_mother_name: "",
        student_father_mobile_number: "",
        student_mother_mobile_number: "",
        student_address: "",
        student_admission_date: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await students.addStudent(form);
        alert("Student added successfully!");
    };

    return (
        <form
            className="p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto border border-gray-200"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Add Student
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Student Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input
                        name="student_name"
                        className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        name="student_image_url"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Class Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Class Name</label>
                    <input
                        name="student_class_name"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                        name="student_gender"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* DOB */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input
                        type="date"
                        name="student_date_of_birth"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Roll No */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Roll Number</label>
                    <input
                        name="student_roll_no"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Age */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                        name="student_age"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Father Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Father Name</label>
                    <input
                        name="student_father_name"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Mother Name */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Mother Name</label>
                    <input
                        name="student_mother_name"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Father Mobile */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Father Mobile Number</label>
                    <input
                        name="student_father_mobile_number"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Mother Mobile */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">Mother Mobile Number</label>
                    <input
                        name="student_mother_mobile_number"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                        name="student_address"
                        className="p-3 border border-gray-300 rounded-lg h-24"
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Admission Date */}
                <div className="flex flex-col md:col-span-2">
                    <label className="text-sm font-medium text-gray-700 mb-1">Admission Date</label>
                    <input
                        type="date"
                        name="student_admission_date"
                        className="p-3 border border-gray-300 rounded-lg"
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </form>
    );
}
