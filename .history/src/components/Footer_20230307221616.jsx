import React from "react";
import "./Footer.scss";

import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiMessengerLine } from "react-icons/ri";

const Footer = () => {
	return (
		<div className="footerContainer">
			<ul>
				<li>
					<a
						href="https://m.me/AlanRCeratti"
						target="_blank"
						rel="noreferrer"
					>
						<RiMessengerLine
							className="icon"
							size={60}
							color={"#ffffff"}
						/>
					</a>
				</li>
				<li>
					<a
						href=" https://wa.me/+447552357714"
						target="_blank"
						rel="noreferrer"
					>
						<SiWhatsapp
							className="icon"
							size={45}
							color={"#ffffff"}
						/>
					</a>
				</li>
				<li>
					<a
						href="https://github.com/alanrceratti"
						target="_blank"
						rel="noreferrer"
					>
						<SiInstagram size={45} color={"#ffffff"} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/iiif/"
						target="_blank"
						rel="noreferrer"
					>
						<SlSocialLinkedin size={45} color={"#ffffff"} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
