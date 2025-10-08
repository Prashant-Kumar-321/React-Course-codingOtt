import { useRef } from "react";

const Home = ()=>{
    const heading = useRef()


    const changeColor = ()=>{
        heading.current.style.color = 'Green';
        heading.current.innerHTML = 'Thanks for visiting Eclairs';
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column", 
            gap: 24,
            padding: "10px 80px",

        }}>
            <h1 ref={heading} style={{
                textAlign: "center",
            }}>Welcome to Eclairs</h1>

            <button onClick={changeColor}>Click for Surprise</button>

            <img src="/images/joker-poster.png" alt="Joker Poster" style={{
                width: 500,
            }}/>

            <h2>Enjoy Eclairs below video</h2>

            <video src="/videos/sample-video.mp4" controls style={{
                width: 400,
            }}></video>
        </div>
    )
}
export default Home; 