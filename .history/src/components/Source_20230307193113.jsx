import React from "react";
import "./Source.scss";
import logo from "../assets/source.png";
import Button from "./Button";
import bgmain from "../assets/bg-main.jpg";

const Source = () => {
	return (
		<section className="containerSource">
			<img className="logo" src={logo} />
			<span className="containerSource2"></span>
			<img src={bgmain} />
			<div className="mainContainerSource">
				<div className="containerText">
					<div className="divText">
						<p>
							Coming true from a dream. Create unique designs
							essentialy nature inspired and accessible for all.
						</p>

						<Button name="more +" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Source;
