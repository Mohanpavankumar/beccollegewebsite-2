import React from 'react'

const ResultTable = (props) => {
    return (
        <table className="table table-striped exam-results-table">
            <thead>
                <tr>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>CA</th>
                    <th>FA</th>
                    <th>Total</th>
                    <th>GP</th>
                    <th>CR</th>
                    <th>P Date</th>
                </tr>
            </thead>
            <tbody id="naaclist-sroll">
                {props.data.map((x, index) =>
                    <tr key={index}>
                        <td>{x.subCode}</td>
                        <td >{x.subName}</td>
                        <td>{x.ca}</td>
                        <td>{x.fa}</td>
                        <td>{x.total}</td>
                        <td>{x.gp}</td>
                        <td>{x.cr}</td>
                        <td>{x.pDate}</td>
                    </tr>
                )}
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{props.total.totalCa}</td>
                    <td>{props.total.totalFa}</td>
                    <td>{props.total.grandTotal}</td>
                    <td>SGPA</td>
                    <td>{props.total.totalCr}</td>
                    <td>{props.total.semPdate}</td>
                </tr>
            </tbody>
        </table>)
}

export default ResultTable