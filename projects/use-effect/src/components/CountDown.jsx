import { useEffect, useRef, useState } from "react";

const CountDown = () => {
    const TIMER = 10; 
    const [timerCount, setTimerCount] = useState(TIMER);
    const [showDownloadingStatus, setShowDownloadingStatus] = useState(false); 
    const intervalRef = useRef(null);


    function startDownloading(){
        const a = document.createElement('a'); 
        a.href = ''; 
        a.download = ''; 
        a.click();
    }

    useEffect(()=>{ 
        intervalRef.current = setInterval(()=>{
            setTimerCount(prevCount => prevCount-1);
        }, 1000);

        // Cleanup function (prevent memory leak)
        return () => clearInterval(intervalRef.current)
    
    }, []); 


    useEffect(()=>{
        if(timerCount === 0){
            clearInterval(intervalRef.current); // Stop the count down

            setShowDownloadingStatus(true); // Make the downloading element appear

            const timeoutId = setTimeout(()=>{
                setShowDownloadingStatus(false); 
            }, 2000);

            startDownloading();

            return ()=>clearTimeout(timeoutId);
            
        }

    }, [timerCount]);


    return (
        <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '48px',
        }}>

            <p>Count Down</p>
            <h1>
                {timerCount}
            </h1>

            {
                showDownloadingStatus && 
                <h3>Downloading begin ... </h3>
            }

        </div>
    )
}

export default CountDown
