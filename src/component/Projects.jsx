import styled from 'styled-components';
import './font.css';
import weather from '../asset/weather.png';
import portfolio from '../asset/portfolio.png';
import landing from '../asset/landing_page.png';
// import bg from '../asset/bg-animation.svg';





export function Project(){

    function showMsg(){
        
        setTimeout(() => {
            document.getElementById('msg').innerHTML="I'll share exciting projects soon.";
            document.getElementById('msg').style.color= "rgb(103, 242, 194)";
            // document.getElementById('msg').style.cursor="pointer";
        }, 200);

    }

    const Projects = styled.div`
    margin-top:150px;
    // width:900px;
    cursor: url('../asset/mouse.png'), auto;
    @media(oriantation:portrait){
        // width:1000px;
        // background-image:url();
    }
    `;


    const Container = styled.div`
    // border:1px solid white;
    border-radius:7px;
    margin:20px 0px;
    // height:200px;
    width:800px;
    color:rgb(151, 168, 184);
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    padding:30px 15px;
    transition:0.3s;
    &:hover{
        background-color: #ebffff15;
        box-shadow:0px -1px 1px rgba(179, 181, 195, 0.381);
        padding-left: 50px;
        padding-right: 50px;
        h2{
            color:rgb(103, 242, 194);
        }
    }
    @media (orientation: portrait){
        
        &:hover{
            div img{
               
                    box-shadow:0px 8px 10px rgb(103, 242, 194);
                 
            }
            h2{
                text-shadow:0px 0px 5px white;
            }
            :last-child{
                // background: linear-gradient(180deg, #0e23484f 2%, #4c85e700 100%);
            }

        }

   `;



    const Thumbnl = styled.div`
  
    img{
        width:150px;
        // background-image:url('../asset/bg-animation.svg');
        box-shadow:0px 8px 10px rgb(179, 179, 179);
        @media(orientation:portrait){
           width:450px;
      
        }
    }
    `;

    const Pro = styled.div`
    // background-image:url('../asset/bg-animation.svg');
    margin-left:170px;
    color:rgb(151, 168, 184);
    margin-top:-100px;
    @media(orientation:portrait){
    //    background-color:red;
    // background-image:url('../asset/bg-animation.svg');
    padding:20px;
    border:1px solid green;
    border-top-left-radius:20px;
    margin-left:100px;
    // border-right:0;
    // border-bottom:0;
    border-radius-right:0;
    backdrop-filter:blur(8px);
    @media(orientation:portrait){
        width:100px;
        // background-image:url('../asset/bg-animation.svg');
    }

    }
    `;

    const Heading = styled.h2`
    color:white;
    font-size:18px;    
    @media(orientation:portrait){
        font-size:30px;
    }
    

    `;


    const Description = styled.p`
    margin-top:6px;
    color:rgb(151, 168, 184);
    width:50%;
    @media(orientation:portrait){
        width:80%;
        font-size:23px;
     }
    `;

    const Skills = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:5px;
    margin-top:10px;
    `;

    const Skill = styled.span`
    margin:5px 3px;
    color:rgb(103, 242, 194);
    background:rgba(111, 250, 201, 0.157);
    padding:8px;
    border-radius:15px;
    letter-spacing:0.5px;
    font-size:13px;
    @media(orientation:portrait){
        margin:5px 10px;
        padding:8px 10px;
        font-size:20px;
    }
     `;

     const AnButton= styled.span`
     color:white;
     font-weight:bold;
     margin-left:20px;
     cursor:pointer;
     &:hover{
        border-color:rgb(103, 242, 194);
        border-bottom:1px solid rgb(103, 242, 194);
     +span{
        margin-left:10px;
        transition:0.2s;
        }
    }
    @media(orientation:portrait){
        font-size:25px;
     
    }

     `;



return(
    <Projects id="projects">
        <p className="m_title  text-light">PROJECT</p>

    <Container>
        <Thumbnl> <img src={weather} alt="" />  </Thumbnl>
        <Pro>
            <Heading>Weather Application</Heading>
            
            <Description>
             I've created user-friendly Weather Application using front-end technologies and real-time
             API integration. It offers easy access to current weather conditions and accurate forecasts.
                <Skills>
                     <Skill>HTML</Skill>
                     <Skill>Css</Skill>
                     <Skill>JavaScript</Skill>
                     <Skill>Bootstrap</Skill>
                </Skills>
            </Description>
        </Pro>
    </Container>


    <Container>
        <Thumbnl> <img src={portfolio} alt="" />  </Thumbnl>
        <Pro>
            <Heading>Personal Portfolio</Heading>
            <Description>
            I've created a personal portfolio that demonstrates my expertise in front-end technologies and React, 
            showcasing my ability to create captivating web experiences.
                <Skills>
                     <Skill>React JS</Skill>
                     <Skill>Styled Component</Skill>
                     <Skill>JavaScript</Skill>
                     <Skill>Bootstrap</Skill>
                </Skills>
            </Description>
        </Pro>
    </Container>


    <Container>
        <Thumbnl> <img src={landing} alt="" />  </Thumbnl>
        <Pro>
            <Heading>Product Landing Page</Heading>
            <Description>I've created a product landing page that's carefully designed to captivate visitors, showcase product features, and encourage engagement and conversions while offering a visually appealing and informative experience.
                <Skills>
                     <Skill>HTML</Skill>
                     <Skill>Css</Skill>
                     <Skill>JavaScript</Skill>
                     <Skill>Bootstrap</Skill>
                </Skills>
            </Description>
        </Pro>
    </Container>

    <AnButton> <a onClick={showMsg} id="msg"> Project coming soon </a> </AnButton>
    {/* View Full Project Archive */}
    <span className="bi bi-arrow-right">&nbsp; </span>

    </Projects>
)


}