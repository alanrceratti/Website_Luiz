import React from "react";
import "./Award.scss";

const Award = () => {
	return (
		<section className="containerAward">
			<div className="gridAward">
				<div className="line"></div>
				<div className="textAward">
					<h1>An Award Winning Piece</h1>
				</div>
				<div className="imgGridAward">
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

				<div className="containerTextAward">
					<div className="divTextAward">
						<p>
							How come we had got this fascinating chair creation
							recognised by an important Brazilian contest.
						</p>

						<Button name="more +" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Award;
