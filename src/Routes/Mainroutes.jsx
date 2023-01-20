import { Routes, Route } from "react-router-dom"
import SingleEmployee from "../Component/Singleemployee";
import Addemp from "../Pages/Addemp"
import Editpage from "../Pages/Editpage";
import EmployeeList from "../Pages/Employee";

const MainRoutes = () => {
    return (
        <>
            <div>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                    <Route path="/edit/:id" element={<Editpage />} />
                    <Route path="/add" element={<Addemp/>} />
                    <Route path="/single/:id" element={<SingleEmployee/>} />
            </Routes>
            </div>
           
        </>
    )
}

export default MainRoutes;