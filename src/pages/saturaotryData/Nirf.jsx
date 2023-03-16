import React, { useState } from 'react';
import NaacItems from "/src/components/saturatoryDataComponents/NaacItems.jsx"
import naacCycles from "/src/Data/saturatoryData/naacCycles.js"
function Nirf() {
    const [selectedValue, setSelectedValue] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const [documentYear, setDocumentYear] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [showDroupdown, setShowDroupdown] = React.useState(false)
    const onDropdownClick = () => setShowDroupdown(!showDroupdown)
    console.log(documentYear);
    return (
        <div className='flex items-center justify-center flex-col py-3 overflow-x-hidden'>
            <div className='text-center  py-3 w-screen'>
                <h1 className='bg-indigo-500 text-slate-50 py-3'>NIRF DETAILS</h1>
            </div>
            <div className='row w-screen'>
                <div className="col-3">
                    <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                        <h1 className='bg-indigo-500 text-slate-50 py-3'>NIRF Reports</h1>
                            <br />
                            {showButtons ?
                                <>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y22" role="tab" aria-controls="" aria-selected="false">2022</a>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y21" role="tab" aria-controls="" aria-selected="false">2021</a>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y20" role="tab" aria-controls="" aria-selected="false">2020</a>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y19" role="tab" aria-controls="" aria-selected="false">2019</a>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y18" role="tab" aria-controls="" aria-selected="false">2018</a>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="" data-toggle="pill" href="#y17" role="tab" aria-controls="" aria-selected="false">2017</a>
                                </>
                                : <></>}
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade mt-4 " id="y22" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2022
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="selfStudyReport-tab" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="DataVerification-tab" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>
                <div className="tab-pane fade mt-4 " id="y21" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2021
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="selfStudyReport-tab" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="DataVerification-tab" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>
                <div className="tab-pane fade mt-4 " id="y20" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2020
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="selfStudyReport-tab" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="DataVerification-tab" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>
                <div className="tab-pane fade mt-4 " id="y19" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2019
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>
                <div className="tab-pane fade mt-4 " id="y18" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2018
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>
                <div className="tab-pane fade mt-4 " id="y17" role="tabpanel" aria-labelledby="AICTEEOAS-tab">NIRF 2017
                        <div className='nav grid grid-cols-1 md:grid-cols-2 gap-4 nav-pills' id='tab' role="tablist">

                        <a className="nav-link bg-slate-400 text-black" id="selfStudyReport-tab" data-toggle="pill" href="" role="tab" aria-controls="selfStudyReport" >Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Engg</a><br/>
                        <a className="nav-link bg-slate-400" id="DataVerification-tab" data-toggle="pill" href="" role="tab" aria-controls="AICTEApproval" aria-selected="false">Full Report-MHRD, National Institutional Ranking Framework (NIRF)-Overall</a>
                        </div>
                     

                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="DataVerification-tab"></div>
                        <div className="tab-pane fade mt-3 " id="" role="tabpanel" aria-labelledby="selfStudyReport-tab"></div>
                </div>


</div>
                    
                
            </div>

        
    )
}

export default Nirf