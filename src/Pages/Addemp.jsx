import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addemployee } from "../Redux/action"
import "./employee.Module.css"

const Addemp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data1, setdata] = useState({
        name: "",
        age: "",
        designation:""
    })
    const Handleadd = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata({...data1,[name]:value})
    }
    
    const Submithandler = (e) => {
        e.preventDefault()
        if (data1) {
            dispatch(addemployee({ name: data1.name,age:data1.age,designation:data1.designation })).then(() => 
                navigate("/")
            )
        }
    }
    return (
        <div className="form">
            <h1 className="addnew">ADD NEW EMPLOYEE</h1>
            <form action="" onSubmit={Submithandler}>
            <input className="addname" name="name" type="text" value={data1.name} placeholder="Enter Name " onChange={Handleadd}/> <br /> <br />
                <input className="addname" name="age" type="number" value={data1.age} placeholder="Enter Age " onChange={Handleadd} /> <br /> <br />
                <input className="addname" name="designation" type="text" value={data1.designation} placeholder="Enter Designation " onChange={Handleadd}/> <br />
                <button className="addemp"  type="submit">Submit</button>
            </form>    
        </div>
        
    )
}

export default Addemp