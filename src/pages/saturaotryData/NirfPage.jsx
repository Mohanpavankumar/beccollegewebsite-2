import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { nirfData } from '../../Data/SaturatoryData/nirfData';
import './page.css';

const Nirf = () => {
    return (
        <Tabs
            defaultActiveKey={nirfData.deafultKey}
            id="justify-tab-example"
            className="nirfPage-tabs mt-4 mb-1"
        >
            {nirfData.content.map(x => <Tab key={x.key} eventKey={x.key} title={x.tabTitle} className="nirf-tab-content">
                <a href={x.link} target='_blank' rel='noopener noreferrer'>
                    {x.contentTitle}
                </a>
            </Tab>)}
        </Tabs>
    );
}

export default Nirf;