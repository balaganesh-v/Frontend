"use client";

import { useState } from "react";
import { usePrincipal } from "@/context/PrincipalContext";

export default function AddTeacherForm() {
    const { teachers } = usePrincipal();

    const [form, setForm] = useState({
        teacher_user_name: "",
        teacher_image_url: "",
        teacher_gender: "Male",
        teacher_qualification: "",
        teacher_age: "",
        teacher_year_of_experience: "",
        teacher_subject_specialization: "",
        teacher_salary_package: "",
        teacher_mobile_number: "",
        teacher_address: "",
        teacher_bank_account_id: "",
        teacher_class_ids: ""
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await teachers.addTeacher(form);
        alert("Teacher added successfully!");
    };

    return (
        <form
            className="p-6 bg-white shadow rounded-lg max-w-4xl mx-auto"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Teacher</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Teacher Name */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_user_name" className="mb-2 font-medium text-gray-700">
                        Teacher Name
                    </label>
                    <input
                        id="teacher_user_name"
                        name="teacher_user_name"
                        placeholder="Enter teacher name"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Image URL */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_image_url" className="mb-2 font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        id="teacher_image_url"
                        name="teacher_image_url"
                        placeholder="Enter image URL"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Gender */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_gender" className="mb-2 font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="teacher_gender"
                        name="teacher_gender"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Qualification */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_qualification" className="mb-2 font-medium text-gray-700">
                        Qualification
                    </label>
                    <input
                        id="teacher_qualification"
                        name="teacher_qualification"
                        placeholder="Enter qualification"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Age */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_age" className="mb-2 font-medium text-gray-700">
                        Age
                    </label>
                    <input
                        id="teacher_age"
                        name="teacher_age"
                        placeholder="Enter age"
                        type="number"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Years of Experience */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_year_of_experience" className="mb-2 font-medium text-gray-700">
                        Experience (Years)
                    </label>
                    <input
                        id="teacher_year_of_experience"
                        name="teacher_year_of_experience"
                        placeholder="Enter years of experience"
                        type="number"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Subject Specialization */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_subject_specialization" className="mb-2 font-medium text-gray-700">
                        Subject Specialization
                    </label>
                    <input
                        id="teacher_subject_specialization"
                        name="teacher_subject_specialization"
                        placeholder="Enter subject specialization"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Salary Package */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_salary_package" className="mb-2 font-medium text-gray-700">
                        Salary Package
                    </label>
                    <input
                        id="teacher_salary_package"
                        name="teacher_salary_package"
                        placeholder="Enter salary package"
                        type="number"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_mobile_number" className="mb-2 font-medium text-gray-700">
                        Mobile Number
                    </label>
                    <input
                        id="teacher_mobile_number"
                        name="teacher_mobile_number"
                        placeholder="Enter mobile number"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Address */}
                <div className="flex flex-col md:col-span-2">
                    <label htmlFor="teacher_address" className="mb-2 font-medium text-gray-700">
                        Address
                    </label>
                    <textarea
                        id="teacher_address"
                        name="teacher_address"
                        placeholder="Enter address"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Bank Account ID */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_bank_account_id" className="mb-2 font-medium text-gray-700">
                        Bank Account ID
                    </label>
                    <input
                        id="teacher_bank_account_id"
                        name="teacher_bank_account_id"
                        placeholder="Enter bank account ID"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

                {/* Class IDs */}
                <div className="flex flex-col">
                    <label htmlFor="teacher_class_ids" className="mb-2 font-medium text-gray-700">
                        Class IDs (comma-separated)
                    </label>
                    <input
                        id="teacher_class_ids"
                        name="teacher_class_ids"
                        placeholder="e.g. 1,2,3"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                    />
                </div>

            </div>

            <button
                type="submit"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
            >
                Submit
            </button>
        </form>
    );
}
