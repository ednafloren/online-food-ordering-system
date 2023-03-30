
import React, { useState } from "react"
import SnackItems from "./snackitems";
import KatogoItems from "./katogoitems";
import TeaItems from "./teaitems";
import Drinks from "./drinks and beverages";



export function Breakfast(){
  const[Breakfast,setBreakfast]= useState('TEA')
  const[images,setImages] =useState()
  



    return(
      <div class="subcategories">
        {/* <h1>Breakfast Menu</h1> */}
        
        <TeaItems/>
         <SnackItems/>
         <Drinks/>
         <KatogoItems/>
         
         
   

      </div>

    )
}
export default Breakfast;