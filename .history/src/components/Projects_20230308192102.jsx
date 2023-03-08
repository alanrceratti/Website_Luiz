import React from "react";
import Button from "./Button";
import "./Projects.scss";
import bg2 from "../assets/bg-main.jpg";
import award from "../assets/award.jpg";
import fields from "../assets/fields.jpg";
import projects from "../assets/projects.jpg";
import InViewSection from "../hooks/InViewSection";

const Projects = () => {
	const images = [
		{ id: 1, src: bg2, alt: "Image 1" },
		{ id: 2, src: award, alt: "Image 2" },
		{ id: 3, src: fields, alt: "Image 3" },
		{ id: 4, src: projects, alt: "Image 4" },
	];
	return (
		<section className="containerProjects">
			<div className="gridProjects">
				<div className="line"></div>

				<div className="textProjects">
					<h1>Projects Of Design</h1>
				</div>

				<div className="imgGridProjects">
					<InViewSection
						style={{ animation: "my-animation 1s forwards" }}
					>
						<div>
							{images.map((image) => (
								<img
									key={image.id}
									src={image.src}
									alt={image.alt}
									// onClick={() => handleImageClick(image)}
								/>
							))}
						</div>
					</InViewSection>
				</div>
				<div className="containerTextProjects">
					<div className="divTextProjects">
						<p>
							Take a look onto the Furniture, Interiors and
							Landscaping designs.
						</p>

						<Button name="more +" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
