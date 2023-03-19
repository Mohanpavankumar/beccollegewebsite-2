import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { iqacDisplayData, iqacNavigation } from '../../Data/SaturatoryData/iqacData';


const IqacPage = (props) => {
    return (
        <Tab.Container id="tabs-ipcpage" defaultActiveKey="1">
            <Row className='mt-3 px-2 w-auto'>
                <Col sm={8}>
                    {iqacDisplayData.map(x =>
                        <Tab.Content style={{ background: "#efefef" }}>
                            <Tab.Pane eventKey={x.key}>
                                {x.DisplayComponent}
                            </Tab.Pane>
                        </Tab.Content>)}
                </Col>
                <Col sm={4}>
                    <Nav variant="pills" className="flex-column">
                        {iqacNavigation.map(x => <Nav.Item className='h-25'>
                            <Nav.Link eventKey={x.key}>{x.title}</Nav.Link>
                        </Nav.Item>)}
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default IqacPage