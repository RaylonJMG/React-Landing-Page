import React from "react";

export function YouTube(props) {
	const src = props.src;
	const width = props.width;
	const height = props.height;
	return (
		<>
			<iframe
				width="560"
				height="315"
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</>
	);
}
