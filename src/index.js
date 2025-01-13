import React from "react";
import { createRoot } from "react-dom/client";
import { Description } from "./Views/Description.js";
import { Benefits } from "./Views/Benefits.js";
import { YouTube } from "./Views/YouTube.js";
import { handleSubmit } from "./controllers/handleSubmit.js";

const message =
	"Advocating for your transformation to a happier, healthier, better Self.";
const root = createRoot(window.bodyTag);
root.render(
	<>
		<main className="saintsGradient">
			<h1>OhThouReiki</h1>
			<p>{message}</p>
			<Description />
			<Benefits />
			<YouTube
				label="YouTube"
				src="https://www.youtube.com/embed/8cWrYFMGxbo?si=-e5-9tHUdt8ttmta"></YouTube>
			<form onSubmit={handleSubmit}>
				<label for="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email address"
				/>
				<input id="Submit" type="submit" />
			</form>
		</main>
	</>
);
