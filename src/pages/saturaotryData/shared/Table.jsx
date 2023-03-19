import React from 'react'
import Table from 'react-bootstrap/Table';

const TableComponent = (props) => {
    return (
        <div className='d-flex flex-column mb-1 h-64'>
            <h2 className='text-danger mt-1 mb-4'>{props.cardTitle}</h2>
            <Table bordered hover size='lg'>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Designation</th>
                        <th>Member Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(x => <tr>
                        <td>{x.sno}</td>
                        <td>{x.designation}</td>
                        <td>{x.memberName}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent