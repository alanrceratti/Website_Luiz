import { useInView } from "framer-motion";
import React, { useEffect } from "react";
import Award from "./src/components/Award";
import Contact from "./src/components/Contact";
import Designer from "./src/components/Designer";
import Fields from "./src/components/Fields";
import Footer from "./src/components/Footer";
import Line from "./src/components/Line";
import Projects from "./src/components/Projects";
import Slider from "./src/components/Slider";
import Source from "./src/components/Source";
import InViewSection from "./src/hooks/InViewSection";

const Home = () => {
	return (
		<section>
			<InViewSection>
				<Source />
			</InViewSection>
			<InViewSection
				style={{
					transform: isInView
						? "translate(0px)"
						: "translate(-200px)",
				}}
			>
				<Designer />
			</InViewSection>
			<InViewSection>
				<Fields />
			</InViewSection>
			<InViewSection>
				<Projects />
			</InViewSection>
			<InViewSection>
				<Award />
			</InViewSection>
			<InViewSection>
				<Slider />
			</InViewSection>
			<InViewSection>
				<Contact />
			</InViewSection>
			<Footer />
		</section>
	);
};

export default Home;
