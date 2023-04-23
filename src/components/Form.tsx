import React, {useState, ReactDOM, useEffect, ChangeEventHandler} from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";
import {useContext} from "react";
import {AppContext} from "@/pages";

type mounted = true | false;
type FormProps = {
    fields: Field[];
};

type Field = {
    name: string;
    label: string;
    type: "text" | "email" | "password" | "number" | "tel" | "textarea";
};

type FormData = {
    [key: string]: string;
};

const Container = styled.div`
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0,0,0,.9);
  justify-content: center;
  align-items: center;
  p{
    margin: 1rem;
    color: red;
    text-align: center;
  }
`
const FormContainer = styled.form`
  background-color: rgba(0,0,0,0);
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FieldLabel = styled.label`
  margin-bottom: 5px;
`;

const FieldInput = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  height: 200px;

`

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Cancel = styled.span`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffffff;
  border: none;
  margin-top: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  &:hover{
    background-color: wheat;
  }
`

const Form: ({onSubmit, fields}: FormProps) => void = ({ onSubmit, fields }) => {
    const [formData, setFormData] = useState<FormData>({});
    const [mount, setMount] = useState(fields.length>1);
    const [fieldsValid, setFieldsValidity] = useState<boolean|null>(null)

    const {setFormType, setMessage} = useContext(AppContext)

    useEffect(()=>{
        setMount(fields.length>1)
    },[fields])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | ChangeEventHandler<HTMLTextAreaElement>) => {
        const { name, value } = event?.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!(Object.keys(formData).length >= 4)){
            setFieldsValidity(false)
            return
        }
        for (let formDataKey in formData) {
            if(!formData[formDataKey]){
                console.log(formData)
                setFieldsValidity(false)
                return
            }
        }
        setFieldsValidity(true)
        setFormType('none')
        setFormData({})
        setMessage('Message submitted')

    };

    const close =()=>{
        setFormType('none')
        setMessage('')
    }

    return mount ? createPortal(
        <Container className="container">
        <FormContainer onSubmit={handleSubmit}>
            { fieldsValid === false ? <p> Please complete all fields</p> : null }
            {fields.map((field) => {
                  return  (
                        <FieldContainer key={field.name}>
                            <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
                            {field.type !== 'textarea' ? <FieldInput
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                            /> : <TextArea
                                name={field.name}
                                id={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                            />}
                        </FieldContainer>
                    )
            }
            )}
            <SubmitButton type="submit">Submit</SubmitButton>
            <Cancel onClick={close}>Cancel</Cancel>
        </FormContainer>

        </Container>,
        document.getElementById('form-portal')
    ) : null;
};

export default Form;