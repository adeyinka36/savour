import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from "@/components/Main";
import Body from "@/components/Body";
import Prices from "@/components/Prices";
import Form from "@/components/Form";
import {createContext, useRef, useState} from "react";
import Header from "@/components/Header";
import FoodAndDrinkMenu from "@/components/FoodAndDrinkMenu";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";

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
interface RefObject<T> {
    readonly current: T | null
}
export default function Home() {
    const [formType, setFormType] = useState('none')
    const [message, setMessage] = useState('')

    const vouchers: RefObject<any> = useRef()
    const foodAndDrinks: RefObject<any> = useRef()
    const pricing: RefObject<any> = useRef()
    const main: RefObject<any> = useRef()

    let fields;
    if(formType === 'none'){
        fields = []
    }else if(formType === 'contact'){
        fields = contactFields
    }
    const scroll = (location) => {
        switch (location){
            case 'foodAndDrinks':
                foodAndDrinks.current.scrollIntoView()
                break;
            case 'pricing':
                pricing.current.scrollIntoView()
                break;
            case 'vouchers':
                vouchers.current.scrollIntoView()
                break;
            case 'main':
                main.current.scrollIntoView()
                break;
        }
    };
  return (
    <>
      <Head>
        <title>FOODIE</title>
        <meta name="description" content="Worlds best food and drink buffet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppContext.Provider value={{formType, setFormType, message, setMessage}}>
     <Header scroll={scroll}/>
      <div id="notification"></div>
      <div id="form-portal"></div>
      <Main ref={main}/>
      <Body ref={vouchers}/>
      <Prices ref={pricing}/>
      <FoodAndDrinkMenu ref={foodAndDrinks}/>
      <Footer/>
        <Form fields={fields}/>
        <Notification />
      </AppContext.Provider>
    </>
  )
}
