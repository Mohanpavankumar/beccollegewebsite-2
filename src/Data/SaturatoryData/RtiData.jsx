import ListComponent from "../../pages/saturaotryData/shared/List"
import TableComponent from "../../pages/saturaotryData/shared/Table"

export const iqacNavigation = [
    {
        "title": "RTI ACT Theme",
        "key": "1"
    },
    {
        "title": "RTI Committee",
        "key": "2"
    },
    {
        "title": "RTI ACT 2005",
        "key": "3"
    }
    
]

export const rtiCommitteeData = [
    {
        "sno": 1,
        "designation": "First Appellate authority under Section 19(1) of RTI Act 2005",
        "memberName": "Dr. Nazeer Shaik, Principal,  Bapatla Engineering College, Bapatla, 522102. Ph.No.: 9440730035",
        
    },
    {
        "sno": 2,
        "designation": "Public Information Officer under Section 5(1) of RTI Act 2005",
        "memberName": "Head of the respective department, Bapatla Engineering College, Bapatla, 522102.",
        
    },
    {
        "sno": 3,
        "designation": "Assistant public Information Officer under Section 5(2) of RTI Act 2005",
        "memberName": "Sri. G. Gopala Krishna, Office Superintendent, Bapatla Engineering College, Bapatla, 522102.  Ph.No.: 9949809499",
    }
]

export const iqacDisplayData = [
    {
        "key": "1",
        "DisplayComponent": <div className='px-1 pb-5'><h1 className='text-danger my-3'>RTI ACT</h1>
           In order to ensure greater and more effective access to information, the Government resolved that the Freedom of information Act, 2002 enacted by the Parliament needs to be made more progressive, participatory and meaningful. The National Advisory Council deliberated on the issue and suggested certain important changes to be incorporated in the existing Act to ensure smoother and greater access to information. The Government examined the suggestions made by the National Advisory Council and others and decided to make a number of changes in the law.
        </div>
        
    },
    {
        "key": "2",
        "DisplayComponent": <div className="p-1">
            <TableComponent data={rtiCommitteeData} cardTitle={"IQACCommittee"} />
        </div>

    },
    {
        "key": "3",
        "DisplayComponent": <div className="pl-1">
           <embed src="/src/assets/saturatoryData/AICTE_Mandatory_Disclosure.pdf" width={800} height={400}>
                                </embed>
        </div>
    }
   
]