import * as React from "react";
import CurrencyInput from "react-currency-input-field";

const InputPrice = ({ label, id, name, type, placeholder, className, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <CurrencyInput
        id={id}
        name={name}
        placeholder={placeholder}
        decimalsLimit={2}
        decimalScale={2}
        prefix="R$ "
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${className}`}
        {...props}
      />
    </div>
  );
};



export default InputPrice;
