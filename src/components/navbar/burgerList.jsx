import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const leaf = { paddingLeft: "10px" };
const branch = { paddingLeft: "10px" };


const Leaf = ({ to, label, isDirectLeaf = false, handleClick }, idx) => {
	return (
		<Link key={`leaf-${idx}`} to={to} style={leaf} className={`d-flex my-2 ${isDirectLeaf && "font-bold"}`} onClick={handleClick}>
			{!isDirectLeaf && <div className={"burger-badge-subnav mt-2 mx-1"} />}
			{label}
		</Link>
	)
}

const Branch = ({ label, children, handleClick }, idx) => {
	const [expand, setExpand] = useState(false);
	return (
		<>
			<div
				className="d-flex c-pointer my-2"
				style={branch}
				onClick={() => setExpand(!expand)}
				key={`branch-${idx}`}>
				<span className="my-auto font-bold">{label}</span>
				<span className="my-auto">
					<FaAngleDown />
				</span>
			</div>
			{expand && children.map(x => <Leaf handleClick={handleClick} label={x.label} to={x.to} />)}
		</>
	)
}

export const BurgerList = ({ nodes, handleClick }) => {
	return (
		<div className="mt-5">
			{nodes.map(x =>
				x.children && x.children.length
					?
					<Branch label={x.label} children={x.children} handleClick={handleClick} /> :
					<Leaf label={x.label} to={x.to} isDirectLeaf={true} handleClick={handleClick} />
			)}
		</div>
	)
}