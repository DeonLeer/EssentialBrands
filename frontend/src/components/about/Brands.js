import React, { useState } from "react";
import FG_Logo from "../../images/ForbiddenGardenLogo.jpg";
import HP_Logo from "../../images/highProfile.jpeg";
import PO_Logo from "../../images/PureOrganticLogo.png";
import PP_Logo from "../../images/PP_Header.png";
import TE_Logo from "../../images/terpenexpress/default.png";
import FG_Header from "../../images/FG_Header.png";
import PO_Header from "../../images/PO_Header.png";
import TE_Header from "../../images/TPXHeader.png";
import HP_Header from "../../images/HPHeader.png";

import "./Brands.css";
const brands = {
	FG: {
		name: "Forbidden Garden",
		image: FG_Logo,
		text: `Designed for the active man looking for a higher strength CBD experience. TheForbidden Garden product range combines generally higher levels of CBD with moredominant scents. Each product is formulated using unique combinations of essential oilsand fragrance oils including: peppermint, camphor, spearmint, Dragons Blood, lemon,coconut, desert rain. Our topical products are formulated using the finest cosmeticcreams, lotions and oils. Our ingestible products use the highest quality organic MCT oilhigh in caprylic acid (C8:0) and capric acid (C10:0).`,
	},
	PO: {
		name: "Pure Organtic",
		image: PO_Logo,
		text: `Designed for the unstoppable women our Pure Organtic products contain dominantCBD levels and combine the best base cosmetics with softer scents. Each product isformulated using unique combinations of essential oils and fragrance oils including:lavender, vanilla, coconut, desert rain, black cherry, blackberry, peppermint andcamphor. Our topical products are formulated using the finest cosmetic creams, lotionsand oils. Our ingestible products use the highest quality organic MCT oil high in caprylicacid (C8:0) and capric acid (C10:0).`,
	},
	HP: {
		name: "High Profile",
		image: HP_Logo,
		text: `High Profile is our in-house designed THC vape cartridge line. The cartridge is a 510thread, glass/ ceramic with a metal tip, designed to hold 1gm of flavoured distillate. Thecoil resistance is 1.4 Ohms for use on standard batteries designed to power ceramiccartridges. The cartridge is gold colored and laser etched with “HIGH PROFILE” on thestem and the HP crown logo on the tip. The cartridge comes with custom designed slideout box style packaging and holographic security seals. Master cartons holding 25individual cartridge boxes are also available also with holographic security seals.`,
	},
	TE: {
		name: "TerpeneXpress",
		image: TE_Logo,
		text: `Our Terpene Express flavors combine individual food grade terpenes extracted fromnon cannabis plants to create terpene profiles found in major cannabis strains. We canalso custom mix primary terpenes to create individual profiles for special projects and to create new flavour profiles.`,
	},
	PP: {
		name: "Pawsitive Pets",
		image: PP_Logo,
		text: `Our pet tincture contains a full 600mg of CBD combined with organic MCT oil andorganic salmon oil from Alaska.`,
	},
};

export default function Brands(props) {
	const [visibleBrand, setVisibleBrand] = useState(null);

	return (
		<div className="OurBrands">
			<h1>Our Brands</h1>
			<p>
				Essential Brands is an international enterprise looking to become a
				leader and a jack of all trades in the cannaboid industry. Because of
				this, our product line is split into multiple brands that each serve
				their own purpose.
			</p>
			<div className="BrandButtons">
				<button className="BrandButton" onClick={() => setVisibleBrand("FG")}>
					<img className="BrandButtonImage" src={FG_Header} alt="logo" />
				</button>
				<button className="BrandButton" onClick={() => setVisibleBrand("PO")}>
					<img className="BrandButtonImage" src={PO_Header} alt="logo" />
				</button>
				<button className="BrandButton" onClick={() => setVisibleBrand("TE")}>
					<img className="BrandButtonImage" src={TE_Header} alt="logo" />
				</button>
				<button className="BrandButton" onClick={() => setVisibleBrand("HP")}>
					<img className="BrandButtonImage" src={HP_Header} alt="logo" />
				</button>
				<button className="BrandButton" onClick={() => setVisibleBrand("PP")}>
					<img className="BrandButtonImage" src={PP_Logo} alt="logo" />
				</button>
			</div>
			<div className="Brands">
				{visibleBrand ? (
					<div className="Brand">
						<h2>{brands[visibleBrand].name}</h2>
						<div className="BrandContent">
							<p>{brands[visibleBrand].text}</p>
							<img
								className="Logo"
								src={brands[visibleBrand].image}
								alt="logo"
							/>
						</div>
					</div>
				) : (
					<p>Click on a Logo Above to Find Out More About the Brand!</p>
				)}
			</div>
		</div>
	);
}
