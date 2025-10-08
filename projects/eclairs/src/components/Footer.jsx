const Footer = ()=>{
    return (
        <footer style={{
            background: "#323232",
            margin: "20px 0 0 0",
            height: 800,
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem",
            justifyContent: "center", 
            alignItems: "center", 
            color: "white", 
            fontFamily: "sans-serif",
            fontSize: "3rem"

        }}>
            <h2>Thanks for visiting Eclairs</h2>
            <p>All rights are reserved to Eclairs &copy; 2025-2026</p>
        </footer>
    )
}

export default Footer;