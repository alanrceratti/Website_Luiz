import React from "react";
import "./Designer.scss";
import Button from "./Button";
import bg from "../../public/bg.svg";
import bg2 from "../assets/bg-main.jpg";
import award from "../assets/award.jpg";
import fields from "../assets/fields.jpg";
import projects from "../assets/projects.jpg";
import { TbFileDownload } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";

const Designer = () => {
	const images = [
		{ id: 1, src: bg2, alt: "Image 1" },
		{ id: 2, src: award, alt: "Image 2" },
		{ id: 3, src: fields, alt: "Image 3" },
		{ id: 4, src: projects, alt: "Image 4" },
	];
	return (
		<section className="containerDesigner">
			<div className="gridDesigner">
				<div className="textDesigner">
					<h1>The Designer</h1>
				</div>
				<div className="gridDescriptionDesigner">
					<div className="DescriptionDesigner">
						<h2>Luiz Fernando Inocente</h2>
						<p>The dreamer. But also the doer.</p>
						<h3>14+ years of Design. Brazilian. UK based.</h3>
					</div>
					<div className="DesignerP">
						<p>
							Luiz, the Source Design founder, is an experienced
							Designer who has creating his path with strong
							empashis in Interiors and Furniture. He has
							gathering expertise through years from the
							large-scale industry, fine carpentry, architecture
							projects and running his own furniture business for
							several years back in Brazil.
						</p>
						<br />
						<p>
							Particularly motivated by natural materials and
							forms plus enthusiastic about simplicity and
							efficiency, Luiz's designs are consistently emerging
							with class, purpose as well as aesthetic. This
							massive background is now condensed into Source
							Design. And it's everything just for you.
						</p>

						<div className="buttonsDesigner">
							{/* <a href={cv} download="cv.pdf"> */}
							
							<div>
								<AiOutlineLinkedin
									className="icon"
									size={40}
									color={"#000000"}
								/>
							</div>
							<div>
								<a>Linkedin</a>
							</div>
							<div>
								<TbFileDownload
									className="icon"
									size={40}
									color={"#000000"}
								/>
							</div>
							<div>
								<a>Resume</a>
							</div>
						</div>
					</div>
				</div>
				<div className="imgGridDesigner">
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
			</div>
		</section>
	);
};

export default Designer;
