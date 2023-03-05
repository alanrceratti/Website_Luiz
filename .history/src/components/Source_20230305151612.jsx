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
					<div className="divText">
						<p>
							Coming true from a dream. Create unique designs
							essentialy nature inspired and accessible for all.
						</p>
					</div>
					<br />
					<div className="">
						<Button name="more +" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Source;
