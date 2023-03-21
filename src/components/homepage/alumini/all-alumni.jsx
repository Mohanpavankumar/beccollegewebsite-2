import React from "react";
import { Card } from "react-bootstrap";
// import { aluminiData } from "../../../Data/homepage/aluminiData";

let AllAlumni = (props) => {
	return (
		<div className="d-flex justify-around ">
			<Card style={{ width: "14rem" }}>
				<Card.Img
					variant="top"
					src={props.item.profileImage}
					style={{ height: "14rem" }}
				/>
				<Card.Body className="text-center ">
					<Card.Title>{x.name}</Card.Title>
					<Card.Text>{x.description}</Card.Text>
					<Card.Subtitle className="p-3">{x.companyName}</Card.Subtitle>
				</Card.Body>
			</Card>
		</div>
	);
};
export default AllAlumni;
