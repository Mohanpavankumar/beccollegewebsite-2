import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import {
	committeeDisplayData1,
	committeeNavigation,
} from "../../Data/SaturatoryData/committeeData";

const CommittePage = (props) => {
	return (
		<div className="flex items-center justify-center flex-col py-3  mt-2">
			<div className="text-center  py-3 w-screen">
				<h1 className="bg-indigo-500 text-slate-50 py-3">COMMITTEES</h1>
			</div>
			<Tab.Container id="tabs-ipcpage" defaultActiveKey="1">
				<Row className="mt-6 px-4 w-auto">
					<Col sm={4}>
						<Nav variant="pills" className="flex-column">
							{committeeNavigation.map((x) => (
								<Nav.Item className="h-25 pr-32">
									<Nav.Link eventKey={x.key}>{x.title}</Nav.Link>
								</Nav.Item>
							))}
						</Nav>
					</Col>
					<Col sm={8}>
						{committeeDisplayData1.map((x) => (
							<Tab.Content
								style={{
									background: "#efefef",
									width: "50vw",
									marginLeft: "2rem",
								}}
							>
								<Tab.Pane eventKey={x.key}>{x.DisplayComponent}</Tab.Pane>
							</Tab.Content>
						))}
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};

export default CommittePage;
