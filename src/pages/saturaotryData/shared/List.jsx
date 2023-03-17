import React, { useState } from 'react'

const ListComponent = (props) => {
    const [expand, setExpand] = useState(false)

    const handleClick = (val) => {
        if (val)
            setExpand(!expand)
        else setExpand(false)
    }
    return (
        <div className='d-flex flex-column'>
            <h2 className='color-danger my-2'>{props.listTitle}</h2>
            {props.data.map(x => <ul className='d-flex p-4'>
                <li onClick={() => handleClick(x.isExpand)}>
                    {expand ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-greater-than my-auto mr-1"></i>}
                    <span className='my-auto'>{x.link}{x.title}</span>
                    {x.isExpand && expand && <ul>
                        {x.expandData.map(x => <li>
                            <span className='my-auto'>{x.link}{x.title}</span>
                        </li>)}
                    </ul>}
                </li>
            </ul >)}
        </div >
    )
}

export default ListComponent