import { output } from "../utils/output.js";

export function handleSubmit(event = new Event()) {
	debugger;
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[0];
	const email = emailInput.value;
	output(
		"Submitting form for <br>" +
			email +
			"<br>" +
			"Thank you for signing up for our newsletter. Use discount code: REIKIFIED2025 for 15% off your first service or purchase."
	);
}
