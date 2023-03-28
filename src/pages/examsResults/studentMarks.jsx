import React from 'react'
import { Button, Card, InputGroup } from 'react-bootstrap'
import ExamHeader from '../../components/examheader/examheader'
import Form from 'react-bootstrap/Form';
import { getStudentMarks, getStudentMarksByRegdNum } from '../../config/services';
import { useState } from 'react';
import ResultTable from './resultTable';
import ResGraph from '../../assets/resGraph.png'
import Chart from "react-apexcharts";
import { useEffect } from 'react';

const StudentMarks = () => {
    let [regdNum, setRegdNum] = useState("");
    let [data, setData] = useState({});
    let [overAllStudentsData, setOverAllStudentsData] = useState([]);
    let [showStudentData, setShowStudentData] = useState(false)
    let [graphDeptData, setGraphDeptData] = useState([])
    let [graphCollegeData, setGraphCollegeData] = useState([])
    let [error, setError] = useState("")
    let [marks, setMarks] = useState([])
    let [selectedSemester, setSelectedSemester] = useState(0)

    const hanldeSubmit = () => {
        getStudentMarksByRegdNum(regdNum).then((res) => {
            setRegdNum("")
            setShowStudentData(true)
            setData(res.data)
            getStudentMarks().then(res =>
                setOverAllStudentsData(res.data)
            )
            setError("")
        }).catch(err => {
            setRegdNum("")
            setData("")
            setShowStudentData(false)
            setError(err.response.data)
        })
    }

    const getMarks = () => {
        if (!!data && !!showStudentData)
            if (selectedSemester != 0) {
                setMarks(data.marks.filter(x => x.semester == selectedSemester))
            }
            else {
                setMarks(data.marks)
            }
    }

    const semsterWiseGraphData = () => {
        return data.marks.map(x => ({ total: x.grandTotal, sem: x.semester }))
    }

    const getStudentMarksForGraph = () => {
        if (!!overAllStudentsData)
            if (selectedSemester != 0) {
                let deptData = overAllStudentsData.filter(x => (x.regdNo != data.regdNo && x.deptId == data.deptId && x.semester == selectedSemester)).map(x => parseInt(x.overallTotal))
                let overallData = overAllStudentsData.filter(x => x.regdNo != data.regdNo && x.semester == selectedSemester).map(x => parseInt(x.overallTotal))
                setGraphDeptData([parseInt(data.overallTotal), ...deptData])
                setGraphCollegeData([parseInt(data.overallTotal), ...overallData])
            }
            else {
                let deptData = overAllStudentsData.filter(x => (x.regdNo != data.regdNo && x.deptId == data.deptId)).map(x => parseInt(x.overallTotal))
                let overallData = overAllStudentsData.filter(x => x.regdNo != data.regdNo).map(x => parseInt(x.overallTotal))
                setGraphDeptData([parseInt(data.overallTotal), ...deptData])
                setGraphCollegeData([parseInt(data.overallTotal), ...overallData])
            }
    }

    const getRankDeptWise = () => {
        if (!!graphDeptData) {
            const sorted = [...new Set(graphDeptData)].sort((a, b) => b - a);
            const rank = new Map(sorted.map((x, i) => [x, i + 1]));
            return graphDeptData.map((x) => rank.get(x))[0];
        }
    }

    const getRankCollegeWise = () => {
        if (!!graphCollegeData) {
            const sorted = [...new Set(graphCollegeData)].sort((a, b) => b - a);
            const rank = new Map(sorted.map((x, i) => [x, i + 1]));
            return graphCollegeData.map((x) => rank.get(x))[0];
        }
    }

    useEffect(() => {
        getStudentMarks()
    })


    useEffect(() => {
        getMarks()
        getStudentMarksForGraph()
    }, [data, selectedSemester])


    return (
        <div>
            <ExamHeader bannerName="Student Marks" />
            <div className="flex flex-col justify-center items-center">
                {!!showStudentData ?
                    <div style={{ width: "80vw" }}>
                        <div className='flex justify-between'>

                            <div className='text-lg font-medium text-amber-400'>
                                Name : <span className='text-orange-400 font-semibold'>{data.name}</span>
                            </div>

                            <div className='text-lg font-medium text-amber-400'>
                                Regd Number : <span className='text-orange-400 font-semibold'>{data.regdNo}</span>
                            </div>
                            <div className='font-medium'>
                                <select name="SelectYear" id="select" className="ml-auto my-2 mr-2 border-solid border-2 border-sky-300 rounded" onChange={(e) => setSelectedSemester(e.target.value)}>
                                    <option value={0} selected>All</option>
                                    {!!data && data.marks.map((y, index) =>
                                        <option key={index} value={y.semester}>Semester - {y.semester}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        {!!marks && marks.map((x, index) =>
                            <div key={index} className="my-4">
                                <Card.Header className='flex justify-around'>
                                    <span>Semester : {x.semester}</span>
                                    <span>Attempt : {x.attempt}</span>
                                </Card.Header>
                                <ResultTable data={x.data} total={x} />
                            </div>)}
                        {!selectedSemester && <div className='d-flex justify-around flex-col items-center my-2'>
                            <div className='text-lg font-medium text-amber-400'>Grand Total : <span className='text-orange-400 font-semibold'>{data.overallTotal}</span></div>
                            <div className='text-lg font-medium text-amber-400'>
                                Percentage : <span className='text-orange-400 font-semibold'>{data.overallPecentage}</span>
                            </div>
                            <div className='text-lg font-medium text-amber-400'>
                                CGPA : <span className='text-orange-400 font-semibold'>{data.overallCgpa}</span>
                            </div>
                        </div>}
                        <div className='d-flex justify-around flex-col my-2'>
                            <div className='text-md font-normal text-red-600'>AB - Absent</div>
                            <div className='text-md font-normal text-red-600'>
                                NQ - Not Qualified
                            </div>
                            <div className='text-md font-normal text-red-600 flex flex-col'>
                                <span>W - With held due to</span>
                                <span>1. Suspected Malpractice by making pledge/giving indications in the answer script to the examiners.</span>
                                <span>2. For not paying the college dues</span>
                            </div>
                        </div>
                        <div className='d-flex justify-around items-center flex-col'>
                            <div className='text-lg font-medium text-amber-600 underline'>
                                Grade point average is calculated in the following way
                            </div>
                            <img src={ResGraph} alt="Graph" />
                        </div>
                        <div className='d-flex justify-around items-center flex-col'>
                            <div className='text-lg font-medium text-amber-600 underline'>
                                How do you compare to rest of the college {selectedSemester != 0 && <>: Selected Semester</>}
                            </div>

                            <div className="my-4" style={{ border: "3px solid #0060b1" }}>
                                {(!!getRankDeptWise() && !!getRankCollegeWise()) && <Chart
                                    className="deptStats"
                                    type="bar"
                                    width={700}
                                    height={300}
                                    series={[
                                        {
                                            name: "",
                                            data: [getRankDeptWise(), getRankCollegeWise()],
                                        },
                                    ]}

                                    options={{
                                        title: {
                                            text: "",
                                            style: { fontSize: 30 },
                                            align: "center",
                                        },
                                        xaxis: {
                                            tickPlacement: "on",
                                            categories: ["Branch Wise", "Campus Wise"],
                                            offsetX: 25
                                        },

                                        yaxis: {
                                            labels: {
                                                formatter: (val) => {
                                                    return `${val}`;
                                                },
                                                style: { fontSize: "10", colors: ["black"] },
                                            },
                                            title: {
                                                text: "Rank",
                                                style: { color: "black", fontSize: 15 },
                                            },
                                        },
                                        plotOptions: {
                                            bar: {
                                                distributed: true,
                                                vertical: true,
                                            },
                                        },
                                        legend: {
                                            show: true,
                                            position: "right",
                                        },
                                        colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8', '#9C27B0', '#0EEAE0', '#0C3EE8'],

                                    }}
                                />}
                            </div>

                            <div className='text-lg font-medium text-amber-600 underline'>
                                Semester wise comparison
                            </div>

                            <div className="my-4" style={{ border: "3px solid #0060b1" }}>
                                {(!!semsterWiseGraphData()) && <Chart
                                    className="deptStats"
                                    type="bar"
                                    width={700}
                                    height={300}
                                    series={[
                                        {
                                            name: "",
                                            data: semsterWiseGraphData().map(x => x.total),
                                        },
                                    ]}

                                    options={{
                                        title: {
                                            text: "",
                                            style: { fontSize: 30 },
                                            align: "center",
                                        },
                                        xaxis: {
                                            tickPlacement: "on",
                                            categories: semsterWiseGraphData().map(x => `Semseter-${x.sem}`),
                                            offsetX: 25
                                        },

                                        yaxis: {
                                            labels: {
                                                formatter: (val) => {
                                                    return `${val}`;
                                                },
                                                style: { fontSize: "10", colors: ["black"] },
                                            },
                                            title: {
                                                text: "Total",
                                                style: { color: "black", fontSize: 15 },
                                            },
                                        },
                                        plotOptions: {
                                            bar: {
                                                distributed: true,
                                                vertical: true,
                                            },
                                        },
                                        legend: {
                                            show: true,
                                            position: "right",
                                        },
                                        colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8', '#9C27B0', '#0EEAE0', '#0C3EE8'],

                                    }}
                                />}
                            </div>
                        </div>
                    </div>
                    : <Card bg="info" border="primary" className="text-center" text="white">
                        <Card.Header>Enter Regestration number to get the details</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Control onChange={(e) => setRegdNum(e.target.value)} type="text" placeholder="Enter Regestration Num ..." value={regdNum} />
                                </Form.Group>
                                <Button variant="warning" className='text-white' onClick={hanldeSubmit}>Submit</Button>
                            </Form>
                        </Card.Body>
                        {!!error && <Card.Footer style={{ background: "#d42637" }}>
                            {error}
                        </Card.Footer>}
                    </Card>}
            </div>
        </div>
    )
}

export default StudentMarks