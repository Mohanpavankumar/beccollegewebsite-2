import React from 'react'
import { Form } from 'react-bootstrap'

const Filters = (props) => {

    return (
        <div key={`inline-radio`}>
            <div className='text-lg font-medium text-blue-600 text-center'>
                Filters
            </div>
            {props.dispFilters.map((x, index) => <div key={index}>
                <div key={index} className="my-1">{x.title}</div>
                <div style={{ borderBottom: "1px dotted #0E0E0E" }} className="flex flex-wrap p-2">
                    {x.info.map((y, idx) => <Form.Check
                        inline
                        label={y}
                        value={y}
                        name={x.title}
                        type={'radio'}
                        id={`inline-radion-${idx}`}
                        key={idx}
                        className='c-pointer'
                        onClick={(e) => { props.getFiltersData(e.target.name.toLowerCase(), e.target.value) }}
                    />)}
                </div>
            </div>)}
        </div>
    )
}

export default Filters