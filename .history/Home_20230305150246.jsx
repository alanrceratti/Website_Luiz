import { useInView } from "framer-motion";
import React, { useEffect } from "react";
import Designer from "./src/components/Designer";
import Fields from "./src/components/Fields";
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
