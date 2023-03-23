import React from 'react'
const CommitteeTable = (props) => {
    return (
        <div className='d-flex flex-column p-1'>
            <h2 className='text-danger mt-1 mb-3'>{props.cardTitle}</h2>
            <table className="table table-striped shared-table-committees">
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Member</th>
                        <th>Designation</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody id="naaclist-sroll">
                    {props.data.map(x => <tr>
                        <td>{x.sno}</td>
                        <td >{x.Member}</td>
                        <td style={{whiteSpace:"pre-wrap"}}>{x.Designation}</td>
                        <td>{x.Role}</td>
                        <td>{x.Email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default CommitteeTable