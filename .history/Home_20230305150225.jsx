import { useInView } from "framer-motion";
import React, { useEffect } from "react";
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
