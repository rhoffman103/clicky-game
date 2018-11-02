import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
	<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light justify-content-center">
		<Link className="navbar-brand d-flex w-50 mr-auto" to="/">
			<h2>Clicky Game</h2>
		</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
			<span className="navbar-toggler-icon" />
		</button>
		<div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
			<ul className="navbar-nav w-100 justify-content-center">
				<li className="nav-item active">
					{props.currentGuess}
				</li>
			</ul>
			<ul className="nav navbar-nav ml-auto w-100 justify-content-end">
				<li className="nav-item">
					Score: {props.score} | Top Score: {props.topScore}
				</li>
			</ul>
		</div>
	</nav>
);

export default Navbar;
