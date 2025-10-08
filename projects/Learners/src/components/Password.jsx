import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";


const Password = ({name, label, value, onChange, onBlur=null, onInput=null}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div 
            className="flex flex-col gap-2"
        >
            <label htmlFor="password">{label}</label>

            <p 
                className="flex items-center gap-2 border-1 border-gray-400 p-2 rounded-2xl "
            >
                <RiLockPasswordFill
                    className="font-bold text-2xl"
                />
                <input 
                    type={showPassword ? "text": "password"} 
                    name={name}
                    id={name}
                    placeholder="zp3$()TB"
                    value={value} 
                    onChange={onChange}
                    onBlur={onBlur}
                    onInput={onInput}
                    className="outline-none flex-grow text-xl"
                />

                <span
                    onClick={()=>setShowPassword(prev=>!prev)}
                >
                    {
                        showPassword ? 
                            <IoMdEyeOff 
                                className="text-lg"
                            />
                            : 
                            <IoMdEye 
                                className="text-lg"
                            />
                    }
                </span>
            </p>

        </div> 
    )
}


export default Password;