import React, { useState } from 'react';
function Iqac(){
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
                <h1 className='bg-indigo-500 text-slate-50 py-3'>IQAC DETAILS</h1>
            </div>
            <div className='row w-screen'>
                <div className="col-3">
                    <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                            <button className="nav-link bg-slate-400 text-black mb-1" onClick={() => setShowButtons(!showButtons)} > {showButtons ? <>Hide Buttons</> : <>ClickHere</>}</button>
                            <br />
                            {showButtons ?
                                <>
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="AICTEMandatoryDisclosure-tab" data-toggle="pill" href="#AICTEMandatoryDisclosure" role="tab" aria-controls="AICTEMandatoryDisclosure" aria-selected="false">IQAC</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="AICTEApproval-tab" data-toggle="pill" href="#AICTEApproval" role="tab" aria-controls="AICTEApproval" aria-selected="false">IQACCommittee</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="Undertaking-tab" data-toggle="pill" href="#Undertaking" role="tab" aria-controls="Undertaking" aria-selected="false">Templates</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="AICTEEOAS-tab" data-toggle="pill" href="#AICTEEOAS" role="tab" aria-controls="AICTEEOAS" aria-selected="false">AQAR Reports</a>
                                </>
                                : <></>}
                        </div>
                    </div>
                </div>

                <div className="flex left-navcontent">
                    <div className='col'>
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="AICTEMandatoryDisclosure" role="tabpanel" aria-labelledby="AICTEMandatoryDisclosure-tab">
                            <div className=' text-lg text-justify pr-3 pt-3'>
                                <h1 className='text-start py-5 text-xl text-neutral-900 align-text-top'>IQAC Overview</h1>
                                
                                <p className=''>IQAC is a part of the institution’s system and work towards realization of the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions.</p>
                            
                            </div>
                        </div>
                        <div className="tab-pane fade mt-5" id="AICTEApproval" role="tabpanel" aria-labelledby="AICTEApproval-tab">
                            <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={showButtons ? 800 : 1000} height={400}>
                            </embed>
                        </div>
                        <div className="tab-pane fade mt-5" id="Undertaking" role="tabpanel" aria-labelledby="Undertaking-tab">
                            <embed src="/src/assets/saturatoryData/BCE1644564782435.pdf" width={showButtons ? 800 : 1000} height={400}>
                            </embed>
                        </div>
                        <div className="tab-pane fade mt-3" id="AICTEEOAS" role="tabpanel" aria-labelledby="AICTEEOAS-tab">
                            <h1 className='text-start py-2 text-xl text-neutral-900'>AICTEEOA</h1>
                            <div className='flex '><p className='flex justify-center p-1 text-blue-500'>Extension of Approval EOA:</p>
                                <div className="relative flex justify-center items-center gap-3">
                                    <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
                                        <p className="px-4">Dropdown</p>
                                        <span className="border-l p-2 hover:bg-gray-100">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </span>
                                        <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded" id="top">
                                            <ul className="text-left border rounded">
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2022-2023</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2021-2022</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2020-2021</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2019-2020</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2018-2019</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2017-2018</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2016-2017</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2015-2016</li>
                                                <li href="#" onClick={(e) =>  setDocumentYear(e.target.innerText)} className="px-4 py-1 hover:bg-gray-100 border-b">2014-2015</li>
                                            </ul>
                                        </div>
                                    </button>
                                    </div>


</div>
                                    <br></br>
                                    {documentYear}

                                    {documentYear == "2022-2023" ?
                                        <>

                                            <embed src="/src/assets/saturatoryData/aicte(2022-2023).PDF" width={showButtons ? 800 : 1000} height={400}>
                                            </embed>
                                        </>
                                        : documentYear == "2021-2022" ?



                                            <embed src="/src/assets/saturatoryData/aicte(2021-2022).PDF" width={showButtons ? 800 : 1000} height={400}>
                                            </embed>

                                            : documentYear == "2020-2021" ?

                                                <embed src="/src/assets/saturatoryData/aicte(2020-2021).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                </embed>
                                                : documentYear == "2019-2020" ?

                                                    <embed src="/src/assets/saturatoryData/aicte(2019-2020).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                    </embed>
                                                    : documentYear == "2018-2019" ?

                                                        <embed src="/src/assets/saturatoryData/aicte(2018-2019).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                        </embed>
                                                        : documentYear == "2017-2018" ?

                                                            <embed src="/src/assets/saturatoryData/aicte(2017-2018).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                            </embed>
                                                            : documentYear == "2016-2017" ?

                                                            <embed src="/src/assets/saturatoryData/aicte(2016-2017).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                            </embed>
                                                            : documentYear == "2015-2016" ?

                                                            <embed src="/src/assets/saturatoryData/aicte(2015-1016).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                            </embed>
                                                            : documentYear == "2014-2015" ?

                                                            <embed src="/src/assets/saturatoryData/aicte(2014-2015).PDF" width={showButtons ? 800 : 1000} height={400}>
                                                            </embed>
                                                            : <></>}
                           

                        </div>
                    </div>
                </div>
                
            </div>
            </div>

        </div >)
}
export default Iqac