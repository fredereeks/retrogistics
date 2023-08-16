import React from 'react'

export default function TextInput({required, disabled, className, placeholder, type, value, name, id, onChange}) {
    type = type || 'text';
    required = required || true;
    disabled = disabled || false;
    value = value || '';
    name = name || '';
    id = id || '';
  return (
    <input type={type} value={value} id={id} name={name} onChange={onChange} className={`text-slate-600 text-xs sm:text-sm outline-none border-[1px] ${className}`} placeholder={placeholder} />
  )
}
