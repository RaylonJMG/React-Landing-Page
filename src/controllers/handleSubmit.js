import React from "react";

export function handleSubmit(event = new Event()) {
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[1];
	const email = emailInput.value;
	output("Submitting form for <br>" + email + "...");
}
