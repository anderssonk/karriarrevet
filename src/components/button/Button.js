import React from "react";
import "../../css/button.css";

const setType = (type) => {
	switch (type) {
		case "primary":
			return "btn-primary";
		case "secondary":
			return "btn-secondary";
		case "tertiary":
			return "btn-tertiary";
		case "topBtn":
			return "btn-tertiary topBtn";
		case "closeBtn":
			return "btn-tertiary closeBtn";
		default:
			return "btn-primary";
	}
};

const Button = ({ type, children, onClick, special, id }) => {
	const specialBtn = (
		<button className="btn special" onClick={onClick}>
			{children}
		</button>
	);

	if (special) return specialBtn;
	return (
		<button
			className={`btn ${setType(type)}`}
			id={id ? id : ""}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
