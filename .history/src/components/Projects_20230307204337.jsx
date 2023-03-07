import React from "react";
import "./Projects.scss";

const Projects = () => {
	return (
		<section className="containerProjects">
			<div className="gridProjects">
				<div className="line"></div>
				<div className="textProjects">
					<h1>Projects Of Design</h1>
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
