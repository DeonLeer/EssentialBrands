import React from "react";
import './MoreTerpenes.css'

const moreTerpenes = {
	ACDC: "Hybrid",
	"Ace of Spades": "Indica",
	"Animal Cookies": "Hybrid",
	"Banana Kush": "Hybrid",
	"Berry Gelato": "Hybrid",
	Biscotti: "Hybrid",
	"Blackberry Kush": "Indica",
	"Blue Dream": "Hybrid",
	"Blueberry Haze": "Hybrid",
	BubbleGum: "Hybrid",
	"Cali Blood Orange": "Hybrid",
	"Cheesecake Delight": "Hybrid",
	"Citrus Kush": "Hybrid",
	Clementine: "Sativa",
	"Cotton Candy": "Hybrid",
	"Diablo OG": "Hybrid",
	"Dogg Pound OG": "Hybrid",
	"Do-Si-Dos": "Indica",
	"Dragon Fruit": "Hybrid",
	"Durban Poison": "Sativa",
	"Fire OG": "Hybrid",
	"Forbidden Fruit": "Indica",
	G13: "Indica",
	Gelato: "Hybrid",
	"Ghost Lime OG": "Hybrid",
	GSC: "Hybrid",
	"GMO Cookies": "Hybrid",
	"Gorilla Glue #4": "Hybrid",
	"Grand Daddy Purple": "Indica",
	"Grape Ape": "Indica",
	"Grapefruit kush": "Hybrid",
	"Green Crack": "Sativa",
	Gushers: "Hybrid",
	"Hippie Crippler": "Hybrid",
	"Icecream Cake": "Indica",
	"Jack Herer": "Sativa",
	"Juicy Fruitz": "Hybrid",
	"King Louie XIII": "Indica",
	"Lemon Cake": "Sativa",
	"Lemon Haze": "Sativa",
	"Key Lime Pie": "Hybrid",
	Limoncello: "Hybrid",
	"London Pound Cake": "Hybrid",
	"Lost Coast OG": "Hybrid",
	"Mango Haze": "Sativa",
	"Mango Kush": "Hybrid",
	"Master Kush": "Indica",
	Mimosa: "Hybrid",
	"New York City Diesel": "Hybrid",
	"Obama Kush": "Indica",
	"OG Kush": "Hybrid",
	"Orange Romulan": "Indica",
	"Passion Fruit": "Sativa",
	"Pineapple Express": "Hybrid",
	"Pink Grapefruit": "Hybrid",
	"Pink Pomegranate": "Hybrid",
	"Platinum OG": "Indica",
	"Purple Haze": "Sativa",
	"Purple Punch": "Indica",
	"Rainbow Sherbet": "Hybrid",
	"Redbull OG": "Hybrid",
	Runtz: "Hybrid",
	"SFV OG": "Hybrid",
	Sherblato: "Hybrid",
	"Skunk OG": "Hybrid",
	"Skywalker OG": "Hybrid",
	"Sour Diesel": "Sativa",
	"Sour Lemon OG": "Hybrid",
	"Strawberry Cough": "Sativa",
	Strawnana: "Hybrid",
	"Sunset Sherbet": "Hybrid",
	"Super Lemon Haze": "Sativa",
	"Super Silver Haze": "Sativa",
	"Tangerine Dream": "Hybrid",
	"Tangi Berry": "Sativa",
	"Pina Colada": "Hybrid",
	"Thin Mint": "Hybrid",
	Trainwreck: "Hybrid",
	Watermelon: "Indica",
	"Wedding Cake": "Hybrid",
	"White Runtz": "Hybrid",
	"XJ-13": "Hybrid",
	"Zens OG": "Hybrid",
	Zkittlez: "Indica",
};

export default function MoreTerpenes(props) {
	return (
		<div className="MoreTerpenes">
			<h1>More Terpenes</h1>
			<p>
				This is a list of some of the other terpene flavors that we can blend.
				Please contact us if you would like any of the following or any other
				known blends made.
			</p>
			<table className="terpeneTable">
				<tr className="tableHead">
					<th>NAME</th>
					<th>TYPE</th>
				</tr>
				{Object.keys(moreTerpenes).map((terpene) => {
					return (
						<tr>
							<td>{terpene}</td>
							<td>{moreTerpenes[terpene]}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}
