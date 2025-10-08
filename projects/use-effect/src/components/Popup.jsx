import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Popup = ()=>{
    const [showMessage, setShowMessage] = useState(false);

    useEffect(()=>{
        toast.error("Registration failed");
    }, [showMessage]);

    return (
        <div>
            <button onClick={()=>setShowMessage(!showMessage)}>Register Now</button>
            <ToastContainer />
        </div>
    )
}


export default Popup; 