import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <nav
            style={{
                backgroundColor: "#323232", 
                padding: "10px 48px", 
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "space-between", 
                alignItems: "center",
            }}
        >
            <h1 style={{
                color: "white", 
                fontSize: "2rem", 
                fontFamily: "sans-serif"
            }}>Eclairs</h1>

            <div style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                gap: "20px", 
            }}>
                <Link to="/" style={{
                    color: "white", 
                    fontSize: "1.3rem", 
                    fontFamily: "sans-serif", 
                }}>Home</Link>

                <Link to="/tutorials" style={{
                    color: "white", 
                    fontSize: "1.3rem", 
                    fontFamily: "sans-serif", 
                }}>Tutorials</Link>

                <Link to="/register" style={{
                    color: "white", 
                    fontSize: "1.3rem", 
                    fontFamily: "sans-serif", 
                }}>Register</Link>
            </div>
        </nav>
    )
}


export default Navbar; 