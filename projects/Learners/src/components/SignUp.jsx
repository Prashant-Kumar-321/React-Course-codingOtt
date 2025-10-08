import { useState} from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Password from "./Password";
import Field from "./Field";

const SignUp = ()=>{
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [signUpForm, setSignUpForm] = useState({
        username: '',
        email: '',
        password1: '', 
        password2: ''
    }); 

    const [passwordStrongScore, setPasswordStrongScore] = useState(0)



    function cleanFormUp(){
        const resetFormValue = Object.fromEntries(Object.keys(signUpForm).map(key=>[key, '']));
        setSignUpForm(resetFormValue); 
    }

    function checkPasswordMatch() {
        if (signUpForm.password1 !== signUpForm.password2) 
            setPasswordMatch(false)
        else  
            setPasswordMatch(true)
    }

    function signUserUp(event) {
        event.preventDefault(); 

        cleanFormUp(); 

        console.log(signUpForm);
    }


    function handleFieldChange(event){
        const input = event.target; 
        const name = input.name; 
        const value = input.value; 

        const nextForm = {
            ...signUpForm,
            [name]: value
        }

        setSignUpForm(nextForm)


        // Handle Password Match for password1 field
        if(name==='password1'){
            checkPasswordStrong(nextForm.password1); 

            if(nextForm.password2 !== ''){
                if(nextForm.password1 != nextForm.password2){
                    setPasswordMatch(false);
                }else{
                    setPasswordMatch(true);
                }
            }
        }



    }

    const checkPasswordStrong = (password) => {
        const criterias = {
            lowercase: false, 
            uppercase: false, 
            number: false, 
            specialChar: false, 
            minLength8: password.length >= 8
        };

        // calculate number of criteria meet
        for (const char of password) {
            if (/[a-z]/.test(char)) criterias.lowercase = true;
            if (/[A-Z]/.test(char)) criterias.uppercase = true;
            if (/[0-9]/.test(char)) criterias.number = true;
            if (/[^a-zA-Z0-9]/.test(char)) criterias.specialChar = true;
        }

        // Calculate score based on criterias met
        // for every criteria meet increase rating by 20
        let rating = 0; 
        for (const yes of Object.values(criterias)){
            if(yes) rating+=20;
        }

       setPasswordStrongScore(rating);
    }



    return (
        <div
            className="p-8 min-h-[calc(100vh-var(--header-height))]"
        >
            <div
                className="grid grid-cols-2 gap-4"
            >
                <div
                    className="flex flex-col gap-8 items-center"
                >
                    <h1 
                        className="text-2xl font-bold"
                    >Create an Account</h1>

                    <form action="#" method="get"
                        className="w-96 flex flex-col gap-4"
                        onSubmit={signUserUp}
                    >
                        <Field 
                            type="text" 
                            label="Username *" 
                            name="username"  
                            placeholder="bhojho_123" 
                            onChange={handleFieldChange} 
                            Icon={<AiOutlineUser className="font-bold text-2xl" />} 
                        />

                        <Field 
                            type="email"
                            label="Email *"
                            name="email"
                            placeholder="bhojho_123@domain.com"
                            onChange={handleFieldChange}
                            Icon={<MdOutlineMailOutline className="font-bold text-2xl"/>}
                        />
                        
                        <Password 
                            name="password1" 
                            label="Password *" 
                            value={signUpForm.password1} 
                            onChange={handleFieldChange} 
                            passwordScore={passwordStrongScore}
                            rating={true}
                        />


                        <Password 
                            name="password2"
                            label="Confirm Password *"
                            value={signUpForm.password2}
                            onChange={handleFieldChange}
                            onBlur={checkPasswordMatch}
                        />
                        
                        {
                            !passwordMatch && 
                            <p className="text-red-600 text-lg">Password does not match</p>
                        }
                        

                        <button
                            type="submit"
                            className="bg-indigo-950 rounded-xl p-2 font-bold text-xl text-white cursor-pointer outline-none"
                        >Create</button>

                        <p className="flex justify-between items-center px-5">
                            <button
                                type="button"
                                className="border-1 border-gray-400 px-8 py-2 rounded-3xl text-xl font-semibold flex flex-row gap-2 items-center justify-center cursor-pointer outline-none"
                            >
                                <FaGithub /> 
                                <span>Github</span> 
                            </button>

                            <button
                                type="button"
                                className="border-1 border-gray-400 px-8 py-2 rounded-3xl text-xl font-semibold flex flex-row gap-2 items-center justify-center cursor-pointer outline-none"
                            >
                                <FaGoogle 
                                    className="text-indigo-950"
                                /> 
                                <span>Google</span> 
                            </button>

                        </p>

                    </form>

                    <p className="text-xl">
                        Already have account?
                        <Link to="/signin" className="text-indigo-950 underline"> Sign in </Link>
                    </p>


                </div>

                <div
                    className="p-4 lg:p-5 pb-1"
                >
                    <img 
                        src="/images/signup-signin-hero-image.jpg" 
                        alt="Form hero image" 
                        className="rounded-3xl w-full h-full object-cover"
                    />

                </div>

            </div>
        </div>
    )
}

export default SignUp; 