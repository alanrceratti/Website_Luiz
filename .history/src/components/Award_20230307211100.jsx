import React from "react";
import "./Award.scss";

const Award = () => {
	return (
		<section className="containerProjects">
			<div className="gridProjects">
				<div className="line"></div>
				<div className="textProjects">
					<h1>Projects Of Design</h1>
				</div>
				<div className="imgGridProjects">
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

				<div className="containerTextProjects">
					<div className="divTextProjects">
						<p>
							Take a look onto the Furniture, Interiors,
							Landscaping designs plus a few sketches right here.
						</p>

						<Button name="more +" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Award;
