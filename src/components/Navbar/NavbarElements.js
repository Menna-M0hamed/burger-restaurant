import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaHamburger} from "react-icons/fa";

export const Nav = styled.nav`
 background-color:#150f0f;
 height:70px;
 display:flex;
 /* justify-content:center; */
 font-weight:700;
 `;

 export const NavLink = styled(Link)`
 color:#fff;
 font-size:2rem;
 display:flex;
 align-items:center;
 text-decoration:none;
 margin-left: 2rem;
 cursor:pointer;

 @media screen and (max-width: 325px){
     margin-left:1rem ;
 }
 `;

 export const NavIcon = styled.div`
 display:block;
 position:absolute;
 top:0px;
 right:0px;
 color:#fff;
 cursor:pointer;

 p{
     transform:translate(-40%, 50%);
     font-weight:bold;
     font-size: 1.6rem;
 }
 `;

 export const Burger = styled(FaHamburger)`
 font-size:2rem;
 margin-right: 6px;
 /* transform:translate(-50%, -15%); */
 
 `;