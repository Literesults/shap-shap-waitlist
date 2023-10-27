import React, { useState } from 'react'
import {FiEye } from 'react-icons/fi'
import {RiEyeCloseFill } from 'react-icons/ri'

function FormInput({Icon,name,type,placeholder,extra,onChange}) {

    const [showExter , setShowExter] = useState(extra)
    const [formType , setFormType] = useState(type)
    const toggleType = (currentType) => {
        currentType == 'password' ?
        setFormType('text') :
        setFormType('password')
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-500 p-3 rounded-md flex items-center gap-2 relative">
            {Icon}
            <input name={name} type={formType} onChange={(e)=> onChange(e)} placeholder={placeholder} className="bg-transparent autofill:bg-transparent w-full border-0 absolute bottom-[1px] right-0 h-full pl-10 focus-within:outline-none" />
            <span className="absolute right-0 p-3 cursor-pointer" onClick={()=> toggleType(formType)}>
                {
                    showExter && (
                        formType != 'password' ? <FiEye size={'24px'}/>:<RiEyeCloseFill size={'24px'}/>
                    )
                }
            </span>
            
        </div>
    )
}

export default FormInput