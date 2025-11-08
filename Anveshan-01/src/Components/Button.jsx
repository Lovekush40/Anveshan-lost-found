import React from 'react'

function Button({
    children,
    type= "button",
    bgColor = "bg-[#065C77]",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
        <button className= {`px-4 py-2 rounded-lg ${type} ${textColor} ${bgColor} ${className} {...props}`}>
            {children}
        </button>
  )
}

export default Button