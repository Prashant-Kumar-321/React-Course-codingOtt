import { useState } from "react";

const Field = ({type, label, placeholder, fieldname, value, onChange}) => {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			gap: 8,
		}}>
			<label 
				htmlFor={fieldname}
				style={{
					fontFamily: "sans-serif",
					fontSize: 18,
				}}
			
			>{label} </label>

			<input 
				type={type} 
				name={fieldname} 
				placeholder={placeholder}
				id={fieldname}
				value={value}
				onChange={onChange}
				style={{
					padding: 12,
					border: "1px solid #ccc",
					borderRadius: 8,
					outline: "none",
					fontFamily: "sans-serif",
					fontSize: 16,
				}}
			/>

		</div>

	)
}

export default function App() {
	const [signUpForm, setSignUpForm] = useState({
		fullname: '',
		email: '',
		password: ''
	});

	
	const signUserUp = (event) => {
		event.preventDefault();

		console.log(signUpForm);
		console.log('Send the form data to backend server for further processing ...');

		// Reset the form dynamically
		setSignUpForm(prevForm =>{
			const keys = Object.keys(prevForm); // Get array of keys eg ['fullname', 'email', 'password']
			const keyValuePairsArray = keys.map(key=>[key, ""]); // [['fullname', ''], ['email', ''], ['password', '']]
			return Object.fromEntries(keyValuePairsArray); // create object from key-value array
		});

	}

	const handleFieldChange = (event) => {
		const input = event.target; 
		const name = input.name; 
		const value = input.value; 

		setSignUpForm({
			...signUpForm,
			[name]: value,
		})
	}

	return (
		<div style={{
			height: "100vh",
			backgroundColor: "#021526",
			display: "flex",
			justifyContent:"center",
			alignItems: "center",
		}}>

			<form 
				onSubmit={signUserUp}
				action="#" 
				method="get" 
				style={{
					width: "480px",
					padding: 12,
					backgroundColor: "#fff",
					borderRadius: 8,
					display: "flex",
					flexDirection: "column",
					gap: 16,
				}}
			>
				<Field 
					type="text" 
					label="Full Name *" 
					placeholder="Naveen Patel" 
					fieldname="fullname" 
					value={signUpForm.fullname} 
					onChange={handleFieldChange}
				/>

				<Field 
					type="email" 
					label="Email *" 
					placeholder="naveen@domain.com" 
					fieldname="email" 
					value={signUpForm.email} 
					onChange={handleFieldChange}
				/>

				<Field 
					type="password" 
					label="Pasword *" 
					placeholder="Password" 
					fieldname="password" 
					value={signUpForm.password}
					onChange={handleFieldChange}
				/>

				<div style={{
					width: "100%",
				}}>
					<button type="submit" 
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 8,
							borderRadius: 8,
							fontSize: "1.2rem",
							fontWeight: "bold",
							cursor: "pointer",
							backgroundColor: "#3DC2EC",
							color: "#fff",
							border: "none",
						}}
					>
						Sign Up
					</button>
				</div>

			</form>

		</div>
	)
}
