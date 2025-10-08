import { useState } from "react";

const Toggle = () =>{
    const [show, setShow] = useState(true); 

    return (
        <div style={{
            margin: "0 0 36px 0",
        }}>
            {
                show ?
                <h1>Prashant Kumar Gupta</h1>
                :
                <h1>Eclairs</h1>
            }

            <button onClick={()=>setShow(!show)}>Toggle</button>
        </div>
    )
}


export default Toggle; 