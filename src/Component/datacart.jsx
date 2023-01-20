import { Link } from "react-router-dom"
const Datacart = ({ age, name, id, designation }) => {
 
    return (
        <>
            <tbody>

            
            <tr>
               
                    <td > <Link to={`/single/${id}`}><h1 className="namedata">{name}</h1> </Link></td>
                   
                <td><h2 className="namedata1">{age}</h2></td>
                    <td><h2 className="namedata1">{designation}</h2></td>
                    <td><h2 className="namedata1">{id}</h2></td>
                </tr>
                </tbody>
            
           
        
            
            
        </>
    )
}

export default Datacart