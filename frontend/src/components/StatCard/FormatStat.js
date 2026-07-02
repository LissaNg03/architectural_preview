/** @format */

import React from "react";

function FormatStat(number) {
	if (number >= 1000000000) {
		return Math.floor(number / 1000000000).toFixed(0) + "B+";
	}

	if (number >= 1000000) {
		return Math.floor(number / 1000000).toFixed(0) + "M+";
	}

	if (number >= 1000) {
		return Math.floor(number / 1000).toFixed(0) + "K+";
	}

	if (number < 1000) {
		return number;
	}
}

export default FormatStat;
