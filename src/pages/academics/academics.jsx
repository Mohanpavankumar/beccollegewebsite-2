import academics from "/src/assets/academics/academics.png"

export default function overview(){
    return(
        <>
        <p className="text-xl ml-5 p-10 font-bold text-blue-800 underline">ACADEMIC OVERVIEW </p>
        <div className="w-11/12 z-50 h-[24rem] flex justify-center items-center">
            <div className="flex w-11/12 mx-5 h-[24rem] z-30 rounded-2xl items-center border-2 border-black border-5">
                <div className="mb-10"> 
                        <p className="text-md ml-7 font-normal p-3 w-full" >The  Bapatla Engineering College is a Collegiate research of Acharya Nagarjuna University in Andhra pradesh.Bapatla Engineering College aims to expand human knowledge and benefit society through research integrated with Education.<br></br><br></br>
                            Bapatla Engineering College offers 10 Undergraduate, 12 Postgraduate and 5 Diploma Programmes.Each academic block is well-equipped with smart classrooms and laboratories to enable enriched academic thought and provide students with exceptional learning opportunites across various disciplines.<br></br><br></br>
                            Our faculties are constantly engaged in various research projects as a way of keeping themselves up to date with latest trends within academic and industrial sectors
                        </p>
                </div>
                <div >
                    <img  src={academics} className="w-[100rem] h-[15rem] ml-24 hover:scale-110 transition duration-300 ease-in-out"></img>
                </div>
            </div>
        </div>
        </>
    )
}