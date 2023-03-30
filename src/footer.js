import React from "react";
import "./footer.css";

function Footer(){
    return(
      <div className="footer">
        <div className="locate">
        <h3>LOCATIONS</h3>
        
        <p>Kira Road</p>  
        <p>Parliamentary Avenue</p>
        <p>Equatorial mall</p>
        </div>
        
       <div>
        <h3>CONTACTS</h3>
            <p>info@fastandyummy.co.ug</p>
            <p>+256 788514706</p>
            <p>+256 706517066</p>
            
       </div>

       <div>
        <h3>MENU</h3>
      
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
      
       </div>
       <p className="copy">&copy; 2023 Fast and Yummy. All rights reserved</p>

      </div>
    );
}

export default Footer;