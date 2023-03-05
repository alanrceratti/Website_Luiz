import React from "react";
import "./Designer.scss";
import Button from "./Button";
import bg from '../../public/bg.svg'

const Designer = () => {
	return (
		<section className="containerDesigner">
			<div className="textDesigner">
				<h1>The Designer</h1>
			</div>
			<div className="gridDesigner">
				<div className="DescriptionDesigner">
					{/* <p>The dreamer. But also the doer.</p> */}
					<h2>Luiz Fernando Inocente</h2>
					<h3>14+ years of Design. Brazilian. UK based.</h3>
				</div>
				<div className="DesignerP">
					<p>
						Luiz, the Source Design founder, is an experienced
						Designer who has creating his path with strong empashis
						in Interiors and Furniture. He has gathering expertise
						through years from the large-scale industry, fine
						carpentry, architecture projects and running his own
						furniture business for several years back in Brazil.
					</p>
					<br />
					<p>
						Particularly motivated by natural materials and forms
						plus enthusiastic about simplicity and efficiency,
						Luiz's designs are consistently emerging with class,
						purpose as well as aesthetic
					</p>
					<br />
					<p>
						This massive background is now condensed into Source
						Design. And it's everything just for you.
					</p>
					<p className="Designertags">
						/ Inspirations / Nature / Wood / Textures /
					</p>
					<Button name="more +" />
				</div>
			</div>
		</section>
	);
};

export default Designer;
