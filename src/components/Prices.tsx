import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {booleanLiteral} from "@babel/types";

type pricesProps = {
    topVisibility: boolean,
    bottomVisibility: boolean
}
const Con =  styled.div`
  margin-top: 4rem;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
      div {
        width: 90%;
        max-width: 450px;
        margin: 1rem;
        div{
          margin-top: -5px;
          p{
            font-size: 1.35rem;
            margin: .5rem;
          }
        }
        span{
          padding: 1rem;
        }
        span, div {
          border: 5px solid wheat;
          color: wheat;
          font-size: 1.5rem;
        }
      }
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
   .top, .bottom{
     transition: all ease-out .5s;
     opacity: ${(props: pricesProps) => props.topVisibility ? '1' : '.2'};
   }
  .top{
    transform: translateX(${(props: pricesProps) => props.topVisibility ? '0' : '-50%'});
  }
  .bottom{
    transform: translateX(${(props: pricesProps) => props.topVisibility ? '0' : '150%'});
  }
  @media (min-width: 760px) {
    .con {
      span {
        align-self: flex-start;
        margin-left: 1.4rem;
      }
      p{
        font-size: 2rem;
      }
    }
  }
`
interface RefObject<T> {
    readonly current: T | null
}
const Prices = ()=>{
    let  top: RefObject<any> = useRef()
    let  bottom: RefObject<any> = useRef()

    const [topVisibility, setTopVisibility] = useState(false)
    const [bottomVisibility, setBottomVisibility] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(e=>{
                    if (e.target.classList.contains('top')) {
                        setTopVisibility(e.isIntersecting)
                    } else {
                        setBottomVisibility(e.isIntersecting)
                    }
            })

        })
        observer.observe(top.current)
        observer.observe(bottom.current)

    },[])


    return(
        <Con topVisibility={topVisibility} bottomVisibility={bottomVisibility}>
            <div ref={top} className="con top">
                <span>
                    LUNCH
                </span>
                <div>
                    <p>Monday: £20</p>
                    <p>Tuesday: £20</p>
                    <p>Wednesday: £20</p>
                    <p>Thursday: £20</p>
                    <p>Friday: £20</p>
                    <p>Saturday: £30</p>
                    <p>Sunday: £30</p>
                </div>
            </div>
            <div ref={bottom} className="con bottom">
                <span>
                    DINNER
                </span>
                <div>
                    <p>Monday: £20</p>
                    <p>Tuesday: £20</p>
                    <p>Wednesday: £20</p>
                    <p>Thursday: £20</p>
                    <p>Friday: £20</p>
                    <p>Saturday: £30</p>
                    <p>Sunday: £30</p>
                </div>
            </div>
        </Con>
    )
}

export default Prices;
