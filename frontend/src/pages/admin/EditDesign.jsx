/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import AddDesign from "./AddDesign";
export default function EditDesign() {
	const { id } = useParams();

	return <AddDesign existing={true} id={id} />;
}
