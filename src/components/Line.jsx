import React, { useEffect, useState } from "react";

const Line = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 416px)");

		const handleMediaQueryChange = (mediaQuery) => {
			setIsSmallScreen(mediaQuery.matches);
		};

		mediaQuery.addEventListener("change", () => {
			handleMediaQueryChange(mediaQuery);
		});

		return () => {
			mediaQuery.addEventListener("change", () => {
				handleMediaQueryChange(mediaQuery);
			});
		};
	}, []);
	return (
		<div
			style={{
				width: "100%",
				backgroundColor: "white",
				height: isSmallScreen ? "2rem" : "3rem",
			}}
		></div>
	);
};

export default Line;
