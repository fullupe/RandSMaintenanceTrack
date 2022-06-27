import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import React, { useState } from 'react'

import  { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'

import {  RiLockPasswordLine } from 'react-icons/ri'

import Receiption from '../components/Receiption'
import Agent from '../components/Agent';

const Home: NextPage = () => {

  const [password, setPassword] = useState<string>("")
  const passwordone = "5050"

  const wrongPass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    toast('Wrong PinCode!',{
      icon:'👿'
    })
  }

  //console.log(data)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1 bg-gray-00 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Toaster/>
      {/* <div className="top-0 right-0 left-0 bottom-0 absolute h-screen "> */}

    <div className="
   h-full flex-1 w-full bg-red-500 opacity-80">

 
   </div>
   <Agent/>

 

  <div className="h-full w-full flex-1 bg-blue-500  ">


  </div>










    </div>

      
  
  )
}

export default Home


