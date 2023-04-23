import styled from "styled-components"
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import Image from "next/image";
import {useContext} from "react";
import {AppContext} from "@/pages";


const Con  = styled.div`
  z-index: 9999;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.9);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  p{
    font-size: 1.5rem;
    color: white;
    letter-spacing: .25rem;
    background-color: rgba(0,0,0,0);
    text-align: center;
  }
  button{
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ffffff;
    border: none;
    margin-top: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

`


const Notification =  () => {

    const   {message, setMessage, setFormType} = useContext(AppContext)

    const close = ()=>{
     setMessage('')
     setFormType('none')

     console.log('closing notification')
    }


    return  message.length ? createPortal(
        <Con>
            <Image src="/images/tick.png" alt="success sign" width="250" height="250" />
            <p>{message}</p>
            <button onClick={close}>Close</button>
        </Con>,
        document.getElementById('notification')
    ): null
}


export default Notification;