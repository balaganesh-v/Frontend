import React from 'react';

export default function Input({ label, type = "text", ...props }) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 
        focus:outline-none bg-white text-gray-800 shadow-sm"
      />
    </div>
  );
}
