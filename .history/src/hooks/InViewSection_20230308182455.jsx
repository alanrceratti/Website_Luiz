import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

function InViewSection({ children, props }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { margin: "-150px", once: true });

	useEffect(() => {
		console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<section
			ref={ref}
			style={{props.style
				
			}}
			
		>
			<span>{children}</span>
		</section>
	);
}

export default InViewSection;
