import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import {
	iqacDisplayData,
	iqacNavigation,
} from "../../Data/SaturatoryData/RtiData";

const RtiPage = (props) => {

	return (
		<div className="flex  justify-center flex-col py-3  mt-2">
			<div className="text-center  py-3 w-screen">
				<h1 className="bg-indigo-500 text-slate-50 py-3">RTI ACT DETAILS</h1>
			</div>
			<Tab.Container id="tabs-ipcpage" defaultActiveKey="1">
				<Row className="mt-6 px-4 w-auto">
					<Col sm={8}>
						{iqacDisplayData.map((x) => (
							<Tab.Content style={{ background: "#efefef" }}>
								<Tab.Pane eventKey={x.key}>{x.DisplayComponent}</Tab.Pane>
							</Tab.Content>
						))}
					</Col>
					<Col sm={4}>
						<Nav variant="pills" className="flex-column">
							{iqacNavigation.map((x) => (
								<Nav.Item className="h-25">
									<Nav.Link eventKey={x.key}>{x.title}</Nav.Link>
								</Nav.Item>
							))}
						</Nav>
					</Col>
				</Row>
			</Tab.Container>
		</div>
	);
};


export default RtiPage;
