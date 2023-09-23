import styled from "styled-components";
// import mouse from './asset/mouse.png';
// import {useState} from 'react';
import {Navigation} from './component/Navigation';
import {About} from './component/About';
import { Education } from "./component/Education";
import {Project} from "./component/Projects";
import {Footer} from "./component/Footer";
import {Contact} from "./component/Contact";

// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  

  // const [getVal, setVal] = useState({position:"",top:"",left:"",zIndex:""});

  // function GetPosition(e){
  //     setVal({
  //       position:'fixed', 
  //       top: (e.clientY-600 )+ 'px',
  //       left:(e.clientX-600 )+ 'px',
  //       zIndex:"0"
       
  //     })
  //   }

  const Background = styled.section`
    width:60%;
    padding:100px 10%;
    @media(orientation:portrait){
      width:100%;

    }
  `;
  const Grid = styled.div`
 ;
    width:80%;
    padding:10px 10%;
    display:grid;
    grid-template-columns:6fr 6fr;
    div{
      width:600px;
      z-index:10;
    }
    @media (orientation:portrait) {
      width:100%;
      padding:0px;
      display:flex;
      flex-direction:column;
    }
  `;

  return (
    <Background id="me">

         {/* //  onMouseMove={GetPosition} */}
    <Grid>
      
      <div>
        <Navigation/>
      </div>
      <div>
        <About/>
        <Education/>
        <Project/>
        <Contact/> 
        <Footer/>

      </div>

    </Grid>
    {/* <Contact/>
    <Footer/> */}
    {/* <img style={getVal} src={mouse} width="1200px" height="1200px" alt="mousepointer"/> */}
   
    
    </Background>
  );
}

export default App;
