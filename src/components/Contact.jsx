import React from "react";
import "./Contact.scss";
import ContactForm from "./ContactForm";
import contact from "../assets/contact.jpg";

const Contact = () => {
	return (
		<section className="mainContact">
			<div className="containerContact">
				<h1>CONTACT</h1>
				<h2>
					You have got here, now drop me a line and let's have a chat.
				</h2>
				<div className="gridContact">
					<div>
						<ContactForm />
					</div>
					<div>
						<img className="photoDesigner" src={contact} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
