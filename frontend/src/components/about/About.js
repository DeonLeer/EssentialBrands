import React from "react";
import image1 from "../../images/aboutUs/1.jpg";
import image2 from "../../images/aboutUs/2.jpg";
import image3 from "../../images/aboutUs/3.jpg";
import "./About.css";

export default function About(props) {
	return (
		<div className="AboutUs">
			<h1 style={{ width: "100%" }}>About Us</h1>

			<img src={image2} alt="product order" className="image" />
			<p className="AboutUsText">
				Essential Brands International Corp is a multi level innovator currently
				servicing the US and Canadian federally legal cannabis markets through
				branded cannabis products, plant derived organic terpenes, custom
				designed and manufactured hardware and packaging, white label production
				and high level technical, marketing and operations consulting. We are
				located in Los Angeles California, Miami Florida, Vancouver Canada and
				will soon be servicing the Mexican markets through facilities near
				Tijuana MX.
			</p>

			{props.width >= 830 ? (
				<>
					<p className="AboutUsText">
						Our founders have a long history in the cannabis industry as
						innovators, operators and technical consultants. The company has
						developed in-house CBD brands “Forbidden Garden”, “Pure Organtic”
						and Pawsitive, plant derived organic terpenes “Terpene Express”, and
						custom designed vape cartridge and packaging available through our
						in-house brand “High Profile” or under private label. We have
						blending, manufacturing and packaging facilities in Los Angeles and
						are establishing facilities in Vancouver Canada and Tijuana Mexico.
					</p>
					<img src={image3} alt="product order" className="image" />
				</>
			) : (
				<>
					{" "}
					<img src={image3} alt="product order" className="image" />
					<p className="AboutUsText">
						Our founders have a long history in the cannabis industry as
						innovators, operators and technical consultants. The company has
						developed in-house CBD brands “Forbidden Garden”, “Pure Organtic”
						and Pawsitive, plant derived organic terpenes “Terpene Express”, and
						custom designed vape cartridge and packaging available through our
						in-house brand “High Profile” or under private label. We have
						blending, manufacturing and packaging facilities in Los Angeles and
						are establishing facilities in Vancouver Canada and Tijuana Mexico.
					</p>
				</>
			)}

			<img src={image1} alt="product order" className="image" />
			<p className="AboutUsText">
				The company has established relationships offshore for the manufacturing
				of high quality, reliable vape hardware and custom packaging. This
				service is also available through our White Labeling operation which can
				take consumer cannabis products through formulation, procurement of
				cannabis distillates, procurement of Sephora quality base cosmetics and
				essential oils, custom blending and mixing, filling, packaging,
				labelling and fulfilment. Our team delivers deep market know how with
				over 100 years of top level academic and practical vertically integrated
				technical, operational, marketing, sales and management experience
				across all levels of the cannabis space.{" "}
			</p>
		</div>
	);
}
