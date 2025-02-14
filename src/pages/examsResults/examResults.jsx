import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getExamResults } from '../../config/services';
import Filters from './filters';
import NewIcon from '../../assets/icons/new.gif'

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
            info: [...new Set(data.map(x => x.year))]
        }, {
            title: "Branch",
            info: [...new Set(data.map(x => x.branch))]
        },
        {
            title: "Semester",
            info: [...new Set(data.map(x => x.semester))]
        },
        {
            title: "ExamType",
            info: [...new Set(data.map(x => x.examtype))]
        },
        {
            title: "Regulation",
            info: [...new Set(data.map(x => x.regulation))]
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



    const onChangeOrder = () => {
    }


    const setDataFilters = () => {
        if (!!appliedFilters) {
            let result = data.filter(o => appliedFilters.every(({ name, value }) => o[name] == value))

            if (sortByOrder == 'asc')
                return setFilterData(result.sort((a, b) => new Date(b.releasedDate) - new Date(a.releasedDate)))
            else return setFilterData(result.sort((a, b) => new Date(a.releasedDate) - new Date(b.releasedDate)))
        }
        else {
            if (sortByOrder == 'asc')
                return setFilterData(data.sort((a, b) => new Date(b.releasedDate) - new Date(a.releasedDate)))
            else return setFilterData(data.sort((a, b) => new Date(a.releasedDate) - new Date(b.releasedDate)))
        }
    }


    useEffect(() => {
        setDataFilters()
        displayFilters()
    }, [data, appliedFilters, sortByOrder])


    return (
        <div className='flex flex-col mt-2'>
            {/* <ExamHeader bannerName="Results" /> */}
            <div className='text-xl font-bold text-amber-400 mx-auto underline'>
                Results
            </div>
            <select value={sortByOrder} name="selectAscDesc" id="select" className="mr-2 ml-auto border-solid border-2 border-sky-300 rounded" onChange={(e) => setSortByOrder(e.target.value)}>
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
                                    {!!x.isNewResult && <div className="mx-2 new-text-effect">
                                        <img src={NewIcon} alt="NEW" />
                                    </div>}
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