import React, { useState } from "react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Basic",
      monthlyPrice: "$19/mo",
      yearlyPrice: "$190/yr",
      features: ["Student Profiles", "Assignments"],
    },
    {
      title: "Pro",
      monthlyPrice: "$49/mo",
      yearlyPrice: "$490/yr",
      features: ["Everything in Basic", "Analytics", "Timetable"],
    },
    {
      title: "Enterprise",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: ["Dedicated Support", "Custom Features"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="min-h-screen mt-10 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-5xl font-bold mb-10 text-gray-800 animate-fadeIn">
          Pricing Plans
        </h3>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-md focus:outline-none ${
                !isYearly ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-md focus:outline-none ${
                isYearly ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 bg-white shadow rounded-xl transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${
                selectedPlan === i ? "border-2 border-blue-600" : ""
              }`}
              onClick={() => setSelectedPlan(i)}
            >
              <h4 className="text-xl font-semibold mb-2">{plan.title}</h4>
              <p className="text-3xl font-bold mb-4">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 ${
                  selectedPlan === i
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {selectedPlan === i ? "Selected" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}