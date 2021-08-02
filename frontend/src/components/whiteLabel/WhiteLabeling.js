import React from "react";
import { Link } from 'react-router-dom'
import image1 from "../../images/whitelabeling/whitelabel1.jpg";
import image2 from "../../images/whitelabeling/whitelabel2.jpg";
import "./WhiteLabeling.css";

export default function WhiteLabeling(props) {
	return (
		<div className="WhiteLabeling">
			<h1>What is White Labeling?</h1>
      <button className="WLButton"><Link to="/whitelabeling/whatwedo" >What We Can Do For You</Link></button>
			<div className="WhiteLabelContent">
				<div className="text-image">
					{" "}
					<img className="WLImage1" src={image1} alt="wl" />
					<div className="text-box">
						<p>
							White labeling is a common business practice that involves one
							company agreeing to manufacture and/or package a product that is
							then sold and marketed under another company’s brand. This is
							usually done in exchange for a flat fee or percentage of product
							sales depending on the terms of the agreement. Usually, companies
							look to white labeling services if they don’t have the necessary
							knowledge and or infrastructure to procure the ingredients,
							hardware and packaging, create formulations, manufacture the
							product or provide fulfilment themselves or if it is not
							economical to do so.{" "}
						</p>
						<p>
							White labelling is becoming a common practice in the cannabis
							business as production of a consumer legal product involves
							several critical steps each of which carries a level of
							sophistication typically unavailable to small companies.
						</p>
						<p>
							Value-added consumer packaged goods are taking on an increasingly
							large role in the cannabis industry. These include products such
							as vape cartridges, producing or securing extracts like isolates
							and distillates, ingestibles like CBD tinctures and caplets,
							topicals like oils, lotions, creams and salves, and edibles like
							infused chocolate and candies.{" "}
						</p>
						<p>
							Many cannabis brands want diversified product offerings to
							capitalize on the latest cannabis consumer trends; however, the
							processing labs and manufacturing facilities required to make
							these products are massive investments.
						</p>
					</div>
				</div>
				<div className="text-image">
					<div className="text-box">
						<p>
							Companies without ample resources take a huge risk by investing in
							vertical integration, as operational costs can easily become out
							of control. In addition to the time and cost required to acquire
							the space, building, equipment and licenses, companies also have
							to train and pay specialized staff while paying ongoing
							maintenance costs. Outsourcing manufacturing to a white labeler
							allows a cannabis company to expand its product offerings and
							establish its brand without the financial risk that comes with
							vertically integrating.
						</p>
						<p>
							In the cannabis industry, companies have constant need to try out
							new and innovative products. However, not every product catches on
							with consumers. White labeling allows companies to take a chance
							on new cannabis product categories with the option to make changes
							on the fly without drastically altering their operations.
						</p>
						<p>
							White labeling is also an attractive option for retailers who are
							looking to build their brands through their product offerings.
							This type of white labeling has long been common in non-cannabis
							retail spaces with major retailers like Walmart (NYSE:WMT),
							PetSmart and Save-on-Foods selling white-label brands like Great
							Value, Great Choice and Western Family respectively. Likewise,
							cannabis retailers often have their own store-branded merchandise.{" "}
						</p>
						<p>
							This is particularly the case for CBD products in the USA and
							cannabis products in general in the Canadian and Mexican markets
							where recent legalization or descheduling has created significant
							market opportunity.
						</p>{" "}
					</div>

					<img src={image2} alt="wl" />
				</div>
			</div>
		</div>
	);
}
