import React from 'react';


export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-800">Pricing Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Basic", price: "$19/mo", features: ["Student Profiles", "Assignments"] },
            { title: "Pro", price: "$49/mo", features: ["Everything in Basic", "Analytics", "Timetable"] },
            { title: "Enterprise", price: "Custom", features: ["Dedicated Support", "Custom Features"] },
          ].map((plan, i) => (
            <div key={i} className="p-8 bg-white shadow rounded-xl hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((f, idx) => <li key={idx}>✔ {f}</li>)}
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
