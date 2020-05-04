import React from "react";
import { Link } from "react-router-dom";
import Button from "./button/Button";

const Header = ({ history }) => {
	return (
		<div className="App-header" id="header">
			<Link to="/">
				<Button type="tertiary">hem</Button>
			</Link>
			<div className="nav-bar">
				<Button type="tertiary" onClick={() => history.push("/about")}>
					om karriärrevet
				</Button>
			</div>
		</div>
	);
};

export default Header;
