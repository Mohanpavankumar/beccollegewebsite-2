import ListComponent from "../../pages/saturaotryData/shared/List"
import TableComponent from "../../pages/saturaotryData/shared/Table"


export const listData = [{
    "link": "http://",
    "title": "Teachers' Evaluation",
    "isExpand": false
},
{
    "link": "http://",
    "title": "Self Appraisal",
    "isExpand": false
},
{
    "link": "http://",
    "title": "List of Students with shortage of attendance and marks and phone call comm. at the end of semester",

},
{
    "link": "http://",
    "title": "AQAR",
    "isExpand": true,
    "expandData": [{
        "title": "One",
        "link": ""
    },
    {
        "title": "Two",
        "link": ""
    },
    {
        "title": "Three",
        "link": ""
    }
    ]
}]

export const listData2 = [{
    "link": "",
    "title": "AQAR 2020-21"


},
{
    "link": "",
    "title": "AQAR 2020-20"
},
{
    "link": "",
    "title": "AQAR 2020-19"
},
{
    "link": "",
    "title": "AQAR 2019-18"
},
{
    "link": "",
    "title": "AQAR 2018-17"
},
{
    "link": "",
    "title": "AQAR 2017-16"
}
]
export const listData3 = [{
    "link": "",
    "title": "IQAC Minitues of Meeting for A.Y 2018-19"


},
{
    "link": "",
    "title": "IQAC Minitues of Meeting for A.Y 2018-19"
},
{
    "link": "",
    "title": "IQAC Minitues of Meeting for A.Y 2018-19"
},
{
    "link": "",
    "title": "IQAC Minitues of Meeting for A.Y 2018-19"
}

]
export const listData4 = [{
    "link": "",
    "title": "Student feedback on curriculum and teaching"


},
{
    "link": "",
    "title": "Teacher's feedback on curriculum and Developmen"
},
{
    "link": "",
    "title": "Alumni feedback on curriculum ,and Development"
},
{
    "link": "",
    "title": "Employer Feedback on curriculum and Development"
}
]
export const listData5 = [{
    "link": "",
    "title": "IIQA"

},
{
    "link": "",
    "title": "Statement of compliance with an IP address"
},
{
    "link": "",
    "title": "animated arrow icon gif images & Animations 100% FREE!IS0 22000:2018 Food Safety Management System Certification for BEC Canteen and Girls Hostel Canteen"
},


]
export const iqacNavigation = [
    {
        "title": "IQAC",
        "key": "1"
    },
    {
        "title": "IQACCommittee",
        "key": "2"
    },
    {
        "title": "Templates",
        "key": "3"
    },
    {
        "title": "AQARReports",
        "key": "4"
    },
    {
        "title": "IQACMinutesofMeeting",
        "key": "5"
    },
    {
        "title": "Feedback Forms",
        "key": "6"
    },
    {
        "title": "IIQA",
        "key": "7"
    }, {
        "title": "Green Rankings-2023",
        "key": "8"
    }
]

export const iqacCommitteeData = [
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    }, {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },
    {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    }, {
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 1,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    },{
        "sno": 111,
        "designation": "BlindingLights",
        "memberName": "TheWeeknd"
    }
]

export const iqacDisplayData = [
    {
        "key": "1",
        "DisplayComponent": <div className='px-1 pb-5'><h1 className='text-danger my-3'>IQAC</h1>
            IQAC is a part of the institution’s system and work towards realization of the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions.
            The Internal Quality Assurance Cell of BAPATLA ENGINEERING COLLEGE was formulated with Dr.P.Pardhasaradhi, Associate Professor, Department of Computer Science and Engineering as the Co-coordinator of the Cell.
        </div>
    },
    {
        "key": "2",
        "DisplayComponent": <div className="p-1">
            <TableComponent data={iqacCommitteeData} cardTitle={"IqacCommittee"} />
        </div>

    },
    {
        "key": "3",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData} listTitle={"IQAC Templates "} />
        </div>
    },
    {
        "key": "4",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData2} listTitle={"IQAC Report Status"} />
        </div>
    },
    {
        "key": "5",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData3} listTitle={"IQAC Minutes of Meeting"} />
        </div>
    },
    {
        "key": "6",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData4} listTitle={"IQAC Student/Teacher/Alumni/Employee Feedback Forms:"} />
        </div>
    },
    {
        "key": "7",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData5} listTitle={"IIQA"} />
        </div>
    },
    {
        "key": "8",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData5} listTitle={"IIQA"} />
        </div>
    }
]