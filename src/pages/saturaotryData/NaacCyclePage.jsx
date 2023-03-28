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
                    {x.tabsData?.map((y, index) => <div id="naaclist-sroll" key={index} style={{ width: '18rem', background: "#CFEBFEAD", padding: "0.75rem", borderRadius: "0.5rem", height: "8rem", overflow: "auto" }} className="d-flex flex-column mx-4 my-2">
                        <div key={index} className='d-flex c-pointer' onClick={() => setExpand({ key: index, expand: !expand.expand })}> {!(expand.key == index && expand.expand) ? <i className="fa-solid fa-greater-than fa-xs my-auto"></i> : <i className="fa-solid fa-chevron-down fa-xs my-auto"></i>} <div key={index} className='ml-1 my-auto text-danger fw-bolder'>{y.cardTitle}</div></div>
                        {expand.key == index && expand.expand && <NestedList nodes={y.cardData} />}
                    </div>)}
                </div>
            </Tab>)}
        </Tabs>
    );
}

export default NaacCyclePage;