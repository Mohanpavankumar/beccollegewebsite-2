import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const leaf = { paddingLeft: "40px" };
const branch = { paddingLeft: "10px" };

const Leaf = ({ to, label }, idx) => {
	return (
		<Link key={`leaf-${idx}`} to={to} style={leaf} className="d-flex">
			{label}
		</Link>
	);
};

const Branch = ({ label, children }, idx) => {
	const [expand, setExpand] = useState(false);
	const childList = children.map(Leaf);
	return (
		<>
			<div
				className="d-flex c-pointer"
				style={branch}
				onClick={() => setExpand(!expand)}
				key={`branch-${idx}`}
			>
				<span className="my-auto">
					{expand ? <FaAngleDown /> : <FaAngleRight />}
				</span>
				<span className="my-auto">{label}</span>
			</div>
			{expand && childList}
		</>
	);
};

export const BurgerList = ({ nodes }) => {
	return (
		<div className="mt-5">
			{nodes.filter((x) => x.children && x.children.length > 0).map(Branch)}
			{nodes.filter((x) => !x.children).map(Leaf)}

			{/* {console.log("nodes", nodes)} */}
		</div>
	);
};
