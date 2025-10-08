import {Link} from "react-router-dom";
import {useState} from "react"; 
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    // Function to toggle nav open state
    const handleToggle = () => setNavOpen(!navOpen);

    return (
        <header className="w-full h-[var(--header-height)] bg-indigo-950 px-5 sm:px-10 py-4 flex items-center justify-between sticky top-0 left-0 z-[30]">
            <h1 className="text-3xl text-white font-bold ">
                <Link to="/">Learners</Link>
            </h1>
            
            {/* Navigation */}
            <nav
                className={`
                    absolute sm:static top-16 right-0 bg-indigo-950 p-8 sm:p-0 rounded-b-lg 
                    flex flex-col sm:flex-row items-center gap-8
                    transition-all duration-300
                    ${navOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-auto'}
                    sm:opacity-100 sm:translate-y-0 sm:pointer-events-auto
                `}
                style={{ minWidth: '180px' }}
            >
                <Link
                    to="/signup"
                    className="nav-menu"
                    onClick={()=>setNavOpen(false)}
                >
                    SignUp
                </Link>
                    
                <Link 
                    to="/" 
                    className="nav-menu" 
                    onClick={() => setNavOpen(false)}

                >Home</Link>

                <Link 
                    to="#" 
                    className="nav-menu" 
                    onClick={() => setNavOpen(false)}

                >About us</Link>

                <Link 
                    to="/tutorials" 
                    className="nav-menu"
                    onClick={() => setNavOpen(false)}

                >Tutorials</Link>

            </nav>

            {/* Toggle button only on mobile */}
            <button
                className="sm:hidden text-3xl text-white cursor-pointer"
                onClick={handleToggle}
                aria-label="Toggle navigation"
            >
                {
                    !navOpen ? 
                        <RxHamburgerMenu />
                    :   
                        <RxCross2 />                   
                }
            </button>
        </header>
    )
}

export default Header;