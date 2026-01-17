const InputField = ({ label, name, type = "text", value, onChange, labelClass=undefined,inputClass=""}) => (
  <div>
    <label className={`text-[11px] text-primary block text-left font-montserrat mb-0 ${labelClass} `}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={` w-full border border-primary/40 px-3 text-xs sm:text-sm
      focus:outline-none focus:ring-1 focus:ring-primary ${inputClass?.trim()? inputClass : "h-9" }
 `}
    />
  </div>
);

export default InputField;
