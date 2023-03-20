import { border } from '@chakra-ui/react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { nirfData } from '../../Data/SaturatoryData/nirfData';
import './page.css';

const Nirf = () => {
    return (
        <div className='d-flex justify-between  mt-4 mb-1 px-20'>
            <div className=" border-slate-400 rounded-lg p-3 px-3 bg-slate-400">
                <Tabs
                    defaultActiveKey={nirfData.deafultKey}
                    id="justify-tab-example"
                    className="nirfPage-tabs ml-2"
                >
                    {nirfData.content.map(x => <Tab key={x.key} eventKey={x.key} title={x.tabTitle} className="nirf-tab-content">
                        <a href={x.link} target='_blank' rel='noopener noreferrer'>
                            {x.contentTitle}
                        </a>
                    </Tab>)}
                </Tabs>
            </div>
            <div style={{ border: "1px solid red", padding: "1rem", margin:"1rem" }} >
                <img src="/src/assets/saturatoryData/nirf.jpg"></img>
            </div>
        </div >
    );
}

export default Nirf;