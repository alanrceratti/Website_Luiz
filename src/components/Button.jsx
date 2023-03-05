import React from "react";
import "./Button.scss";

const Button = (props) => {
	return (
		<button>
			<span>{props.name}</span>
		</button>
	);
};

export default Button;
