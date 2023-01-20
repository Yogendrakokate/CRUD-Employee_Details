import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { deleteemployee, getemployee } from "../Redux/action"
import "./single.Module.css"

const SingleEmployee = () => {
    const { id } = useParams()
    const dat = useSelector((store) => store.data)
       const navigate = useNavigate()
    const dispatch = useDispatch()
    const [currdata, setcurrdata] = useState({})
    useEffect(() => {
        if (dat.length === 0) {
            dispatch(getemployee())
        }
    }, [dat.length, dispatch])
   
    useEffect(() => {
        if (id) {
            const datas = dat.find((item) => item.id === id);
            datas && setcurrdata(datas)
        }
        
    }, [id])
    const handledelete = () => {
        dispatch(deleteemployee(id))
        navigate("/")
    }
    return (
        <>
            <div className="singlempl">
                <h1 className="namesemp">Employee Details</h1>
                <div className="singleimg"><img src="https://cdn.dribbble.com/users/1549357/screenshots/10805113/media/a98d3f252c1766653c1a3a50604ffb93.png?compress=1&resize=400x300&vertical=top" alt="" /></div>
                <h1 className="names">Name:  <span>{currdata.name}</span></h1>
                <h2 className="names">Age:  <span>{currdata.age}</span> </h2>
                <h2 className="names">Employeeid:  <span>{currdata.id}</span> </h2>
                <h2 className="names">Designation: <span>{currdata.designation}</span></h2>
                <div className="singledel">
                    <button onClick={() => navigate(`/edit/${id}`)}>EDIT</button>
                    <button className="button1" onClick={handledelete}>DELETE</button>
                </div>
            </div>
           

        </>
    )
}

export default SingleEmployee