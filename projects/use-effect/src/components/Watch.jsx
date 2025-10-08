import { useEffect, useState } from "react";

const Watch = () => {
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            const currTime = new Date();
            const timeString = currTime.toLocaleTimeString();

            setCurrTime(timeString)

        }, 1000);

        // Cleaup
        return ()=>{
            clearInterval(intervalId);
        }

    }, []); 

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '48px',
        }}>
            <h1>{currTime}</h1>
        </div>
    )
}

export default Watch
