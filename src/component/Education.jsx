import styled from 'styled-components';
import './font.css';
// import mouse from '../asset/mouse.png';
// import { Document, Page } from 'react-pdf';
// import resume from '../asset/';f
import pdf from '../asset/yogshkumar_.jpg';




export function Education(){

    const Education = styled.div`
    margin-top:150px;
    // width:900px;
    cursor: url('../asset/mouse.png'), auto;
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
  
    
 `;



    const Session = styled.div`
  
    // height:160px;
    // width:100px;  
    // background:#334455;
    font-size:13px;
    color:rgb(151, 168, 184);
    font-weight:bold;
    // margin-right:50px;
    // margin-left:-170px;
    // border:1px solid red;
    @media(orientation:portrait){
        font-size:20px;
    }
    `;

    const Course = styled.div`
    // background:#332244;
    margin-left:170px;
    // height:160px;
    color:rgb(151, 168, 184);
    margin-top:-20px;
    @media(orientation:portrait){
        margin-top:10px;
        margin-left:0px;
    }
   
    
    
    `;
    const Heading = styled.h2`
    color:white;
    font-size:18px;
    @media(orientation:portrait){
        font-size:30px;
    }
    
    `;

    const SubHeading = styled.h4`
    margin-top:6px;
    color:rgb(179, 181, 195);
    font-size:16px;
    font-weight:600;
    @media(orientation:portrait){
        font-size:25px;
    }
    `;
    const Description = styled.p`
    margin-top:6px;
    color:rgb(151, 168, 184);
    width:70%;
    @media(orientation:portrait){
       width:80%;
       font-size:23px;
    }
    `;
    const Skills = styled.div`
    
    display:flex;
    flex-wrap:wrap;
    padding: 5px 0px;
    margin-top:10px;
    @media(orientation:portrait){


    }

    
    
    `;
    const Skill = styled.span`
    margin:5px 3px;
    color:rgb(103, 242, 194);
    background:rgba(111, 250, 201, 0.157);
    padding:8px;
    border-radius:15px;
    font-size:13px;
    @media(orientation:portrait){
        margin:5px 5px;
        font-size:20px;
    }

     `;
     const AnButton= styled.span`
     
     color:white;
     font-weight:bold;
    // transition:4s;
    margin-left:20px;
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
    <Education id="education">
        <p className="m_title  text-light">EDUCATION</p>

    <Container ClassName="restelement">
        <Session> JUNE 2021-JUNE 2023  </Session>
        <Course>
            <Heading>Master of Computer Applications</Heading>
            <SubHeading>UICSA, Rani Durgawati University, Jabalpur.</SubHeading>
            <Description>A Master of Computer Application (MCA) program is a postgraduate degree that typically spans two to three years and focuses on various aspects of computer science and software development
            <Skills>
                     <Skill>Programming Language</Skill>
                     <Skill>Operating System</Skill>
                     <Skill>Database Management</Skill>
                     <Skill>Networking and Security</Skill>
                     <Skill>Cloud Computing</Skill>
                </Skills>
                
            </Description>
       
            
        </Course>

    </Container>

    <Container ClassName="restelement">
        <Session> JUNE 2018-JUNE 2021  </Session>
        <Course>
            <Heading>Bachelor of Computer Applications</Heading>
            <SubHeading>St. Aloysius College, Jabalpur</SubHeading>
            <Description>
                        A Bachelor of Computer Applications (BCA) is an undergraduate degree program that focuses on computer science and its various applications. It typically spans three years and provides students with a strong foundation in computer science, software development, and related areas.
                <Skills>
                     <Skill>Computer Fundamentals</Skill>
                     <Skill>Computer Graphics</Skill>
                     <Skill>Database Management</Skill>
                     <Skill>Web Development</Skill>
                     <Skill>Cyber Security</Skill>
                     
                </Skills>
            </Description>
            
        </Course>

    </Container>

    <Container >
        <Session> JUNE 2017-JUNE 2018  </Session>
        <Course>
            <Heading>Senior Secondary</Heading>
            <SubHeading>Balak Mandir Higher Secondary School, Jabalpur</SubHeading>
            <Description>
            I completed high school with math and science, which provided a solid foundation in subjects such as math, physics, chemistry, and computer science, enhancing problem-solving and critical thinking skills.         
                        <Skills>
                     <Skill>Computer Fundamentals</Skill>
                     <Skill>Mathematics</Skill>
                     <Skill>Physics</Skill>
                     <Skill>Chemistry</Skill>
                     
                     
                </Skills>
            </Description>
            
        </Course>

    </Container>
    
    <AnButton>
       <a href={pdf}> View Full Resume </a>  
    </AnButton>
    <span className="bi bi-arrow-right">&nbsp; </span>

  

    </Education>
)


}