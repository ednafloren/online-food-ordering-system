import React from "react";


function TeaItems(){
    return(
        <div>
            <button><h2>Tea</h2></button>
            
             <div className="teacontainer">
                
                <div className="teacolumn1">
                  <h2>Milk</h2>
                  <img src="./images/milk tea.jpeg" alt="milk"/>
                  <p>Price: $50</p>
                  <button>Order</button>
                </div>
             
                <div className="teacolumn2">
                  <h2>African Tea</h2>
                  <img src="./images/africantea.jpeg" alt="African tea"/>
                  <p>Price: $30</p>
                  <button>Order</button>
                </div>
            </div>
            
        </div>
    )
    }
export default TeaItems; 