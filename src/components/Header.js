import React from "react";
import Button from "./button/Button";

const Header = () => {
	return (
		<div className="App-header">
			<Button type="tertiary">hem</Button>
			<div className="nav-bar">
				<Button type="tertiary">om karriärrevet</Button>
				<Button type="tertiary">kontakt</Button>
			</div>
		</div>
	);
};

export default Header;
