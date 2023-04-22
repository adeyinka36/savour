import styled from "styled-components"
import Image from "next/image";

const Con = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top{
    margin-top: 2.5rem;
    span{
      color: white;
      font-size: 2.25rem;
      letter-spacing: .5rem;
      font-weight: bold;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .bottom{
    width: 100%;
    height: 10vh;
    align-self: flex-end;
  }
`


const Footer = () => {


    return (
        <Con>
            <div className="top">
                <span>SAVOUR</span>
                <Image src="/images/spin.png" alt="dragon" width="350" height="350"/>
            </div>
        </Con>
    )
}

export default Footer