import type { NextPage } from 'next'
import Head from 'next/head'

import React, { useState } from 'react'

import  { Toaster } from 'react-hot-toast';

import Agent from '../components/Agent';

const Home: NextPage = () => {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-1 bg-gray-00 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Toaster/>
   

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


