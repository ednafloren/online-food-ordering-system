import React from "react"
import Wines from "./wines";
import Desserts from "./desserts";
import Appetizers from "./appetizers";


export function Dinner(){
    return(
        <div>
            {/* <h1>Dinner Menu</h1> */}
            
           <Wines/><br></br><br></br>
           <Desserts/><br></br><br></br>
           <Appetizers/> 
            
        </div>
        
    )
}
export default Dinner;