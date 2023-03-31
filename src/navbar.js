import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

 //import {Link} from 'react-router-dom';
import "./navbar.css";
// import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
  
    return (
      
     <div className='overall_nav'><div className='rrr'>
       <img src='./img/logoo.png' className='my_logo' alt='logo'></img>
<h4>Fast <br></br>And <br></br>Yummy</h4></div>
      <div className='buttonlink'>
        <div className='nav_link3'>
        <Link to="/"className='home'>Home</Link>
        </div>






        <div className='nav_link1'>
        
        <Link to='/menu' className='home'>Menu</Link> 

        </div>

        <div className='nav_link2'>
          
        <Link to="/about" className='home'>About</Link> 
        </div>

       <button id='btns'><Link to="/login">LogIn</Link></button>
       <button id='btn-r'><Link to="/register">Register</Link></button>
       </div>
      </div>
      
     
      
            
    );
    
}

export default Navbar;