import React from "react";
import "./Fields.scss";

const Fields = () => {
	const mobile = useMedia("(max-width: 26rem)");
	const images = [
		{ id: 1, src: bg2, alt: "Image 1" },
		{ id: 2, src: award, alt: "Image 2" },
		{ id: 3, src: fields, alt: "Image 3" },
		{ id: 4, src: projects, alt: "Image 4" },
	];
	return <div>Fields</div>;
};

export default Fields;
