import React from "react";
import "./Fields.scss";
import bg from "../../public/bg.svg";
import bg2 from "../assets/bg-main.jpg";
import award from "../assets/award.jpg";
import fields from "../assets/fields.jpg";
import projects from "../assets/projects.jpg";
import useMedia from "../hooks/useMedia";

const Fields = () => {
	const mobile = useMedia("(max-width: 26rem)");
	const images = [
		{ id: 1, src: bg2, alt: "Image 1" },
		{ id: 2, src: award, alt: "Image 2" },
		{ id: 3, src: fields, alt: "Image 3" },
		{ id: 4, src: projects, alt: "Image 4" },
	];
	return (
		<section className="containerFields">
			<div className="textFields">
				<h1>The Fields Already Passed By</h1>
			</div>
			<div className="imgContainerFields">
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
				{selectedImage && (
					<div className="modal">
						<span className="close" onClick={handleModalClose}>
							&times;
						</span>
						<img
							className="modal-content"
							src={selectedImage.src}
							alt={selectedImage.alt}
						/>
					</div>
				)}
			</div>
			<div className="moreFields">
				<div>
					<p>
						The Designer career illustrated from different concepts
						and missions.
					</p>

					<Button name="more +" />
				</div>
			</div>
		</section>
	);
};

export default Fields;
