import styled from  'styled-components'
import {useState} from "react";
import ReservationForm from "@/components/ReservationForm";


const Con = styled.div`
  .main{
    position: relative;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at center, transparent 0%, black 100%);
    background-color: rgba(0,0,0,.2);
    justify-content: center;
    align-items: flex-end;
    display: flex;
    padding-bottom: 5rem;
    .date-time{
      color: white;
    }
    .form{
      input{
        opacity: 1;
      }
    }
  }
    width: 100vw;
    max-width: 100%;
    height: 50vh;
    background-image: url("/images/image3-min.jpg");
    background-size: cover;
    background-position: center;
    margin-top: 10vh;
    animation: changeBackgrounds 45s ease-in forwards infinite alternate;
  @keyframes changeBackgrounds{
    0%{
      background-image: url("/images/image3-min.jpg");
    }
    30%{
      background-image: url("/images/image1-min.jpg");
    }
    60%{
      background-image: url("/images/image2-min.jpg");
    }
    100%{
      background-image: url("/images/image3-min.jpg");
    }
  }
  @media (min-width: 400px) {
    height: 50vh;
  }
  @media (min-width: 768px) {
    height: 100vh;
    .main{
      height: 100vh;
    }
  }
  
`

const Main = ()=>{
    const [selected, setDate] = useState(new Date());


    return (
        <Con>
            <div className="main">
                <ReservationForm className="form"/>
            </div>

        </Con>
    )
}

export default Main