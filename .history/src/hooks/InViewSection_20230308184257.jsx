import { useInView } from "framer-motion";
import { useRef } from "react";

function InViewSection({ children, style, translate }) {
	const ref = useRef(null);
	const { ref: inViewRef, inView } = useInView({ threshold: 0 });

	return (
		<section
			ref={ref}
			style={{
				transform: inView
					? "translate(0px)"
					: `translate(${translate || "-200px"})`,
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
