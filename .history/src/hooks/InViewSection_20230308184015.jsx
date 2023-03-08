import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function InViewSection({ children, style, translate }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "-150px", once: true });
	const { ref: inViewRef, inView } = useInView({ threshold: 0 });

	useEffect(() => {
		console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<section
			ref={ref}
			style={{
				transform: inView
					? "translate(0px)"
					: `translate(${translate || "-200px"})`,
				opacity: isInView ? 1 : 0,
				transition: "1s",
				...style,
				...translate,
			}}
		>
			<span>{children}</span>
		</section>
	);
}

export default InViewSection;
