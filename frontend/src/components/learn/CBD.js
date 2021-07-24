import React from "react";
import "./CBD.css";
import CBDHeader from "../../images/CBD_Cannabis_Header.png";
import CBDChemistry from "../../images/CBD_Chemistry.png";
import CBDJars from "../../images/CBD_Spectrums.png";
export default function CBD(props) {
	return (
		<div className="CBDLearn">
			<div className="HeaderContainer">
				<img className="CBDHeader" src={CBDHeader} alt="cannabis plant" />
			</div>
			<h1>What Is CBD?</h1>
			<div className="CBDContent">
				<div className="MainContent">
					<div className="MainImageContainer">
						<img
							className="MainImage"
							src={CBDChemistry}
							alt="CBD Chemical Formation"
						/>
					</div>
					<div className="CBDLearnText">
						<p>
							Cannabidiol (CBD) is the main non psycho-active compound dominant
							in hemp. Though not psycho-active itself, it can alter the
							psychoactive effects of THC and it delivers a range of health
							benefits, such as relief from stress or altered perception of
							pain. At lower doses, CBD can be mildly stimulating, while higher
							amounts tend to bring sedative effects.
						</p>
						<p>
							CBD is extracted from Hemp using solvents including CO2, ethanol
							and butane. During extraction all the cannabinoids, terpenes, and
							flavonoids are stripped from the plant and the cannabinoids are
							selectively concentrated. The flavonoids are substantially lost
							and the terpenes may or may not be retained.
						</p>
						<p>
							These are subsequently re-integrated in the production of
							different CBD products. The cannabinoid and terpene profile
							determines if the extract is full-spectrum, broad-spectrum, or CBD
							isolate. Each term refers to the degree of CBD, THC and terpene
							content.
						</p>
					</div>
				</div>
				<h1>Which Type is Right for you?</h1>
				<div className="CBDImageContainer">
					<img className="CBDImage" src={CBDJars} alt="CBD Jars" />
				</div>
				<div className="Spectrums">
					<div className="Spectrum">
						<h2>Full-Spectrum CBD</h2>
						<div className="ImgAndText">
							<ul>
								<li>
									Contains all the phytochemicals naturally found in the plant
								</li>
								<li>CBD, trace cannabinoids and terpenes</li>
								<li>CBD distillate extracted from hemp</li>
								<li>THC limited to 0.3%</li>
								<li>Strongest Entourage Effect</li>
								<li>Higher Price than broad-spectrum and isolate</li>
							</ul>
						</div>
						<p>
							<h3>Best For those:</h3>who want to benefit from the trace amounts of THC in their extracts, and those with more severe symptoms that CBD isolate and broad-spectrum products fail to help
						</p>
					</div>
					<div className="Spectrum">
						<h2>Broad-Spectrum CBD</h2>
						<div className="ImgAndText">
							<ul>
								<li>
									Contains cannabidiol and terpenes except some is selectively
									removed after extraction
								</li>
								<li>Delivers the Entourage Effect, but without THC</li>
								<li>Cheaper than full-spectrum, more expensive than isolate</li>
								<li>
									Extracted from hemp strains selected for low THC content
								</li>
								<li>THC limited to 0.3%</li>
							</ul>
						</div>
						<p>
							<h3>Best For those:</h3>with conditions that isolate alone does not help and who are sensitive to or not wishing to take any THC
						</p>
					</div>
					<div className="Spectrum">
						<h2>CBD Isolate</h2>
						<div className="ImgAndText">
							<ul>
								<li>Purest form of CBD</li>
								<li>Usually +99.5% CBD</li>
								<li>Pale yellow crystal or powder</li>
								<li>No entourage effect</li>
								<li>0% THC</li>
								<li>Cheaper than broad-spectrum and full-spectrum</li>
							</ul>
						</div>
						<p>
							<h3>Best For those:</h3> who are sensitive to THC or other cannabinoids, or reluctant to use other cannabinoids
						</p>
					</div>
				</div>
				<div className="ProsConsContainer">
					<div className="ProsCons">
						<div className="Pros">
							<h2>Pros</h2>
							<ul>
								<li>Offers full benefits of the Entourage Effect</li>
								<li>Least processed form of CBD</li>
								<li>Contains cannabinoids, terpenes and flavonoids</li>
							</ul>
						</div>
						<div className="Cons">
							<h2>Cons</h2>
							<ul>
								<li>Contains small amounts of THC</li>
							</ul>
						</div>
					</div>
					<div className="ProsCons">
						<div className="Pros">
							<h2>Pros</h2>
							<ul>
								<li> Offers the full benefits of the entourage effect</li>
								<li>Less processed than isolate</li>
								<li>No risk of psychoactive effects</li>
							</ul>
						</div>
						<div className="Cons">
							<h2>Cons</h2>
							<ul>
								<li>Less Researched</li>
								<li>Less availability</li>
							</ul>
						</div>
					</div>
					<div className="ProsCons">
						<div className="Pros">
							<h2>Pros</h2>{" "}
							<ul>
								<li>Purest form of CBD</li>
								<li>Highly Versatile</li>
								<li>Oderless and flavorless</li>
							</ul>
						</div>
						<div className="Cons">
							<h2>Cons</h2>{" "}
							<ul>
								<li>No Entourage Effect benefits</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
