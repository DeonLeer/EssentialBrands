import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator(props) {
	const [results, setResults] = useState(null);

	const [numCartridges, setNumCartridges] = useState(0);
	const [sizeCartridges, setSizeCartridges] = useState(0);
	const [ratio, setRatio] = useState(4);
	// const [error, setError] = useState(null)

	const handleChange = function (e, value) {
		switch (value) {
			case "numCartridges":
				setNumCartridges(e.target.value);
				break;
			case "sizeCartridges":
				setSizeCartridges(e.target.value);
				break;
			case "ratio":
				setRatio(e.target.value);
				break;
			default:
				return "error";
		}
	};
	const calculate = function (e) {
		e.preventDefault();
		let tempResults = {};
		tempResults.volumeTerpenes =
			(sizeCartridges * numCartridges * 0.7) / (Number(ratio) + 0.7);
		tempResults.volumeDistillate = (ratio * tempResults.volumeTerpenes) / 0.7;
		setResults(tempResults);
	};
	return (
		<div className="MixCalculator">
			<h1 style={{width: '100%'}}>Calculator</h1>
      <p style={{width: '40%', margin: '2%'}}>Cannabis flower typically contains 2 – 5 percent terpenes and 15 – 20 percent THC for THC dominant strains and 5 – 8 percent CBD for CBD dominant strains. The ratio of terpenes to THC varies from 1:10 to 1:3 for THC dominant strains and the ratio of terpenes to CBD varies from 1:4 to 1:1 for CBD dominant strains. The process of producing distillates and isolate selectively removes almost all other plant material principally fats, waxes, chlorophyll  and terpenes. When formulating products made from THC or CBD distillates or isolate it is usual to re-profile the missing terpenes to create the flavour profile of a desired strain. This is achieved by blending terpenes with cannabis concentrates. The ratio of terpenes to concentrate is flexible to achieve the desired flavour intensity. As an example, for CBD vape cartridge, a ratio of 1:4 terpene to CBD is a sweet spot for a balance of flavour and intensity close to the native plant.</p>
			<div className="Calculator">
				<div className="Inputs">
					<label for="numCartridges">Number of catridges desired:</label>
					<input
						name="numCartridges"
						id="numCartridges"
						type="number"
						step="1"
						inputmode="numeric"
						min={0}
						onChange={(e) => handleChange(e, "numCartridges")}
					/>
					<label for="sizeCartridges">Size of cartridges (mL):</label>
					<input
						name="sizeCartridges"
						id="sizeCartridges"
						type="number"
						step="0.1"
						inputmode="numeric"
						min={0}
						onChange={(e) => handleChange(e, "sizeCartridges")}
					/>
					<label for="ratio">Cannaboid to Terpene Ratio:</label>
					<span>
						{" "}
						<input
							name="ratio"
							id="ratio"
							type="number"
							step="0.1"
							inputmode="numeric"
							min={0}
							onChange={(e) => handleChange(e, "ratio")}
						/>
						:1
					</span>
					<button
						className="CalcButton"
						type="submit"
						onClick={(e) => calculate(e)}
					>
						Calculate
					</button>
				</div>
				{results ? (
					<div className="Results">
						<p>
							Required Terpenes: {(results.volumeTerpenes).toFixed(2)} mL/
							{(results.volumeTerpenes * 0.9).toFixed(2)} g
						</p>
						<p>
							Required Distillate: {(results.volumeDistillate).toFixed(2)} mL/
							{(results.volumeDistillate * 0.9).toFixed(2)} g
						</p>
					</div>
				) : null}
			</div>
		</div>
	);
}
