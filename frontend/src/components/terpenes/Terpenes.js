import React, { useState } from "react";
import Terpene from "./Terpene";
import "./Terpenes.css";
export default function Terpenes(props) {
	const [state, setState] = useState({
		Indica: true,
		Sativa: true,
		Hybrid: true,
	});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: !state[e.target.name]
    })
  }

	return (
		<div className="TerpenesMain">
			<h1 className="TerpenesTitle">Our Terpenes</h1>
			<form className="type-checkboxes">
				<input
					type="checkbox"
					id="Sativa"
					name="Sativa"
					checked={state.Sativa}
          onChange={handleChange}
				/>
				<label for="Sativa">Sativa</label>
				<input
					type="checkbox"
					id="Indica"
					name="Indica"
					checked={state.Indica}
          onChange={handleChange}
				/>
				<label for="Indica">Indica</label>
				<input
					type="checkbox"
					id="Hybrid"
					name="Hybrid"
					checked={state.Hybrid}
          onChange={handleChange}
				/>
				<label for="Hybrid">Hybrid</label>
			</form>
			<div className="TerpenesList">
				{props.terpenes.terpenes.map((terpene) => {
					return state[terpene.type] ? (
						<div className="TerpeneCard">
							<Terpene terpene={terpene} addProduct={props.addProduct} />
						</div>
					) : null;
				})}
			</div>
		</div>
	);
}
