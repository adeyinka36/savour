import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import {bool} from "prop-types";
import {useContext} from "react";
import {AppContext} from "@/pages";

type headerStyleProps = {
    drop: bool,
    scrollY: string
}
const Con  = styled.div`
  z-index: 1000;
  opacity: ${(props: headerStyleProps) => props.scrollY == 'up' ? '1' : '0'};
  transition: opacity .5s ease-out;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  width: 100vw;
  justify-content: center;
  align-items: center;
  ul{ li{ color: wheat}}
  h2{
    animation: switchOpacity  3s ease-in forwards infinite alternate;
    color: yellow;
    letter-spacing: .25rem;
  }

  @keyframes switchOpacity {
        0% {
          opacity: 1;
        }
        50%{
          opacity: .4;
        }
        100%{
          opacity: 1;
        }
    }
  
  .bars{
      justify-self: flex-start;
      padding-left: 1rem;
      display: inline-block;
      color: yellow;
      font-size: 3rem;
      &:hover{
        cursor: pointer;
        color: darkcyan;
      }
    }
  
  .main{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    .bars{
      position: absolute;
      left: 0;
      color: yellow;
    }
    ul{
      position: absolute;
      display: flex;
      flex-direction: column;
      top: ${(props: headerStyleProps)=>props.drop ? '8vh' : '-1000%'};
      transition: all ease-out .5s;
      width: 100%;
      background-color: black;
      li{
        width: 100%;
        padding: .5rem;
        text-align: center;
        &:hover{
          cursor: pointer;
          color: darkcyan;
      }
    }
  }
 
  @media (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .bars{
      display: none;
    }
    ul{
      flex-direction: row;
      position: relative;
      width: 55%;
      justify-content: space-between;
      li{
        color: wheat;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        width: auto;
      }
    }
`


const Header = ()=>{

    const [dropDown, dropDownChange] = useState(false);
    const [direction, setDirection] = useState('up');
    const {formType, setFormType} = useContext(AppContext)

    let oldScrollY = 0;
    const controlDirection = () => {
        if(window.scrollY > oldScrollY) {
            setDirection('down');
        } else {
            setDirection('up');
        }
        oldScrollY = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);

    const showContactForm = () =>{
        setFormType('contact')
    }

    return (
        <Con drop={dropDown} scrollY={direction}>
            <div className="main">
                    <FontAwesomeIcon icon={faBars} className="bars" onClick={()=> dropDownChange(!dropDown)}/>
                    <h2>SAVOUR</h2>
                <ul>
                    <li>FOOD & DRINKS</li>
                    <li>PRICING</li>
                    <li onClick={showContactForm}>CONTACT</li>
                    <li>VOUCHERS</li>
                </ul>
            </div>
        </Con>
    )
}


export default Header;