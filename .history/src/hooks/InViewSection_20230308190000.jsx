import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function InViewSection({ children, style, translateY, translateX }) {
	const ref = useRef(null);
	const { ref: inViewRef, inView } = useInView({ threshold: 0 });

	return (
		<section
			ref={ref}
			style={{
				transform: inView
					? "translate(0px)"
					: `translate(${translateX || "0px"}, ${
							translateY || "-200px"
					  })`,
				opacity: inView ? 1 : 0,
				transition: "1s",
				...style, // merge the style prop with the default styles
			}}
		>
			<span ref={inViewRef}>{children}</span>
		</section>
	);
}

export default InViewSection;
