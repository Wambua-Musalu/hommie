import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./dist/styles.css";
import "./dist/css/all.css";
import myLogo from "./images/mysvg.svg";
import Home from "./components/Home";
import Auth from "./components/Auth";
import PostNewProperty from "./components/PostNewProperty";


function App() {
	return (
		<>
		<div className="container">
		<Router>
			<Navbar logo = {myLogo} />
			<Routes>
				<Route path = "/" element = {<Home />} />
				<Route path = "/auth" element = {<Auth />} />
				<Route path = "/post_property" element = {<PostNewProperty />} />
			</Routes>
		</Router>
		</div>
		</>
	);
}

export default App;
