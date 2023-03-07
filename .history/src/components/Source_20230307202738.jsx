import React from "react";
import "./Source.scss";
import logo from "../assets/source.png";
import Button from "./Button";

const Source = () => {
	return (
		<section className="containerSource">
			<div className="containerSource2">
				<img className="logo" src={logo} />
				<div className="line"></div>

				<div className="mainContainerSource">
					<div className="containerText">
						<div className="divText">
							<p>
								Coming true from a dream. Create unique designs
								essentialy nature inspired and accessible for
								all.
							</p>

							<Button name="more +" />
						</div>
					</div>
				</div>
			</div>
			<div className="line2"></div>
		</section>
	);
};

export default Source;
