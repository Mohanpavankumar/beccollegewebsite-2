import { border } from '@chakra-ui/react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { nirfData } from '../../Data/SaturatoryData/nirfData';
import './page.css';

const Nirf = () => {
    return (
        <div className='d-flex justify-between  mt-4 mb-1 pl-10'>
            <div className=" border-slate-300 col-8 rounded-lg p-3 px-3 bg-slate-300">
                <h1 classname="">NIRF REPORTS</h1>
                <Tabs
                    defaultActiveKey={nirfData.deafultKey}
                    id="justify-tab-example"
                    className="nirfPage-tabs"
                >
                    {nirfData.content.map(x => <Tab key={x.key} eventKey={x.key} title={x.tabTitle} className="nirf-tab-content">
                        <a href={x.link} target='_blank' rel='noopener noreferrer'>
                            {x.contentTitle1}</a>
                            <div className=" flex col-12 px-0">
                            <a href={x.link2} target='_blank' rel='noopener noreferrer'>
                            {x.contentTitle2}
                        </a>
                        </div>
                        
                    </Tab>)}
                </Tabs>
            </div>
            <div className="col-4 rounded-lg bg-slate-300 text-justify pr-0.5 mx-6">
                <img  className=" w-80 h-40 ml-3 mt-2 rounded-lg"src="/src/assets/saturatoryData/nirf.jpg"></img>
                <div className='px-20 text-justify py-2'>
                    <p>The National Institutional Ranking Framework (NIRF) was approvedby the MHRD and launched by Honourable Minister of Human Resource Development on 29th September 2015.</p>
                </div>
            </div>
        </div >
    );
}

export default Nirf;