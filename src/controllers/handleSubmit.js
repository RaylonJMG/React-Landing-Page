export function handleSubmit(event = new Event()) {
	event.preventDefault();
	output("Form was submitted successfully.");
}
