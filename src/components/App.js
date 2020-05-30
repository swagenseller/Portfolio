import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects";
import Header from "./Header";
import About from "./About";

const App = () => {
	return (
		<BrowserRouter>
			<div className="ui container">
				<Header />
				<Route path="/" exact component={Projects} />
				<Route path="/about" exact component={About} />
			</div>
		</BrowserRouter>
	);
};

export default App;
