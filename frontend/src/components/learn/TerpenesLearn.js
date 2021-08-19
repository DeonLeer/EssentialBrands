import React, { useRef, useEffect } from "react";
import "./TerpenesLearn.css";
import TerpenesImg from "../../images/Terps.png";
import { useParams, Link } from "react-router-dom";

export default function TerpenesLearn(props) {
	const terpeneList = {
		apinene: {
			name: "α-Pinene & β-Pinene",
			description: `These two terpenes are responsible for giving cannabis strains their pine-like scent. Alpha-pinene gives off the scent of pine needles and is the most abundant terpene found in nature: Ginger, Nutmeg, Rosemary, Lavender and in pine trees. Beta-pinene gives off the scent of rosemary, dill, basil, or parsley. Pinene terpenes are powerful for treating asthma as a bronchodilator, which improves airflow to the lungs. It also has powerful antiseptic and anti-inflammatory properties and can improve memory and alertness. It is found in strains including Blue Dream, OG Kush, Bubba Kush and Trainwreck.`,
		},
		bpinene: {
			name: "α-Pinene & β-Pinene",
			description: `These two terpenes are responsible for giving cannabis strains their pine-like scent. Alpha-pinene gives off the scent of pine needles and is the most abundant terpene found in nature: Ginger, Nutmeg, Rosemary, Lavender and in pine trees. Beta-pinene gives off the scent of rosemary, dill, basil, or parsley. Pinene terpenes are powerful for treating asthma as a bronchodilator, which improves airflow to the lungs. It also has powerful antiseptic and anti-inflammatory properties and can improve memory and alertness. It is found in strains including Blue Dream, OG Kush, Bubba Kush and Trainwreck.`,
		},
		bcaryophyllene: {
			name: `β-Caryophyllene`,
			description: `This terpene is found in cloves, cinnamon, and black pepper. It is the only terpene that binds directly to the CB2 cannabinoid receptors in our endocannabinoid system. It has analgesic and anti-anxiety properties. It also has anti-inflammatory properties, making it an often-used ingredient in topical skin treatments. It is found in strains including Girl Scout Cookies, Gorilla Glue #4 and Blueberry Cheesecake.`,
		},
		geraniol: {
			name: `Geraniol`,
			description: `Geraniol is a fragrant terpene that inherited its name from the geranium flower, which also contains geraniol and has a similar aroma; a sweet rose scent with notes of citrus. Geraniol is the main compound present in rose oil. It’s also found in the cannabis plant as well as in citronella oil (from a species of lemongrass) and palmarosa oil (also derived from lemongrass). It is a component of the essential oils of lemon and geranium as well as numerous flowers, fruits, and vegetables. Geraniol is not as prominent as some of the more popular cannabis terpenes. However, it’s still well-known due to its subtle floral profile, which offers its signature sweet flavor to strains like Master Kush, Agent Orange and Black Cherry Soda. It also has an array of potential medicinal uses due to its antibacterial, antifungal, and anti-inflammatory properties.`,
		},
		ahumulene: {
			name: `α-Humulene`,
			description: `Humulene, usually describe woody and earthy with hints of spice, is an isomer of beta-caryophyllene and is sometimes known as alpha caryophyllene. It the primary terpene responsible for imparting a bitter flavour to beer. Humulene is known for it’s anti-inflammatory, antioxidant and antibacterial effects. It is found in strains including Girl Scout Cookies, Sour Diesel and Sherbet`,
		},
		dlimonene: {
			name: `Limonene`,
			description: `Limonene is also an abundant terpene found in cannabis. Its therapeutic benefits include its ability to reduce stress and improve mood. It also has antibacterial and antifungal properties, and early research has suggested that it plays a role in reducing the size of tumours. Also found in all citrus fruits, it’s not surprising that limonene is responsible for giving cannabis strains a lemon-scent. It is found in sativa dominant strains including Super Lemon Haze, Cinex, and ACDC.`,
		},
		linalool: {
			name: `Linalool`,
			description: `With sedative properties that promote relaxation, this terpene is also found in lavender, cinnamon, and coriander. Linalool has been successfully used to reduce anxiety, ease stress, and provide symptomatic relief to patients suffering from depression, arthritis, seizures, and insomnia. It is found in strains including Amnesia Haze, Zkittles, Do-Si-Dos and OG Shark.`,
		},
		myrcene: {
			name: `Myrcene`,
			description: `Myrcene is the most abundant terpene in cannabis and how much is present determines whether the strain will be Sativa or Indica. According to a study by Steep Hill Labs, if the myrcene in a plant is greater than 0.5% myrcene, it will be an indica strain. Myrcene is also commonly found in mangoes, hops, and thyme. It is known for its antibiotic, analgesic and anti-mutagenic properties. Its scent is earthy, fruity, musky, or clove-like. It is found in strains including OG Kush, Skywalker OG, Blue Dream and Tangie`,
		},
		ocimene: {
			name: `Ocimene`,
			description: `Ocimene is a prevalent terpene found in perfumes. It provides a woodsy, herbaceous aroma with hints of earth and citrus, but is most well-renowned for its sweetness. It is found in basil, pepper, mangoes and orchids. Ocimene has been identified as an anti-inflammatory. It is mostly found in sativa dominant strains including Green Crack and Jack Herer.`,
		},
		aterpineol: {
			name: `Terpineol`,
			description: `Terpineol can refer to any combination of four monoterpene alcohol isomers (the most common of which is α-terpineol) occurring naturally in over 150 plants, including cannabis. Terpineol is most frequently found in strains also containing high levels of pinene; however, due to pinene’s potent aroma, terpineol can be difficult to detect when the two occur simultaneously. It occurs naturally in lilacs, pine trees, lime blossoms, and eucalyptus sap. Terpineol is frequently used to create pleasant aromatic profiles in products like soap, lotion, and perfume, and it contributes to the distinctive, pine smoke-based aroma of lapsang souchong tea. Benefits include antibiotic, antioxidant, anti-inflammatory, antimalarial and sedative effects. Strains that are often high in terpineol include Jack Herer, GSK and OG Kush `,
		},
		terpinoline: {
			name: `Terpinolene`,
			description: `Terpinolene is one of the simplest terpene molecules with a sweet pine like aroma and a sweet citrus flavour. It is commercially extracted from plants including: sage, rosemary, nutmeg, juniper, citrus fruit, carrots and celery. It is used extensively in flavouring food and beverages, personal care items and air fresheners. It has anti-inflammatory, antioxidant and sedative effects. It is found in strains including XJ-13, Jack Herer and Ghost Train.`,
		},
		valencene: {
			name: `Valencene`,
			description: `Valencene is a sesquiterpene that gets its name from the place its most commonly found: Valencia oranges. Its citrusy, sweet aromas and flavors can be reminiscent of oranges, grapefruits, tangerines, and occasionally of fresh herbs or freshly cut wood. It has anti-inflammatory and insectifugal properties. The fragrant terpene is responsible for familiar citrus aromas frequently found in a wide variety of cannabis strains including Tangie and Agent Orange`,
		},
	};
	const terpsArray = [
		"myrcene",
		"apinene",
		"bcaryophyllene",
		"dlimonene",
		"valencene",
		"ahumulene",
		"linalool",
		"geraniol",
		"aterpineol",
		"terpinoline",
		"ocimene",
	];
	const moreInfo = useRef(null);
	const terp = useParams();
	let selectedTerp = null;
	if (terpeneList[terp.terpene]) {
		selectedTerp = terp.terpene;
	}
	const scrollToBottomOfMoreInfo = () => {
		window.scrollTo({
			behavior: "smooth",
			// Checking reference.current isn't falsy before grabbing .offsetTop
			top: moreInfo.current ? document.body.scrollHeight : undefined,
		});
	};
	useEffect(() => {
		if (selectedTerp) {
			scrollToBottomOfMoreInfo();
		}
	}, [selectedTerp]);

	return (
		<div className="TerpenesLearn">
			<h1>What Are Terpenes?</h1>
			<div className="TerpenesContent">
				<img className="TerpenesImg" src={TerpenesImg} alt="Terpene" />
				<div className="TerpenesLearnText">
					<p>
						Terpenes are the aromatic essential oils found in varying
						concentrations in the flowers, fruit, stems and leaves of all
						plants. Plants use terpenes to protect against herbivores and
						attract pollinators. In cannabis, terpenes are responsible for
						giving strain specific scent, flavour and contributing to the
						entourage effect. Terpenes powerfully affect the way cannabis reacts
						with our endocannabinoid system, so understanding them and how they
						function is important.
					</p>
					<p>
						Two cannabis plants could have the exact same cannabinoid profiles,
						but the terpene structure could be completely different – and that
						would result in two very different psychoactive experiences, i.e.
						Sativa and Indica.
					</p>
					<p>
						There are more than 20,000 known terpenes in nature, about 100 that
						are known to exist in cannabis and hemp and of these approximately
						20 that are commonly found and 11 which are usually found and are
						considered primary. Commercially, individual food grade terpenes are
						extracted from non cannabis plants for use in food, beverage and
						industrial production and are available for flavoring cannabis
						concentrates.
					</p>
				</div>
			</div>
			<div className="MoreInfo">
				<div className="TerpLearnButtons">
					{terpsArray.map((terpItem) => {
						return (
							<Link
								className="TerpLearnButtonLink"
								to={`/learn/terpenes/${terpItem}`}
							>
								<button className="TerpLearnButton">
									{terpeneList[terpItem]["name"]}
								</button>
							</Link>
						);
					})}
				</div>
				{selectedTerp && terpeneList[selectedTerp] ? (
					<div ref={moreInfo} className="MoreInfoOpened">
						<h1 className="specTerpName">{terpeneList[selectedTerp].name}</h1>
						<p className="specTerpText">
							{terpeneList[selectedTerp].description}
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
