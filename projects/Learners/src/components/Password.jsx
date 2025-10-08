import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";


const Password = ({name, label, value, onChange, onBlur=null, rating=false, passwordScore}) => {
    // password with rating prop will only have the passwordStrongRating feature

    const [showPassword, setShowPassword] = useState(false);


    function getPasswordRatingColor(passwordScore){
        if(passwordScore <= 60) return 'text-red-500'
        else if(passwordScore <= 80) return 'text-orange-400'
        else return 'text-green-500'
    }

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
                    className={`${rating && getPasswordRatingColor(passwordScore)} outline-none flex-grow text-xl placeholder:text-black`}
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