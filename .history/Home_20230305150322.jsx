import { useInView } from "framer-motion";
import React, { useEffect } from "react";
import Award from "./src/components/Award";
import Contact from "./src/components/Contact";
import Designer from "./src/components/Designer";
import Fields from "./src/components/Fields";
import Line from "./src/components/Line";
import Projects from "./src/components/Projects";
import Slider from "./src/components/Slider";
import Source from "./src/components/Source";

const Home = () => {
	return (
		<section>
			<Source />
			<Designer />
			<Fields />
			<Line />
			<Projects />
			<Line />
			<Award />
			<Slider />
			<Contact />

			<Footer />
		</section>
	);
};

export default Home;
