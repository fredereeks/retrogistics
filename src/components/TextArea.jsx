import React from 'react'

export default function TextArea({required, disabled, className, placeholder, type, value, name, id, onChange}) {
    type = type || 'text';
    required = required || true;
    disabled = disabled || false;
    value = value || '';
    name = name || '';
    id = id || '';
  return (
    <textarea cols="30" rows="10" type={type} id={id} name={name} onChange={onChange} className={`text-slate-600 text-xs sm:text-sm outline-none border-[1px] ${className}`} placeholder={placeholder} >{value}</textarea>
  )
}
