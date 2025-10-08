import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tutorials from "./components/Tutorials"
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import SignUp from './components/SignUp';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/tutorials" element={<Tutorials />} />
				<Route path="/signup" Component={SignUp}/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;
