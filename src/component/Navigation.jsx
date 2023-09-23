import './about.css';
import { useState } from "react";
import mouse from '../asset/mouse2.png';





export function Navigation(){
  const [getVal, setVal] = useState({position:"",top:"",left:"",zIndex:""});

  function GetPosition(e){
      setVal({
        position:'fixed', 
        top: (e.clientY-800 )+ 'px',
        left:(e.clientX-800 )+ 'px',
        zIndex:"0"
       
      })
    }



    return(
        <section class="about" onMouseMove={GetPosition}>
            <div >
                <div className="intro">
                 <h1><span className="">Yogesh Kushwaha</span></h1>
                 <h2><span className="">Software Developer - Frontend</span></h2>
                 <p className="hlf-width"> <span className="txgray">Eager Frontend Software Engineer Ready to Transform Ideas into Beautiful Interfaces.</span></p>

                </div>
                <div className="nav">
                        <a href="#about"><span className="AnLine active">__</span> &nbsp; About</a>
                        <a href="#education"> <span className="AnLine">__</span> &nbsp; Education</a>
                        <a href="#projects"> <span className="AnLine">__</span> &nbsp; Projects</a>
                        <a href="#GIT"> <span className="AnLine">__</span> &nbsp; Get In Touch</a>

                </div>
            </div>
            <div class="social-icons">
                <a href="https://github.com/yogeshkumar72/Projects.git"> <span className="bi bi-github"></span> </a>
                <a href="https://www.instagram.com/yogesh072_/?hl=en"> <span className="bi bi-instagram"></span> </a>
                <a href="mailto:yogeshkushwaha7720@gmail.com"><span className="bi bi-envelope-fill"></span> </a>
                <a href="https://www.linkedin.com/in/yogesh-kushwaha-ba6887212/"> <span className="bi bi-linkedin"></span> </a>

            </div>
            <img style={getVal} src={mouse} width="1600px" height="1600px" alt="mousepointer"/>
        </section>
    ) 
}