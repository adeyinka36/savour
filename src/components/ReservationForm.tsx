import React, { useState } from 'react';
import styled from 'styled-components';
import {useContext} from "react";
import {AppContext} from "@/pages";

type styleProps = {
    error: boolean
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  color: #000;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  position: absolute;
  bottom: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: auto;
    min-width: 600px;
    padding-bottom: 0;
    position: relative;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  background-color: rgba(0,0,0,0);
`;


const Input = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props: styleProps)=> props.error ? 'red' : 'white'};
  text-align: center;
  margin-left: .5rem;
  margin-right: .5rem;
  margin-top: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0);
  &:after {
    content:"📅";
    font-weight: 900;
    font-size: 16px;
    color: white;
    position: relative;
    right: 1rem;
    pointer-events: none;
    
  }
`;

const Select = styled.select`
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  color: white;
  text-align: center;
  margin-left: .5rem;
  margin-right: .5rem;
  margin-top: .5rem;
  background-color: rgba(0,0,0,0);
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: rgba(0,0,0,0);
  width: 175px;

  &:hover {
    background-color: #333;
  }
  @media screen and (min-width: 768px) {
    border-radius: 0;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    height: 3.85rem;
  }
`;

function ReservationForm() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(2);
    const [error, setError] = useState(false)
    const people = [2,3,4,5,6,7,8];

    const {message, setFormType, setMessage} = useContext(AppContext)

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(new Date(e.target.value));
        if(e.target.value){
            setError(false)
            return
        }
    };

    const handleNumberOfPeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNumberOfPeople(Number(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!selectedDate){
            setError(true)
            return
        }
        setFormType('none')
        setMessage('Message submitted')
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <Input type="datetime-local" id="datetime" onChange={handleDateChange} error={error}/>
            </InputContainer>

            <InputContainer>
                <Select id="number-of-people" value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
                    <option value="1">1 person</option>
                    {people.map(p=><option key={p} value={p}>{p} people</option>)}
                </Select>
            </InputContainer>
            <Button type="submit">Reserve</Button>
        </FormContainer>
    )
}

export default ReservationForm
