import { Link, useNavigate } from "react-router-dom"
import "./single.Module.css"
import img from "./Images/techflitter.png"


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="navbar">
                <div> <Link to={`/`}><img className="navimg" src={img} alt="" /></Link> </div>
                <div> <h1 className="empl">Techflitter Solutions</h1></div>
                <div><button className="addbtn" onClick={()=>navigate("/add")}>Add Employee</button></div>
        </div>
        </>
    )
}

export default Navbar