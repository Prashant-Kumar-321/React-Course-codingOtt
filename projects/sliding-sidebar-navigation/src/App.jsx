import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const App = () => {
	const [sidebarSize, setSidebarSize] = useState(280);


	return (
		<div>
			<aside style={{
				height: 600,
				width: sidebarSize,
				backgroundColor: "#0e2e2b",
				position: "fixed",
				left: 0,
				top: 0,
				color: "white",
				fontSize: "24px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				transition: "0.3s",

			}}>
				Side Bar Navigation Menu
			</aside>

			<header style={{
				marginLeft: sidebarSize,
				backgroundColor: "#f2f2f2",
				transition: "0.3s",
			}}>
				<button 
					style={{
						width: "2rem",
						height: "2rem",
						padding: 2,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontSize: "28px",
						fontWeight: 900,
						cursor: "pointer",
						transform: sidebarSize===0 ? "rotate(180deg)" : "rotate(0deg)"
					}} 
					onClick={()=>setSidebarSize(sidebarSize === 0 ? 280 : 0)}
				>
					<MdKeyboardDoubleArrowLeft />
				</button>
			</header>
		</div>
	)
};

export default App;
