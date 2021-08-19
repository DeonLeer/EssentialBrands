import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Tooltip } from "@material-ui/core";
import "./Map.css";

// const LocationPin = ({ text }) => (
// 	<div className="pin" style={{ transform: "translate(-50%, -50%)" }}>
// 		<Icon icon={locationIcon} className="pin-icon" />
// 		<p className="pin-text">{text}</p>
// 	</div>
// );
const Map = ({ location }) => (
	<div className="map">
		<h2>{location.name}</h2>
		<h3>{location.address}</h3>
		<div className="google-map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyB1aN0WgAqzH2WhwFM9jhqCxsMz93wCp5Y" }}
				defaultCenter={location}
				defaultZoom={19}
			>
				<Tooltip title="Sydney Testing" {...location}>
					<>
					<LocationOnIcon style={{ transform: "translate(-50%, -100%)" }} />
					<p className="pin-text" style={{width: '100px', transform: "translate(-50%, -40%)"}}>{location.address}</p>
					</>
				</Tooltip>
			</GoogleMapReact>
		</div>
	</div>
);
export default Map;

// Terpene Lab LA

// 320 Wall Street Suite D

// Los Angeles, CA 90013

// Terpene Lab Miami

// 413 NW 27th St,

// Miami, FL 33127
