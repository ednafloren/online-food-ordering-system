

// import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
 import './menu.css'
export function Lunch(){
  
  
  return(
<div>
<h3>lunch</h3>
            <div className="drinkscontainer">
               <div className="drinkscolumn1">
                <Link to="breafast"> <h2>Breakfast</h2></Link>
                <img src="./images/juice.jpg" alt="juice"/>
                
                

                <Link to="lunch"><h2>Lunch</h2></Link>
                
                <img src="./images/smoothies and shakes.jpg" alt="smoothies and shakes"/>
                
            

               </div>
              
               <div className="drinkscolumn2">
                <Link to="dinner"><h2>Dinner</h2></Link>
                <img src="./images/sodas 1.jpeg" alt="Sodas"/>
                

       

                </div>
            </div>

        </div>

 
)
};