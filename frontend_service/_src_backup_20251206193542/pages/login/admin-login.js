// pages/admin-login.js
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, otp } = formData;

    // ✅ Replace this with real authentication logic (API call or DB check)
    if (email && password && otp) {
      router.push("/admin-dashboard");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Admin Icon"
              width={64}
              height={64}
            />
            <h1 className="text-2xl font-bold text-blue-600">Admin Login</h1>
            <p className="text-gray-500 text-sm">
              Enter your credentials to access the dashboard
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* OTP */}
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Authenticator Code
              </label>
              <input
                type="text"
                id="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="6-digit code"
                maxLength={6}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 
                         text-white font-semibold py-2.5 rounded-lg 
                         transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
