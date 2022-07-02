import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
//import Home from "./component/home.jsx";

const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four">{props.fourthNumber}</div>
			<div className="three">{props.thirdNumber}</div>
			<div className="two">{props.secondNumber}</div>
			<div className="one">{props.firstNumber}</div>
		</div>
	);
};

SimpleCounter.protoTypes = {
	fourthNumber: propTypes.number,
	thirdNumber: propTypes.number,
	secondNumber: propTypes.number,
	firstNumber: propTypes.number,
};
let counterTime = 0;
setInterval(() => {
	const four = Math.floor((counterTime / 1000) % 10);
	const three = Math.floor((counterTime / 100) % 10);
	const two = Math.floor((counterTime / 10) % 10);
	const one = Math.floor((counterTime / 1) % 10);

	counterTime++;

	ReactDOM.render(
		<SimpleCounter
			fourthNumber={four}
			thirdNumber={three}
			secondNumber={two}
			firstNumber={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
