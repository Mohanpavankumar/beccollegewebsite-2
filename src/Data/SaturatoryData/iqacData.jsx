import ListComponent from "../../pages/saturaotryData/shared/List"


export const listData = [{
    "link": "http://",
    "title": "Hey123"
}]

export const listData2 = [{
    "link": "",
    "title": "Hey123",
    "isExpand": true,
    "expandData": [{
        "title": "123",
        "link": "abc"
    }
]
}]


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
        "title": "Gallery",
        "key": "7"
    }, {
        "title": "OtherReports",
        "key": "8"
    }
]

export const iqacDisplayData = [
    {
        "key": "1",
        "DisplayComponent":<div className='p-2'><h1 className='mt-5'>IQAC</h1>
            IQAC is a part of the institution’s system and work towards realization of the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the overall performance of institutions.
            The Internal Quality Assurance Cell of BAPATLA ENGINEERING COLLEGE was formulated with Dr.P.Pardhasaradhi, Associate Professor, Department of Computer Science and Engineering as the Co-coordinator of the Cell.
        </div>
    },
    {
        "key": "2",
        "DisplayComponent": <div><h1>IQACCommittee</h1>2</div>

    },
    {
        "key": "3",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData} listTitle={"Title"} />
        </div>
    },
    {
        "key": "4",
        "DisplayComponent": <div className="list-container">
            <ListComponent data={listData2} listTitle={"Title2"} />
        </div>
    },
    {
        "key": "5",
        "DisplayComponent": <div><h1>IQACMinutesofMeeting</h1>5</div>
    },
    {
        "key": "6",
        "DisplayComponent": <div><h1>Feedback Forms</h1>5</div>
    },
    {
        "key": "7",
        "DisplayComponent": <div><h1>Gallery</h1>5</div>
    },
    {
        "key": "8",
        "DisplayComponent": <div><h1>OtherReports</h1>5</div>
    }
]