import { useState } from "react";
import { registerPlacementData } from '../../config/services'

let RegistrationFormComponent = () => {
    const [regdNo, setRegdNo] = useState("")
    const [fullName, setFullName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [department, setDepartment] = useState("")
    const [eventName, setEventName] = useState("")
    const [year, setYear] = useState("")
    const [gender, setGender] = useState("")
  
    const handleSubmit =()=>{
      let data = {
          "regdNo":regdNo,
          "fullName":fullName,
          "emailId":emailId,
          "mobileNo":mobileNo,
          "department":department,
          "eventName":eventName,
          "year":year,
          "gender":gender
      }
      registerPlacementData(data).then(res =>
        {alert("Submitted Succesfully")
          setRegdNo("")
          setFullName("")
          setEmailId("")
          setMobileNo("")
          setDepartment("")
          setEventName("")
          setYear("")
          setGender("")
        }
          
    ).catch(err=>
      {
          alert("Something went wrong please check logs")
          // console.log(err)
          setRegdNo("")
          setFullName("")
          setEmailId("")
          setMobileNo("")
          setDepartment("")
          setEventName("")
          setYear("")
          setGender("")
      }
      )}
  return (
    <>
    <div className="registrationform overflow-x-hidden overflow-y-auto border-2 mt-2 h-72">
      <div className="card-body mx-auto ml-auto" style={{width: "500px"}}>	
        <div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-id-card"></i> </span>
            </div>
            <input type="text" className="form-control py-3" placeholder='Please enter regdNo' name="regdNo" id="" onChange={(e)=>setRegdNo(e.target.value)} />
          </div> 
          <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
            <input type="text" className="form-control py-3" placeholder='Please enter fullName' name="fullName" onChange={(e)=>setFullName(e.target.value)}/>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
            <input type="text" className="form-control py-3" placeholder='Please enter emailId' name="emailId" onChange={(e)=>setEmailId(e.target.value)}/>
          </div> 
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
            <select className="custom-select">
                <option selected="">+91</option>
            </select>
            <input type="text" className="form-control py-3" placeholder='Please enter mobileNo' name="mobileNo" onChange={(e)=>setMobileNo(e.target.value)}/>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-building"></i> </span>
          </div>
          <select className="form-control" name="department" onChange={(e)=>setDepartment(e.target.value)}>
            <option selected=""> Department</option>
            <option>Information Technology</option>
            <option>Civil Engineering</option>
            <option>Chemical Engineering </option>
            <option>Computer Science and Engineering </option>
            <option>Data Science(CS)</option>
            <option>Cyber Security(CS)</option>
            <option>Electronics and Communication Engineering </option>
            <option>Electrical and Electronics Engineering </option>
            <option>Mechanical Engineering </option>
          </select>
        </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-graduation-cap"></i> </span>
          </div>
          <select className="form-control" name="eventName" onChange={(e)=>setEventName(e.target.value)}>
            <option>Event Name</option>
            <option>Campus Recruitement Training</option>
          </select>
        </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-calendar"></i> </span>
          </div>
          <select className="form-control" name="year" onChange={(e)=>setYear(e.target.value)}>
            <option selected="">Select year</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>     
          </select>
        </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-mars"></i> </span>
          </div>
          <select className="form-control" name="gender" onChange={(e)=>setGender(e.target.value)}>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>       
          <div className="form-group">
              <button onClick={handleSubmit} className="btn bg-primaryColor text-white btn-block">Submit</button>
          </div>                                               
      </div>
      </div>
</div> 
    </>
  );
}
export default RegistrationFormComponent;