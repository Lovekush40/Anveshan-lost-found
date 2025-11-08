import React, { forwardRef, useId } from 'react'

function Input({
    label,
    type = 'text',
    className = "",
    ...props
},ref) {

    const id = useId();

  return (
        <div className='w-full'>
            {label && <label
            className='inline-block mb-2 pl-2'
            htmlFor='{id}'>
                {label}
            </label>}

            <input
            type={type}
            className={`px-3 py-2 rounded-lg  bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-[#065d776a] w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
  )
}

export default forwardRef(Input)