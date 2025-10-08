const Field = ({type, name, label, value, placeholder, onChange, Icon})=>{
    return (
        <div 
            className="flex flex-col gap-2"
        >
            <label htmlFor={name}>{label}</label>

            <p 
                className="flex items-center gap-2 border-1 border-gray-400 p-2 rounded-2xl"
            >
                {Icon}

                <input 
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} 
                    className="outline-none flex-grow text-xl"
                />
            </p>

        </div> 
    )
}

export default Field; 