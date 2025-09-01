import Link from "next/link";
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-24 px-6">
      <h2 className="text-5xl font-extrabold mb-4">
        Manage Your School Professionally 🎓
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        A modern AI-powered school management system for Admins, Teachers, and Students.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/dashboard/principal"
          className="px-6 py-3 bg-white text-blue-700 font-medium rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
        <Link
          href="#features"
          className="px-6 py-3 bg-blue-900 font-medium rounded-lg shadow hover:bg-blue-800 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
