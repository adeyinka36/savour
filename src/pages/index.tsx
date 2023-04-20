import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from "@/components/Main";
import Body from "@/components/Body";
import Prices from "@/components/Prices";
import Form from "@/components/Form";
import {createContext, useState} from "react";
import Header from "@/components/Header";

export const AppContext =  createContext({});

const contactFields = [
    {
        name: "firstName",
        label: "First Name",
        type: "text",
    },
    {
        name: "lastName",
        label: "Last Name",
        type: "text",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
    },

];
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [formType, setFormType] = useState('none')
    let fields;
    if(formType === 'none'){
        fields = []
    }else if(formType === 'contact'){
        fields = contactFields
    }
  return (
    <>
      <Head>
        <title>FOODIE</title>
        <meta name="description" content="Worlds best food and drink buffet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main/>
      <AppContext.Provider value={{formType, setFormType}}>
     <Header/>
      <div id="notification"></div>
      <div id="form-portal"></div>
      <Body/>
      <Prices/>
        <Form fields={fields}/>
      </AppContext.Provider>
    </>
  )
}
