import React, { useState } from 'react'

const ListComponent = (props) => {
    const [expand, setExpand] = useState(false)

    const handleClick = (val) => {
        if (val)
            setExpand(!expand)
        else setExpand(false)
    }
    return (
        <div className='d-flex flex-column mb-1 h-64'>
            <h2 className='text-danger my-2'>{props.listTitle}</h2>
            {props.data.map(x => <ul className='d-flex p-2'>
                <li onClick={() => handleClick(x.isExpand)}>
                    {expand ? <i class="fa-solid fa-chevron-down fa-xs"></i> : <i class="fa-solid fa-greater-than fa-xs"></i>}
                    {x.isExpand ? <span className='my-auto ml-2'>{x.title}</span> : <a href={x.link} target='_blank' rel='noopener noreferrer' className='my-auto ml-2'>
                        {x.title}
                    </a>}
                    {x.isExpand && expand && <ul>
                        {x.expandData.map(x => <li>
                            <a href={x.link} target='_blank' rel='noopener noreferrer' className='my-auto ml-2'>
                                {x.title}
                            </a>
                        </li>)}
                    </ul>}
                </li>
            </ul >)}
        </div >
    )
}

export default ListComponent