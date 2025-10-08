import {
	BrowserRouter, 
	Routes, 
	Route
} from 'react-router-dom'; 
import Home from './components/Home'
import Tutorials from './components/Tutorials';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Couter from './components/Couter';
import Zoom from './components/Zoom';
import PostCategory from './components/PostCategory';


const App = () => {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/tutorials" element={<Tutorials/>} />
				<Route path="/register" element={<Register/>} />
				<Route path="/counter" element={<Couter/>} />
				<Route path="/zoom" Component={Zoom} />
				<Route path="/post/:category" Component={PostCategory} />

				<Route path="*" element={<PageNotFound/>}></Route>
			</Routes>
			{/*<Footer /> */}
		</BrowserRouter>
	)
}

export default App; 
