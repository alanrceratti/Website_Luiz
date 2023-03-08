import React, { useRef } from "react";
import Button from "./Button";
// import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// emailjs
		// 	.sendForm(
		// 		"service_9r2qy5t",
		// 		"template_8hm6p3f2",
		// 		form.current,
		// 		"GwS-FbYtihip9wEJV"
		// 	)
		// 	.then(
		// 		(result) => {
		// 			alert("Thank you for your message! I will reply soon.");
		// 			form.current.reset();
		// 		},
		// 		(error) => {
		// 			alert("Error, try again.");
		// 		}
		// 	);
	};

	return (
		<>
			<section className="containerForm">
				<div className="form">
					<form ref={form} onSubmit={sendEmail}>
						<label className="label" htmlFor="name">
							Name
						</label>
						<input type="text" id="name" name="name" required />
						<label className="label" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@email.com"
							required
						/>

						<label className="label" htmlFor="message">
							Message
						</label>
						<textarea
							type="textarea"
							id="message"
							name="message"
							rows="5"
							placeholder="Write your message here"
							required
						/>
						<div className="sendButton">
							<Button name="Send" />
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
