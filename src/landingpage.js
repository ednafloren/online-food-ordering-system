
import './landingpage.css';
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import {SearchIcon} from '@mui/icons-material/Search';



const Images=["./img/fish.jpg","./img/pasta.jpg","./img/dinner4.jpg","./img/cafech.jpg"];
function LandingPage(){
    const [currentImage, setCurrentImage]=useState(null);
    useEffect(()=>{

      const intervalId=setInterval(() => {
         setCurrentImage(Images[Math.floor(Math.random()* Images.length)])

      }, 2000);

       return()=>clearInterval(intervalId)

    },[])


  return(
      
     <div className="landing">
         <img src={currentImage} alt='lunch'/>
         <h2 className='welcome'>Welcome to Fast and Yummy</h2>
           
         <div className='search_bar' >
           {/* <SearchIcon/> */}
          <input className="search" placeholder="Search"type="text" />
          
        </div>
       <Link to="menu"> <button className='orderbtn'>ORDER NOW</button></Link>
     </div>
     

     


    );
}
export default LandingPage;