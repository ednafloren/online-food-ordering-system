import React from "react";


function Wines(){
    return(
        <div>
            <button><h2>Wines</h2></button>
            <div className="winescontainer">
            
              <div className="winescolumn1">
                <h2>White Wines</h2>
                <img src="./images/white wines.jpg" alt="white wines"/>
                <p>Price: $100</p>
                <button>Order</button>
              </div>

              <div className="winescolumn2">
                <h2>Red Wines</h2>
                <img src="./images/red wines.jpg" alt="Red wines"/>
                <p>Price: $100</p>
                <button>Order</button>
              </div>

             <div className="winescolumn3">
                <h2>Rose Wines</h2>
                <img src="./images/rose wines.jpg" alt="Rose wines"/>
                <p>Price: $100</p>
                <button>Order</button>
             </div>
          </div>
            
        </div>
    )
}
export default Wines;