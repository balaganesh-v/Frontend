import { BookOpen, Users, BarChart, Calendar } from "lucide-react";
import React from 'react';

const features = [
  { icon: BookOpen, title: "Smart Assignments", desc: "AI-powered assignment management for teachers." },
  { icon: Users, title: "Student Profiles", desc: "Track academic performance & attendance easily." },
  { icon: BarChart, title: "Analytics", desc: "Get detailed insights into student progress." },
  { icon: Calendar, title: "Timetable", desc: "Manage schedules & events with ease." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-800">Features</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
              <f.icon className="w-10 h-10 mx-auto text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
