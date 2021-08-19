import React from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();
		if (
			e.target.first_name.value &&
			e.target.last_name.value &&
			e.target.email.value &&
			e.target.phone.value &&
			e.target.message.value
		) {
			emailjs
				.sendForm(
					"service_lchbwnf",
					"template_f7i0mqr",
					e.target,
					"user_VixIV8GqWrUATSnlI7imT",
				)
				.then(
					(result) => {
						document.getElementById("contact-form").reset();
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					},
				);
		} else {
			alert("Please fill out your name, email, phone number & message");
		}
	}

	return (
		<div className="Invest">
			<h1>Contact Us</h1>
			<p className="InvestText">
				Do you have any questions, concerns, special requests or special orders? Please fill out the form down below to get in contact with us!
			</p>
			<form id="contact-form" className="contact-form" onSubmit={sendEmail}>
				<div className="FormRow">
					{" "}
					<div>
						<label for="first_name">First Name</label>
						<input className="investInputText" type="text" name="first_name" />
					</div>
					<div>
						<label for="last_name">Last Name</label>
						<input className="investInputText" type="text" name="last_name" />
					</div>
					<div>
						<label for="email">Email</label>
						<input className="investInputEmail" type="email" name="email" />
					</div>
				</div>
				<div className="FormRow">
					{" "}
					<div>
						{" "}
						<label for="phone">Phone Number</label>
						<input className="investInputPhone" type="tel" name="phone" />
					</div>
					<div>
						{" "}
						<label for="company">Company</label>
						<input className="investInputText" type="text" name="company" />
					</div>
				</div>

				<label for="message">Message</label>
				<textarea className="investInputText" name="message" style={{ height: "200px" }} />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
