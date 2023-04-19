import styled from 'styled-components'
import Image from "next/image";
import React, {LegacyRef, useEffect, useRef, useState} from "react";
import {bool} from "prop-types";


type bodyProps = {
    hospitalityVisible: boolean
}
const Con =  styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
   background-color: black;
   width: 100%;
  .top{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .promo{
      margin-top: 2rem;
    }
    div{
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 1.5rem;
      h2{
        font-size: 2.5rem;
      }
      p{
        margin-top: 2rem;
        font-size: 1rem
      }
      p, h2{
        color: wheat;
        text-align: center;
      }
    }
  }
  .bottom{
    width: 100%;
    .hospitality{
      transition: transform ease-out 1s;
      transform: translateX(${(props: bodyProps)=>props.hospitalityVisible ? 0 : '200%'});
      background-color: rgba(47, 79, 79, .2);
      height: 500px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      margin-bottom: 4rem;
      h2{
        background-color: rgba(47, 79, 79, 0);
        font-size: 2rem;
        color: wheat;
        letter-spacing: .5rem;
      }
    }
    .top-bottom{
      p, h2{
        color: wheat;
        text-align: center;
      }
      h2{
        margin-bottom: 1rem;
      }
    }
  }
  
  .jiggle{
    position: relative;
    animation-name: jiggle;
    animation-delay: 0s;
    animation-duration: 10s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    overflow-x: hidden;
  }
  @keyframes jiggle{
    0%{
      transform: rotate(5deg);
    }
    20%{
      transform: rotate(-5deg);
    }
    40%{
      transform: rotate(5deg);
    }
    60%{
      transform: rotate(-5deg);
    }
    80%{
      transform: rotate(2deg);
    }
    90%{
      transform: rotate(-2deg);
    }
    100%{
      transform: rotate(0);
    }
    
  }
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    .top{
      margin-top: 10rem;
      width: 50%;
      p{
        font-size: 1.5rem;
      }
    }
    .bottom{
      margin-top: 10rem;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .hospitality{
        margin-right: 2rem;
        h2{
          font-size: 2.7rem;
          background-color:rgba(47, 79, 79, 0);
        }
      }
      .top-bottom{
        h2{
          font-size: 3rem;
        }
        p{
          font-size: 1.5rem;
          padding: 1rem;
        }
      }
    }
    .top{
      .top-bottom{
        p{
          font-size: 1.5rem;
          padding: 1rem;
        }
      }
    }
  }
`
interface RefObject<T> {
    readonly current: T | null
}
const Body = () =>{
    let  hospitality: RefObject<any> = useRef()
    let  top: RefObject<any> = useRef()
    let  bottom: RefObject<any> = useRef()

    const [hospitalityVisible, setHospitalityVisibility] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            setHospitalityVisibility(entries[0].isIntersecting)
        },{rootMargin: '-100px'})
        observer.observe(hospitality.current)
    },[])


    return(
        <Con hospitalityVisible = {hospitalityVisible}>
          <div className={`top ${ hospitalityVisible ? 'jiggle' : ''}`}>
              <Image className="promo" src="/images/discount2.png" alt="20% off discount" width="270" height="270"/>
              <Image className="promo" src="/images/discount1.png" alt="20% off discount" width="270" height="270"/>
              <div className="top-bottom">
                  <h2>GET YOUR 10% DISCOUNT NOW</h2>
                  <p>Get 10% off the food bill for up to 4 people with a valid Blue Light or Defence card; Monday – Thursday ONLY. This is available at all our Sakku sites. Please see full terms and conditions at bottom of page.</p>
              </div>
          </div>
          <div ref={hospitality} className="bottom">
              <div  className="hospitality">
                  <h2>HOSPITALITY</h2>
                  <h2>DISCOUNT</h2>
              </div>
              <div className="top-bottom">
                  <h2>GET YOUR 10% DISCOUNT NOW</h2>
                  <p>Get 10% off the food bill for up to 4 people with a valid Blue Light or Defence card; Monday – Thursday ONLY. This is available at all our Sakku sites. Please see full terms and conditions at bottom of page.</p>
              </div>
          </div>
        </Con>
    )
}


export default Body;