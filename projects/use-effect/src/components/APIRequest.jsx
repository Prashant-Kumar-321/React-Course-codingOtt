import { useEffect, useState } from "react";

const APIRequest = () => {

    const [comments, setComments] = useState([]);

    async function getComments() {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();

        setComments(data)
    }
    
    useEffect(()=>{
        getComments();
    }, []);


    return (
        <div style={{
            padding: 32,
        }}>
            <h1 style={{marginBottom: "24px"}}>Comments</h1>

            {
                comments.map((comment, idx)=>(
                    <div key={idx} style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        padding: 8,
                        border: "1px solid #ccc",
                        borderRadius: 8,
                        boxShadow: "0px 4px 10px rgba(131, 130, 130, 0.69)",
                        marginBottom: 24,
    
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
    
                        }}>
                            <p>@{comment.name}</p>
                            <p>{comment.email}</p>
                        </div>
                        <p>
                            {comment.body}
                        </p>
                    </div>
                ))
            }
            
        </div>
    )
}


export default APIRequest; 