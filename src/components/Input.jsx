// components/Input.tsx
import React from 'react';


const Input = ({ label, value, onChange, type = 'text' }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default Input;
