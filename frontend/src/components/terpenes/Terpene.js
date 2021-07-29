import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import terpBottle from "../../images/terpxpress.png";
import { useHistory } from "react-router-dom";
import "./Terpene.css";

const terps = [
	"myrcene",
	"apinene",
	"bcaryophyllene",
	"dlimonene",
	"bpinene",
	"valencene",
	"ahumulene",
	"linalool",
	"abisabolol",
	"aterpineol",
	"terpinoline",
	"ocimene",
	"others",
];
const realTerps = [
	"Myrcene",
	"α-Pinene",
	"β-Caryophyllene",
	"D-Limonene",
	"β-Pinene",
	"Valencene",
	"α-Humulene",
	"Linalool",
	"α-Bisabolol",
	"α-Terpineol",
	"Terpinoline",
	"Ocimene",
	"Others",
];
const colors = [
	"#B96354",
	"#BC605D",
	"#B5617A",
	"#9E6B94",
	"#7778A2",
	"#4682A0",
	"#0E898F",
	"#198B72",
	"#458952",
	"#6A8436",
	"#8C7B28",
	"#A96E30",
	"#BC6249",
];

export default function Terpene(props) {
	let history = useHistory();

  const [size, setSize] = useState('fiveg');

  const [amount, setAmount] = useState(0)

	const [isShown, setIsShown] = useState(false);

	const [selected, setSelected] = useState(undefined);

	const pieChartData = function (terpene) {
		let tempData = [];
		let i = 0;
		for (let terp of terps) {
			if (terpene[terp] > 0) {
				tempData.push({
					name: terp,
					title: realTerps[terps.indexOf(terp)],
					value: terpene[terp],
					color: colors[i],
				});
			}
			i++;
		}
		return tempData;
	};
	return (
		<div className="terpenes">
			<div
				className="graphics"
				onMouseEnter={() => setIsShown(true)}
				onMouseLeave={() => setIsShown(false)}
			>
				{isShown ? (
					<PieChart
						data={pieChartData(props.terpene)}
						className="pie-chart"
						label={({ dataEntry }) => `${dataEntry.name}\n ${dataEntry.value}%`}
						labelStyle={(index) => ({
							fontSize: "3.5px",
							fontFamily: "sans-serif",
						})}
						labelPosition={116}
						radius={22}
						animate
						viewBoxSize={[100, 75]}
						center={[50, 40]}
						segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
						segmentsShift={(index) => (index === selected ? 2 : 0)}
						onMouseOver={(_, index) => {
							setSelected(index);
						}}
						onMouseOut={() => {
							setSelected(undefined);
						}}
						onClick={(event, index) => {
							history.push(
								`/learn/terpenes/${pieChartData(props.terpene)[index].name}`,
							);
						}}
					/>
				) : (
					<div style={{ height: "100%" }}>
						<img className="terpene-bottle" src={terpBottle} alt="bottle" />
						<div className="image-text">{props.terpene.name}</div>
					</div>
				)}
			</div>
			<div className="text-under-graphics">
        <button className="leaflyButton">
          <a
						href={props.terpene.link}
						style={{ textDecoration: "none", color: "black" }}
						rel="noopener noreferrer"
						target="_blank">
            Read More on Leafly
          </a>
        </button>
				<div className="name-and-price">
					<p className="terpene-name">{props.terpene.name}</p>

					<p className="terpene-price">${props.terpene[size]} per</p>
          <select id="size" name="size" onChange={(event)=>setSize(event.target.value)}>
            <option value='fiveg'>Five Grams</option>
            <option value='twentyg'>Twenty Grams</option>
            <option value='fiftyg'>Fifty Grams</option>
            <option value='hundredg'>One Hundred Grams</option>
            <option value='fivehundg'>Five Hundred Grams</option>
            <option value='thousandg'>One Thousand Grams</option>
          </select>
          <div className="addTerpToCart">
          <div className="TARButtons">
            <button
              className="TARButton"
              onClick={()=>{(amount>0) ? setAmount(amount-1) : setAmount(amount)}}
            >
            -</button>
            {amount}
            <button
              className="TARButton"
              onClick={()=>setAmount(amount+1)}
            >+</button>
          </div>
          <button 
            className="terpeneButton" 
            onClick={()=>{
							let cartItemObj = props.terpene;
              cartItemObj.quantity = amount;
							cartItemObj.size = size;
							props.addProduct(`TRP${size}${props.terpene.id}`, cartItemObj)
						}}
          >
          Add to Cart
          </button>
        </div>
        </div>
			</div>
		</div>
	);
}
