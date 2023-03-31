
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import LandingPage from './landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterForm} from './forms/register';
import Chart from './Chart/chart';
import {LoginForm} from './forms/login';
// import { Layout } from './layout';  
import {Menu} from './menus/menu';
import { About } from './about';
import { NoPage } from "./nopage";
import { Lunch } from './menus/lunch';
import{Breakfast} from './menus/breakfast';
import{Dinner} from './menus/dinner'
import './App.css';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
           <Route index element={ [<Navbar/>,<LandingPage/>,<Footer />] } />
          <Route path="login" element={<LoginForm />} /> 
          <Route path="register" element={ <RegisterForm/>} />
          <Route path="menu" element={[<Navbar/>,<Menu/>,<Footer/>]} /> 
          <Route path="about" element={<About/>} /> 
          <Route path="lunch" element={<Lunch/>} /> 
          <Route path="breakfast" element={<Breakfast/>} /> 
          <Route path="dinner" element={<Dinner/>} /> 
          <Route path="chart" element={<Chart/>}/>
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

     

      
    
    </div>
  );
}

export default App;
