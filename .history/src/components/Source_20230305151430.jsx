import React from "react";
import "./Source.scss";
import logo from "../assets/source.png";
import Button from "./Button";

const Source = () => {
	return (
		<section className="containerSource">
			<img className="logo" src={logo} />
			<div className="mainContainerSource">
				<div>
					<p>
						Coming true from a dream. Create unique designs
						essentialy nature inspired and accessible for all.
					</p>
					<br />
					<div></div>
					<Button name="more +" />
				</div>
			</div>
		</section>
	);
};

export default Source;
