import { useState, useEffect } from "react";

function Form() {
  return (
    <>
    <div className="registrationform overflow-x-hidden overflow-y-auto border-2 mt-2 h-72">
      <div className="card-body mx-auto ml-auto" style={{width: "500px"}}>	
        <form action="" method="post">
          <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-id-card"></i> </span>
            </div>
                <input name="regno" className="form-control" placeholder="Registration Number" type="text" />
          </div> 
          <div className="form-group input-group">
            <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
            </div>
              <input name="fullname" className="form-control" placeholder="Full name" type="text" />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
            </div>
              <input name="email" className="form-control" placeholder="Email address" type="email" />
          </div> 
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
            <select className="custom-select">
                <option selected="">+91</option>
            </select>
            <input name="phoneno" className="form-control" placeholder="Phone number" type="text" />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-building"></i> </span>
          </div>
          <select className="form-control" name="department">
            <option selected=""> Department</option>
            <option>Civil Engineering</option>
            <option>Chemical Engineering </option>
            <option>Computer Science and Engineering </option>
                  <option>Data Science(CS)</option>
                  <option>Cyber Security(CS)</option>
                  <option>Electronics and Communication Engineering </option>
                  <option>Electrical and Electronics Engineering </option>
                  <option>Information Technology</option>
                  <option>Mechanical Engineering </option>
                  
          </select>
        </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-graduation-cap"></i> </span>
          </div>
          <select className="form-control" name="eventname">
            <option selected=""> Event Name</option>
          </select>
        </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"> <i className="fa fa-calendar"></i> </span>
          </div>
          <select className="form-control" name="year">
            <option selected=""> Select year</option>
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
          <select className="form-control" name="gender">
            <option selected=""> Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>       
          <div className="form-group">
              <button type="submit" className="btn bg-primaryColor text-white btn-block">Submit</button>
          </div>                                               
      </form>
      </div>
</div> 
    </>
  );
}

export default Form;