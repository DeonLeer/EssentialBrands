import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator(props) {
	const calculate = function (num, size, terpene, cut, potency) {
		let volume = num * size;
		if (volume === 0) {
			return { error: "Please Enter a Volume and number of Cartridges!" };
		} else if (terpene > cut) {
			return {
				error:
					"Cut percentage must be greater than or equal to terpene percentage.",
			};
		} else if (terpene > 100 || cut > 100 || potency > 100) {
			return {
				error: "None of your percentages can be over 100%",
			};
		} else {
			const cartPotency = potency * (1 - Number(cut) * 0.01);
			const distVolume = volume * (1 - Number(cut) * 0.01);
			const distWeight = distVolume * 1.05;
			const terpVolume = volume * (terpene * 0.01);
			const terpWeight = terpVolume * 0.87;
			const ratio = distWeight / terpWeight;
			const liquiVolume = volume - distVolume - terpVolume;
			const liquiWeight = liquiVolume * 0.94;
			const weight = liquiWeight + terpWeight + distWeight;
			return {
				volume,
				cartPotency,
				distVolume,
				distWeight,
				terpVolume,
				terpWeight,
				ratio,
				liquiVolume,
				liquiWeight,
				weight,
			};
		}
	};

	const [numCartridges, setNumCartridges] = useState(0);
	const [sizeCartridges, setSizeCartridges] = useState(0);
	const [terpene, setTerpene] = useState(0);
	const [cut, setCut] = useState(0);
	const [potency, setPotency] = useState(100);
	const [results, setResults] = useState(
		calculate(numCartridges, sizeCartridges, terpene, cut, potency),
	);
	// const [error, setError] = useState(null)

	const handleChange = function (e, value) {
		switch (value) {
			case "numCartridges":
				setNumCartridges(e.target.value);
				break;
			case "sizeCartridges":
				setSizeCartridges(e.target.value);
				break;
			case "terpene":
				setTerpene(e.target.value);
				break;
			case "cut":
				setCut(e.target.value);
				break;
			case "potency":
				setPotency(e.target.value);
				break;
			default:
				return "error";
		}
	};

	useEffect(() => {
		setResults(calculate(numCartridges, sizeCartridges, terpene, cut, potency));
	}, [numCartridges, sizeCartridges, terpene, cut, potency]);

	return (
		<div className="MixCalculator">
			<h1 style={{ width: "100%" }}>Calculator</h1>
			<p style={{ width: "80%", margin: "2%" }}>
				Cannabis flower typically contains 2 – 5 percent terpenes and 15 – 20
				percent THC for THC dominant strains and 5 – 8 percent CBD for CBD
				dominant strains. The ratio of terpenes to THC varies from 1:10 to 1:3
				for THC dominant strains and the ratio of terpenes to CBD varies from
				1:4 to 1:1 for CBD dominant strains. The process of producing
				distillates and isolate selectively removes almost all other plant
				material principally fats, waxes, chlorophyll and terpenes. When
				formulating products made from THC or CBD distillates or isolate it is
				usual to re-profile the missing terpenes to create the flavour profile
				of a desired strain. This is achieved by blending terpenes with cannabis
				concentrates. The ratio of terpenes to concentrate is flexible to
				achieve the desired flavour intensity. As an example, for CBD vape
				cartridge, a ratio of 1:4 terpene to CBD is a sweet spot for a balance
				of flavour and intensity close to the native plant.
			</p>
			<div className="Calculator">
				<div className="Inputs">
					<div className="InputBox">
						{" "}
						<label for="numCartridges">Number of catridges desired:</label>
						<div className="inputNumber">
							<button
								onClick={() => {
									numCartridges > 0
										? setNumCartridges(Number(numCartridges) - 1)
										: setNumCartridges(0);
								}}
								className="inputButton"
							>
								-
							</button>

							<input
								className="integerInput"
								value={Number(numCartridges).toFixed()}
								name="numCartridges"
								id="numCartridges"
								type="number"
								step="1"
								min={0}
								max={1000}
								onChange={(e) => handleChange(e, "numCartridges")}
							/>

							<button
								onClick={() => setNumCartridges(Number(numCartridges) + 1)}
								className="inputButton"
							>
								+
							</button>
						</div>
					</div>
					<div className="InputBox">
						<label for="sizeCartridges">Size of cartridges (mL):</label>
						<div className="inputNumber">
							<button
								onClick={() => {
									sizeCartridges > 0
										? setSizeCartridges(Number(sizeCartridges) - 0.1)
										: setSizeCartridges(0);
								}}
								className="inputButton"
							>
								-
							</button>

							<input
								className="decimalInput"
								value={Number(sizeCartridges).toFixed(1)}
								name="sizeCartridges"
								id="sizeCartridges"
								type="number"
								step="0.1"
								min={0}
								max={10}
								onChange={(e) => handleChange(e, "sizeCartridges")}
							/>

							<button
								onClick={() => setSizeCartridges(Number(sizeCartridges) + 0.1)}
								className="inputButton"
							>
								+
							</button>
						</div>
					</div>
					<div className="InputBox">
						{" "}
						<label for="terpene">
							Desired Amount of Terpene in final product:
						</label>
						<div className="inputNumber">
							<button
								onClick={() => {
									terpene > 0 ? setTerpene(Number(terpene) - 1) : setTerpene(0);
								}}
								className="inputButton"
							>
								-
							</button>

							<input
								className="integerInput"
								value={Number(terpene).toFixed()}
								name="terpene"
								id="terpene"
								type="number"
								step="1"
								min={0}
								max={1000}
								onChange={(e) => handleChange(e, "terpene")}
							/>
							<span>%</span>

							<button
								onClick={() => {
									terpene < 99
										? setTerpene(Number(terpene) + 1)
										: setTerpene(99);
								}}
								className="inputButton"
							>
								+
							</button>
						</div>
					</div>
					<div className="InputBox">
						{" "}
						<label for="cut">Total desired cut:</label>
						<div className="inputNumber">
							<button
								onClick={() => {
									cut > 1 ? setCut(Number(cut) - 1) : setCut(0);
								}}
								className="inputButton"
							>
								-
							</button>
							<input
								className="integerInput"
								value={Number(cut).toFixed()}
								name="cut"
								id="cut"
								type="number"
								step="1"
								min={0}
								max={1000}
								onChange={(e) => handleChange(e, "cut")}
							/>
							<span>%</span>
							<button
								onClick={() => {
									cut < 99 ? setCut(Number(cut) + 1) : setCut(99);
								}}
								className="inputButton"
							>
								+
							</button>
						</div>
					</div>
					<div className="InputBox">
						{" "}
						<label for="cut">Distillate Potency {`(100% if unknown)`}:</label>
						<div className="inputNumber">
							<button
								onClick={() => {
									potency > 1 ? setPotency(Number(potency) - 1) : setPotency(0);
								}}
								className="inputButton"
							>
								-
							</button>
							<input
								className="integerInput"
								value={Number(potency).toFixed()}
								name="potency"
								id="potency"
								type="number"
								step="1"
								min={0}
								max={1000}
								onChange={(e) => handleChange(e, "potency")}
							/>
							<span>%</span>
							<button
								onClick={() => {
									potency < 100
										? setPotency(Number(potency) + 1)
										: setPotency(100);
								}}
								className="inputButton"
							>
								+
							</button>
						</div>
					</div>
				</div>
				<div className="Results">
					{results.error ? (
						<>
							<h6 style={{ margin: "0" }}>{results.error}</h6>
						</>
					) : (
						<>
							<h6 style={{ margin: "0" }}>
								Total Volume: {Number(results.volume).toFixed(2)}mL
							</h6>
							<h6 style={{ margin: "0" }}>
								Cart Potency: {Number(results.cartPotency).toFixed(1)}%
							</h6>
							<h6 style={{ margin: "0" }}>
								Distillate Volume Required:{" "}
								{Number(results.distVolume).toFixed(2)}mL
							</h6>
							<h6 style={{ margin: "0" }}>
								Distillate Weight: {Number(results.distWeight).toFixed(2)}g
							</h6>
							<h6 style={{ margin: "0" }}>
								Terpene Volume Required: {Number(results.terpVolume).toFixed(2)}
								mL
							</h6>
							<h6 style={{ margin: "0" }}>
								Terpene Weight: {Number(results.terpWeight).toFixed(2)}g
							</h6>
							<h6 style={{ margin: "0" }}>
								Dist to Terp Ratio: 1:{Number(results.ratio).toFixed(1)}
							</h6>
							<h6 style={{ margin: "0" }}>
								Liquifier Volume Required:{" "}
								{Number(results.liquiVolume).toFixed(2)}mL
							</h6>
							<h6 style={{ margin: "0" }}>
								Liquifier Weight: {Number(results.liquiWeight).toFixed(2)}g
							</h6>
							<h6 style={{ margin: "0" }}>
								Total Weight: {Number(results.weight).toFixed(2)}g
							</h6>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
