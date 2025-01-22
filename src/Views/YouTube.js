import React from "react";

export function YouTube(props) {
	debugger;
	const center = {
		width: "fit-content",
		justifySelf: "center",
	};
	const src = props.src;
	//const width = props.width;
	//const height = props.height;
	const dimensions = {
		width: "560",
		height: "315",
	};
	const depth = {
		borderRadius: "10px",
		boxShadow: "10px 10px grey",
	};

	return (
		<div style={(dimensions, center)}>
			<iframe
				width="100%"
				height="100%"
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				style={depth}></iframe>
		</div>
	);
}
