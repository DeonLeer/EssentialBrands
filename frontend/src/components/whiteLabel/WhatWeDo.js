import React from "react";
import { Link } from "react-router-dom";
import "./WhatWeDo.css";
import image1 from "../../images/whitelabeling/whatwedo/whatwedo1.png";
import image2 from "../../images/whitelabeling/whatwedo/whatwedo2.png";
import image3 from "../../images/whitelabeling/whatwedo/whatwedo3.png";
import image4 from "../../images/whitelabeling/whatwedo/whatwedo4.png";
import image5 from "../../images/whitelabeling/whatwedo/whatwedo5.png";
import image6 from "../../images/whitelabeling/whatwedo/whatwedo6.png";

export default function WhatWeDo(props) {
	return (
		<div className="WhatWeDo">
			<h1>What We Can Do For You</h1>
			<button className="WLButton">
				<Link to="/whitelabeling">What Is White Labeling?</Link>
			</button>
			<p>
				Bringing product to market involves formulating, procuring ingredients
				(high quality cannabis derivatives, flavouring agents), hardware and
				packaging, manufacturing, fulfilment and compliance. Essential Brands
				has expertise and execution capability in all of these disciplines. Our
				team brings over 100 years of academic and hands on combined knowhow and
				street wise knowledge in the following key areas:{" "}
			</p>
			<ul className="WhatWeDoList">
				<li>cultivation and crop quality assessment</li>
				<li>extraction of distillates</li>
				<li>formulation of vape, topical and sublingual products</li>
				<li>
					procurement of refined distillates and isolates, flavouring agents and
					base cosmetic formulations
				</li>
				<li>design, manufacturing and procurement of hardware and packaging</li>
				<li>mixing, filling, packaging, and labelling</li>
				<li>fulfilment</li>
			</ul>
			<p>
				Each of the above are critical to successful branding, bringing product
				to market, maintaining quality, fulfilling market demand and building
				customer loyalty. Call us for a free consultation and find out how we
				can be part of your brand’s growth and success.
			</p>
			<div className="image-grid">
				<div className="top-row">
					<div>
						<img src={image1} alt="CBD Distillate and Cosmetic Pre-Mix" />
						<figcaption>CBD Distillate and Cosmetic Pre-Mix</figcaption>
					</div>
					<div>
						<img src={image2} alt="OEM Vape Cartridges" />
						<figcaption>OEM Vape Cartridges</figcaption>
					</div>
					<div>
						<img src={image3} alt="Pneumatic Filling" />
						<figcaption>Pneumatic Filling</figcaption>
					</div>
				</div>
				<div className="bottom-row">
					<div>
						<img src={image4} alt="Laser Etching" />
						<figcaption>Laser Etching</figcaption>
					</div>
					<div>
						<img src={image5} alt="Packaging Design" />
						<figcaption>Packaging Design</figcaption>
					</div>
					<div>
						<img src={image6} alt="OEM Assembly" />
						<figcaption>OEM Assembly</figcaption>
					</div>
				</div>
			</div>
		</div>
	);
}
