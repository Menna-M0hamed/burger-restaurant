import styled from "styled-components";
import ImgBg from "../../images/Burger.jpg"

export const HeroContainer = styled.div`
 background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
 rgba(0,0,0,0.1)),
 url(${ImgBg});
 height:100vh;
 background-position:center;
 background-size:cover;
 `;

export const HeroContent = styled.div`
height: calc(100vh -75px);
max-height: 100%;
/* padding: 0rem calc((100vw -1300px) /2); */
`;

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 650px){
     width: 100%;
 }
`;


export const HeroH1 = styled.h1`
font-size: clamp(2.5rem, 10vw, 5rem);
margin-bottom: 2rem;
box-shadow: 3px 5px #ef9933;
letter-spacing: 3px;
width: 45%;

@media screen and (max-width: 770px){
    width: 65%;
 } 

@media screen and (max-width: 450px){
    width: 80%;
 } 

@media screen and (max-width: 365px){
    width: 90%;
 } 

@media screen and (max-width: 325px){
    width: 100%;
 } 

@media screen and (max-width: 285px){
    width: 110%;
 } 
`;

export const HeroP = styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border:none;
color:#fff;
background-color: #d30016;
transition: 0.2s ease-out;

&:hover{
    background-color: #ef9933;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`;
