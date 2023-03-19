import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { naacData } from '../../Data/SaturatoryData/naacData';
import { NestedList } from './shared/NestedList';
import './page.css';

const NaacCyclePage = () => {
    const [expand, setExpand] = useState({ "key": 0, "expand": false });

    return (
        <Tabs
            defaultActiveKey={naacData.defaultKey}
            id="justify-tab-example"
            className="nirfPage-tabs mt-4 mb-1">
            {naacData.content.map(x => <Tab key={x.key} eventKey={x.key} title={x.tabTitle}>
                <div className="naac-tab-content">
                    {x.tabsData?.map((y, index) => <div key={index} style={{ width: '18rem', background: "#CFEBFEAD", padding: "1rem 0.5rem 5rem 0.75rem", borderRadius: "0.5rem" }} className="d-flex flex-column">
                        <div key={index} className='d-flex my-auto c-pointer' onClick={() => setExpand({ key: index, expand: !expand.expand })}> {!(expand.key == index && expand.expand) ? <i class="fa-solid fa-greater-than fa-xs my-auto"></i> : <i class="fa-solid fa-chevron-down fa-xs my-auto"></i>} <div key={index} className='ml-2 my-auto text-danger fw-bolder'>{y.cardTitle}</div></div>
                        {expand.key == index && expand.expand && <NestedList nodes={y.cardData} />}
                    </div>)}
                </div>
            </Tab>)}
        </Tabs>
    );
}

export default NaacCyclePage;