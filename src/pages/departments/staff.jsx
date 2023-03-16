import React, { useState, useEffect } from "react";
import { getDepartmentsData } from "/src/config/services.js";
import Staff from "/src/components/staff/staff.jsx";

let staff = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    getDepartmentsData()
      .then((res) => setData(res.data))
      .catch((err) => console.log("something went wrong", err));
  };

  useEffect(() => {
    getData();
  }, []);
  const StaffD = data.map((dataArg) => {
    return <Staff item={dataArg} />;
  });
  return (
    <>
      {data.map((c) => (
        <>
          <div className="mt-10 flex flex-row justify-evenly">
            {c.staffdata.map((x) => (
              <div className="staff-wrapper flex">
                <div>{x.name}</div>
                <div>{x.department}</div>
                <div>{x.designation}</div>
                <div>{x.doj}</div>
                <div>{x.deptid}</div>
                <div>{x.email}</div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};
export default staff;
