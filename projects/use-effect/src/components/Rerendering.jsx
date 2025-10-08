import { useCallback, useState, } from "react";
import React from "react";

const Button = React.memo(({children="Subscribe", onClick})=>{
    console.log('Button rendered');

    return (
        <button style={{
            backgroundColor: "deeppink",
            border: "none",
            padding: "16px 48px",
            borderRadius: "16px",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
        }}
        onClick={onClick}
        >
            {children}
        </button>
    )
})


const Rerendering = () => {
    const [count, setCount] = useState(0);

    const sayHello = useCallback(() => {
        setCount(prevCount => prevCount+1);
    }, [])

    return (
        <div style={{
            padding: 48,
            display: "flex",
            gap: 4,
            alignItems: "center",
        }}>
            <span style={{fontSize: 24,}}>{count}</span>
            <Button onClick={sayHello}>Buy</Button>
        </div>
    )
}


export default Rerendering;  