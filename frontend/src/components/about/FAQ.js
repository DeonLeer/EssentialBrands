import React from "react";
import { Link } from 'react-router-dom'
import './FAQ.css'
export default function FAQ(props) {
	return (
		<div className="FAQ">
			<div className="LeftSide">
        <h1>{`Questions & Answers`}</h1>
      </div>
			<div className="RightSide">
				<h2>What is CBD?</h2>
				<p>
					CBD is short for cannabidiol. It’s a non-psychoactive extract from the
					cannabis plant. It is used to address anxiety, treat chronic pain,
					help sleep and much more. More can be learned <Link to='/learn/cbd'>here.</Link>
				</p>
				<h2>Will CBD get me high?</h2>
				<p>Unlike THC, the more well known cannaboid, CBD does not have psychoactive effects. Our CBD products sold in the USA contain less than 0.3% THC and are not mind-altering medications. </p>
				<h2>How much CBD should I take?</h2>
				<p>Like all other medication, it depends on the user. It is best to have consistent regimen, starting with low dosage and working your way up, however there are calculators that can be used to find the right dosage right away like <a href='https://dailycbd.com/en/cbd-dosage/'  target="_blank" rel="noopener noreferrer">this one.</a></p>
				<h2>What are terpenes?</h2>
				<p>
					Terpenes are aromatic compounds found in plants and fruit. They are
					used as flavors and fragrances in the food and cosmetic industries. In
					cannabis, terpenes have been found to alter the effects of THC and
					CBD, and it turns out that these are what determines the strain. More can be learned <Link to='/learn/terpenes'>here.</Link>
				</p>
				<h2>Are your products legal?</h2>
				<p>
					Yes, we only ship products that are legal in the customer's
					jurisdiction. This means that for our american customers, our products
					are limited to less than 0.3% THC, but for our Canadian customers we
					offer THC products.
				</p>
				<h2>What is the entourage effect?</h2>
				<p>The entourage effect is the synergy of different components of the cannabis plant affecting the overall experience. This is important to us because terpenes can be used to change the user experience of CBD or THC products.  More can be learned <Link to='/learn/entourage'>here.</Link> </p>
			</div>
		</div>
	);
}
