import { useInView } from "framer-motion";
import React, { useEffect } from "react";
import Award from "./components/Award";
import Contact from "./components/Contact";
import Designer from "./components/Designer";
import Fields from "./components/Fields";
// import Fields2 from "./components/Fields2";
import Footer from "./components/Footer";
import InstagramSource from "./components/InstagramSource";
import Projects from "./components/Projects";

import Source from "./components/Source";
import Line from "./Line";

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
			<InstagramSource />
			<Contact />

			<Footer />
		</section>
	);
};

export default Home;
