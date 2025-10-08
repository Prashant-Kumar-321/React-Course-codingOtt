import { useState } from "react";

function ConditinalRendering() {
    const [admin, setAdmin] = useState(false);
    
    return (
        <div>

            {
                admin 
                ?
                    <h1>Admin Portal</h1>
                :
                    <h1>User Portal</h1>
            }
            
        </div>
    )
}

export default ConditinalRendering;
