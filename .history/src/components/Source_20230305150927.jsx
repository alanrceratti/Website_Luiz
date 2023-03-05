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
					<p style={{ marginTop: "15px" }}>
						Coming true from a dream. Create unique designs
						essentialy nature inspired and accessible for all.
					</p>
					<br />
					{/* <p>
				From the very beginning, the company's focus has been on
				creating pieces that are both functional and visually
				stunning. Each piece is designed with a specific purpose
				in mind, whether it be a chair that is both comfortable
				and elegant or a table that is both practical and
				beautiful.
			</p> */}
					<Button name="more +" />
				</div>
			</div>
		</section>
	);
};

export default Source;
