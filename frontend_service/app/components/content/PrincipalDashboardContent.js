import React, { useState } from "react";
import { usePrincipalContext } from "../../context/PrincipalContext";

export default function PrincipalDashboardContent() {
    const {
        profile,
        teachers,
        students,
        loading,
        error,
        addUser,
    } = usePrincipalContext();

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        user_role: "",
    });

    const handleAddUser = async () => {
        try {
            const data = await addUser(newUser);
            alert(`User added successfully. ID: ${data.user_id}`);

            setNewUser({
                user_name: "",
                user_email: "",
                user_password: "",
                user_role: "",
            });
        } catch (err) {
            alert(err);
        }
    };

    if (loading) {
        return <div className="text-center py-10 text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500 text-lg">{error}</div>;
    }

    return (
        <div className="space-y-8">

            {/* ---------------- PROFILE SECTION ---------------- */}
            <section className="bg-white p-6 shadow rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Principal Profile</h2>

                {profile ? (
                    <div className="space-y-1">
                        <p><strong>Name:</strong> {profile.principal_name}</p>
                        <p><strong>Email:</strong> {profile.principal_email}</p>
                    </div>
                ) : (
                    <p>No profile data found.</p>
                )}
            </section>

            {/* ---------------- TEACHERS SECTION ---------------- */}
            <section className="bg-white p-6 shadow rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Teachers</h2>

                {teachers.length === 0 ? (
                    <p>No teachers available</p>
                ) : (
                    <ul className="space-y-2">
                        {teachers.map((t) => (
                            <li
                                key={t.teacher_id}
                                className="p-2 bg-gray-50 border rounded-md"
                            >
                                <strong>{t.teacher_name}</strong> — {t.teacher_email}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* ---------------- STUDENTS SECTION ---------------- */}
            <section className="bg-white p-6 shadow rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Students</h2>

                {students.length === 0 ? (
                    <p>No students available</p>
                ) : (
                    <ul className="space-y-2">
                        {students.map((s) => (
                            <li
                                key={s.student_id}
                                className="p-2 bg-gray-50 border rounded-md"
                            >
                                <strong>{s.student_name}</strong> — {s.student_email}
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* ---------------- ADD USER SECTION ---------------- */}
            <section className="bg-white p-6 shadow rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Add New User</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <input
                        className="border p-2 rounded"
                        placeholder="Name"
                        value={newUser.user_name}
                        onChange={(e) =>
                            setNewUser({ ...newUser, user_name: e.target.value })
                        }
                    />

                    <input
                        className="border p-2 rounded"
                        placeholder="Email"
                        value={newUser.user_email}
                        onChange={(e) =>
                            setNewUser({ ...newUser, user_email: e.target.value })
                        }
                    />

                    <input
                        className="border p-2 rounded"
                        placeholder="Password"
                        type="password"
                        value={newUser.user_password}
                        onChange={(e) =>
                            setNewUser({ ...newUser, user_password: e.target.value })
                        }
                    />

                    <select
                        className="border p-2 rounded"
                        value={newUser.user_role}
                        onChange={(e) =>
                            setNewUser({ ...newUser, user_role: e.target.value })
                        }
                    >
                        <option value="">Select Role</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>

                </div>

                <button
                    className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                    onClick={handleAddUser}
                >
                    Add User
                </button>
            </section>

        </div>
    );
}
