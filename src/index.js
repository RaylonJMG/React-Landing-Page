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
		<main>
			<h1>OhThouReiki</h1>
			<img src="../assets/reiki.1.jpg" width="100%" />
			<h3 style={{ textAlign: "center" }}>{message}</h3>

			<Description />
			<img src="../assets/reiki.jpg" width="100%" />
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
				<input name="submit" id="submit" type="submit" />
			</form>
		</main>
	</>
);
