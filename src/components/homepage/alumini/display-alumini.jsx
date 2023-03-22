import React from "react";
import { Card } from "react-bootstrap";
import { aluminiData } from "../../../Data/homepage/aluminiData";
import { Link } from "react-router-dom";
export const DisplayAlumini = ({ isMobile }) => {
	const [data, setData] = React.useState([]);

	const getRandomObject = (aData, num) => {
		const shuffled = [...aData].sort(() => 0.5 - Math.random());

		return shuffled.slice(0, num);
	};

	React.useEffect(() => {
		setData(getRandomObject(aluminiData, 4));
	}, [aluminiData]);

	return (
		<div className="flex flex-col">
			<div
				className={`flex justify-around md:flex-row flex-col`}
			>
				{!!data &&
					data.map((x) => (
						<Card style={{ width: "14rem" }}>
							<Card.Img
								variant="top"
								src={x.profileImage}
								style={{ height: "14rem" }}
							/>
							<Card.Body className="text-center">
								<Card.Title className="text-sm">{x.name}</Card.Title>
								<Card.Text className="text-sm">{x.description}</Card.Text>
								<Card.Subtitle className="text-sm p-3">{x.companyName}</Card.Subtitle>
							</Card.Body>
						</Card>
					))}
			</div>
			<Link
				className="text-primaryColor cursor-pointer p-1 ml-auto text-lg    "
				to={"/AllAlumni"}
			>
				Viewmore
			</Link>
		</div>
	);
};
