import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExamHeader from '../../components/examheader/examheader';
import { getExamResults } from '../../config/services';
import Filters from './filters';

const ExamResults = () => {
    let [data, setData] = useState([]);
    let [filterData, setFilterData] = useState([])
    let [appliedFilters, setAppliedFilters] = useState([])
    let [dispFilters, setDispFilters] = useState([
        {
            title: "",
            info: []
        }
    ])
    let [sortByOrder, setSortByOrder] = useState('asc')

    useEffect(() => {
        getExamResults().then(res =>
            setData(res.data))
            .catch(err =>
                console.log("ERROR!!", err))
    }, [])


    const displayFilters = () => {
        let fData = [{
            title: "Year",
            info: data.map(x => x.year)
        }, {
            title: "Branch",
            info: data.map(x => x.branch)
        },
        {
            title: "Semseter",
            info: data.map(x => x.semester)
        },
        {
            title: "ExamType",
            info: data.map(x => x.examtype)
        },
        {
            title: "Regulation",
            info: data.map(x => x.regulation)
        }]
        setDispFilters(fData)
    }

    const getFiltersData = (name, value) => {
        let aFData = {
            name: name,
            value: value
        }
        setAppliedFilters(appliedFilters.filter(obj => obj.name !== aFData.name).concat(aFData))
    }

    const onChangeOrder = order => {
        switch (order) {
            case 'asc': return setFilterData(data.sort((a, b) => new Date(a.releasedDate) - new Date(b.releasedDate)))
            case 'desc': return setFilterData(data.sort((a, b) => new Date(b.releasedDate) - new Date(a.releasedDate)))
            default:
                return setFilterData(data)
        }
    }

    const setDataFilters = () => {
        if (!!appliedFilters) {
            let result = data.filter(o => appliedFilters.every(({ name, value }) => o[name] == value))
            setFilterData(result)
        }
        else {
            setFilterData(data)
        }
    }


    useEffect(() => {
        setDataFilters()
        displayFilters()
    }, [data, appliedFilters])


    useEffect(() => {
        onChangeOrder(sortByOrder)
    }, [sortByOrder])

    return (
        <div className='flex flex-col mt-2'>
            {/* <ExamHeader bannerName="Results" /> */}
            <div className='text-xl font-bold text-amber-400 mx-auto underline'>
                Results
            </div>

            <select name="selectAscDesc" id="select" className="mr-2 ml-auto border-solid border-2 border-sky-300 rounded" onChange={(e) => setSortByOrder(e.target.value)}>
                <option value={"asc"} selected>Sort by: New to Old</option>
                <option value={"desc"}>Sort by: Old to New</option>
            </select>
            <div className="flex p-3">
                <div className='flex flex-col' style={{ borderRight: "1px solid #020202" }}>
                    <div className='mx-4'>
                        <Filters dispFilters={dispFilters} getFiltersData={getFiltersData} />
                    </div>
                </div>
                <div className='flex ml-4'>
                    <ListGroup as="ul">
                        {!!filterData && filterData.map((x, index) => (
                            <ListGroup.Item
                                key={index}
                                as="li"
                                className="d-flex justify-between"
                            >
                                <div className="my-auto mr-2">
                                    <Link to={`/examination/studentmarks?semester=${x.semester}`} className="link-primary-col">
                                        {x.title}
                                    </Link>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    )
}

export default ExamResults