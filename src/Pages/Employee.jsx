import "./employee.Module.css";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datacart from "../Component/datacart";
import { getemployee } from "../Redux/action";

const EmployeeList = () => {
 const [page2, setpage2] = useState(1);
 const data = useSelector((store) => store.data);

 const dispatch = useDispatch();

 useEffect(() => {
  console.log(page2, data, "9090");

  console.log(page2, "9090yogiii");
  const getparams = {
   params: {
    _page: page2,
    _limit: 5,
   },
  };
  dispatch(getemployee(getparams));
 }, [data.length, page2]);

 console.log(data);
 return (
  <div>
     <h1 className="empname">Employee Page</h1>
     <div className="pagination">
    <button disabled={page2 === 1} onClick={() => setpage2(page2 - 1)}>
     Prev
    </button>

    <h1 className="page">{page2}</h1>
    <button onClick={() => setpage2(page2 + 1)}>Next</button>
   </div>
   <div>
    <table className="table_employee">
     <thead>
      <tr>
       <th className="namehed">Employee Name</th>
       <th className="namehed">Employee Age</th>
             <th className="namehed">Employee Designation</th>
             <th className="namehed">Employee Id</th>
      </tr>
     </thead>
     {data?.length &&
      data.map((item) => {
       return (
        <Datacart
         age={item.age}
         designation={item.designation}
         name={item.name}
         id={item.id}
        />
       );
      })}
    </table>
   </div>

  </div>
 );
};

export default EmployeeList;
