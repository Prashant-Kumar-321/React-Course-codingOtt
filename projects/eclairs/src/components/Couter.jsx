import {useState} from 'react';
import Toggle from './Toggle';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const MAXCOUNT=20, MINCOUNT=-10;
    const COLORS = ["red", "white", "yellow", "blue"]; 

    
    function increaseCount(){
        if (count >= MAXCOUNT) return; 
        
        setCount(count+1);
    }

    function decreaseCount(){
        if (count <= MINCOUNT) return; 

        setCount(count-1)
    }

    function changeColor(){
        
    }


    return (
        <>
            <Toggle />

            <div style={{
                display: "flex", 
                gap: "10px",
                fontSize: 30,
                padding: "0 24px",
            }}>
                <button style={{
                    padding: "2px 8px",
                    fontSize: "32px",
                    cursor: "pointer",
                }} onClick={decreaseCount}>-</button>

                <h3 style={{
                    border: "2px solid gray",
                    background: "#323232",
                    padding: "2px 16px",
                    color: COLORS[colorIndex],
                }}>{count}</h3>

                <button style={{
                    padding: "2px 8px",
                    fontSize: "32px",
                    cursor: "pointer",
                }} onClick={increaseCount}>+</button>
            </div>

            <div>
                <button onClick={()=>setColorIndex((colorIndex+1) % COLORS.length)}>Change Color</button>
            </div>
        </>
    )
}

export default Counter; 