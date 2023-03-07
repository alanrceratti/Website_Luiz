import React from "react";
import "./Slider.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Slider.css";
import bg from "../assets/bg-main.jpg";
import fields from "../assets/fields.jpg";
import award from "../assets/award.jpg";
import project from "../assets/projects.jpg";
import "../components/splide-default.min.css";

const Slider = () => {
	return (
		<div className="carouselInsta">
			<h1 className="textSlider">The Latest Events</h1>
			<Splide
				data-splide='{"type":"loop", "padding": "20%", "gap": "1em", "easing":"ease", "autoplay":"true", "interval": "3000" }'
				aria-label="My Favorite Images"
			>
				<SplideSlide>
					<img src={bg} alt="Image 1" />
				</SplideSlide>
				<SplideSlide>
					<img src={fields} alt="Image 2" />
				</SplideSlide>
				<SplideSlide>
					<img src={award} alt="Image 2" />
				</SplideSlide>
				<SplideSlide>
					<img src={project} alt="Image 2" />
				</SplideSlide>
				<SplideSlide>
					<img src={bg} alt="Image 1" />
				</SplideSlide>
				<SplideSlide>
					<img src={fields} alt="Image 2" />
				</SplideSlide>
				<SplideSlide>
					<img src={award} alt="Image 2" />
				</SplideSlide>
				<SplideSlide>
					<img src={project} alt="Image 2" />
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default Slider;
