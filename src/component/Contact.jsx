
import './contact.css';

// import {useEffect} from 'react';
// import gmail from "../asset/gmail.png";

export function Contact(){


    // useEffect(()=>{
    //     document.querySelector('button').onclick = function(){
    //         document.querySelector('form').innerHTML = `
    //         <p>Thanks for considering. I'll contact you shortly.</p>
    //         <a style={{color:'aquamarine', textDecoration:"underline"}} href="mailto:yogeshkushwaha7720@gmail.com"><img src=${gmail} /> Email</a>
    //         `;
    //         document.querySelector('form').className = "success";
    //     }
    // },[])
    // const[msg , setMsg] = useState({name:"name",mail:"mail",msg:"ram..."});
    // function msgSend(){
    // let name =    document.getElementById('name').value;
    // let mail =    document.getElementById('mail').value;
    // let msg  =    document.getElementById('message').value;
    //     setMsg({
    //         name:name,
    //         mail:mail,
    //         msg:msg
    //     })
    //    }
    //    console.log(msg);
    // useEffect(()=>{
      
     

    // },[]);





    return(
    
       

    <div id="GIT">
        
            <h3> Contact Us</h3>
            <form action="https://script.google.com/macros/s/AKfycbwet4GY6_O93tNDcnvu5-Bt47dIUxAhvJkEEEe8kbG8hd4n7J-d9qp9KIguCz_-gHiY/exec" method="post" >

            <input type="text"  id="name" name="name" placeholder="Your  Name?" required/>
            <input type="email" id="email" name="email"placeholder="Your Email Id?" required/>           
            <textarea id="message" name="msg" placeholder="Your message . . ." />
            {/* <input style={{border:"0"}} type="file" accept=".pdf, .docx"/> */}


            <div className="gml">
            You can also send us an email &nbsp;
            <a style={{color:'aquamarine', textDecoration:"underline"}} href="mailto:yogeshkushwaha7720@gmail.com"> Email</a>
            </div>

            <button>Send</button>

            

        </form>

       
       

        
    
    
    
    </div>



    
    
    
    )


}