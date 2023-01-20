import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateemployee} from "../Redux/action";

const Editpage = () => {
 const { id } = useParams();
 const data1 = useSelector((store) => store.data);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [currdata, setcurrdata] = useState({
  name: "",
  age: "",
  designation: "",
 });

 const Submithandler = (e) => {
  e.preventDefault();
  dispatch(updateemployee(id, currdata));
  navigate("/");
 };

 const getData = async () => {
  const res = await axios(`http://localhost:8080/employee/${id}`);
  const resData = await res.data;
  setcurrdata({
   ...currdata,
   name: resData?.name,
   age: resData?.age,
   designation: resData?.designation,
  });
 };

 useEffect(() => {
  getData();
 }, [dispatch, data1.length]);

 const Handleadd = (e) => {
  const { name, value } = e.target;
  setcurrdata({ ...currdata, [name]: value });
 };

 return (
  <>
   <div className="form">
    <h1 className="addnew">EDIT EMPLOYEE DATA</h1>
    <form action="" onSubmit={Submithandler}>
     <input
      className="addname"
      name="name"
      type="text"
      value={currdata?.name}
      placeholder="Edit Name "
      onChange={Handleadd}
     />
     <br /> <br />
     <input
      className="addname"
      name="age"
      type="number"
      value={currdata?.age}
      placeholder="Edit Age "
      onChange={Handleadd}
     />
     <br /> <br />
     <input
      className="addname"
      name="designation"
      type="text"
      value={currdata.designation}
      placeholder="Edit Designation "
      onChange={Handleadd}
     />
     <br />
     <button className="addemp" type="submit">
      Submit
     </button>
    </form>
   </div>
  </>
 );
};

export default Editpage;
