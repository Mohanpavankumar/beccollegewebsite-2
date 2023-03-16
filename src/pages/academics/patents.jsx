export default function Patents(){
    
    return(
        
    
         <div className='row w-screen'>
                <div className="col-3">
                    <div className="nav flex-column nav-pills text-sm" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className='nav flex-column nav-pills text-left py-10 justify-items-start p-4' id='tab' role="tablist">
                        
                            
                                    <a className="nav-link bg-slate-400 text-black mb-1" id="YEAR2019-tab" data-toggle="pill" href="#YEAR2019" role="tab" aria-controls="YEAR2019" aria-selected="false">PATENT FILED YEAR 2019</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="YEAR2020-tab" data-toggle="pill" href="#YEAR2020" role="tab" aria-controls="YEAR2020" aria-selected="false">PATENT FILED YEAR 2020</a>
                                    <a className="nav-link bg-slate-400 mb-1" id="YEAR2021-tab" data-toggle="pill" href="#YEAR2021" role="tab" aria-controls="YEAR2021" aria-selected="false">PATENT FILED YEAR 2021</a>
                        
                        </div>
                    </div>
                </div>
                <div className="flex left-navcontent">
                    <div className="tab-content" id="tabContent">
                        <div className="tab-pane fade show active " id="YEAR2019" role="tabpanel" aria-labelledby="YEAR2019-tab">
                            <div className='mt-4'>
                                <h1 className='text-start text-xl text-neutral-900'>PATENT 2019</h1>
                                <embed src="/src/assets/academics/patent2019.pdf" width={1100} height={500}>
                                </embed>
                            </div>
                        </div>
                        <div className="tab-pane fade mt-4" id="YEAR2020" role="tabpanel" aria-labelledby="YEAR2020-tab">
                        <h1 className='text-start text-xl text-neutral-900'>PATENT 2020</h1>
                            <embed src="/src/assets/academics/patent2020.pdf" width={1100} height={500}>
                            </embed>
                       </div>
                       <div className="tab-pane fade mt-4" id="YEAR2021" role="tabpanel" aria-labelledby="YEAR2021-tab">
                        <h1 className='text-start text-xl text-neutral-900'>PATENT 2021</h1>
                            <embed src="/src/assets/academics/patent2021.pdf" width={1100} height={500}>
                            </embed>
                       </div>
                    </div>
                </div>
         </div>
        
    )
}


