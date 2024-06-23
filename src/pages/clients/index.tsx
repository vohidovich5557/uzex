import { useParams } from "react-router-dom"
import { clientData } from "../../data/landingData";


export const ClientsPage = () => {
    const params = useParams();
    const result = clientData.filter((item) => item.id === Number(params.id));
    console.log(result);
    
    
    return (
        <>
         <div className="container">
            <h2>Clientpage</h2>
         </div>
        </>
    )
}