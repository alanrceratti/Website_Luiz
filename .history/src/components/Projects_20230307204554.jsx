import React from "react";
import Button from "./Button";
import "./Projects.scss";

const Projects = () => {
	return (
		<section className="containerProjects">
			<div className="gridProjects">
				<div className="line"></div>
				<div className="textProjects">
					<h1>Projects Of Design</h1>
				</div>
				<div className="imgGridFields">
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
				</div>
				<div>
					<p>
						Take a look onto the Furniture, Interiors, Landscaping
						designs plus a few sketches right here.
					</p>

					<Button name="more +" />
				</div>
			</div>
		</section>
	);
};

export default Projects;
