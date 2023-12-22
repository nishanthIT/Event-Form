import "./AppLayout.css"
import { Outlet } from "react-router-dom"

function Applayout(){
   
     
    return(
        <div>           
            <div className="fragement">
            <main>
                <Outlet/>
            </main>
            </div>
          
        

       
        </div>
    )
}
export default Applayout