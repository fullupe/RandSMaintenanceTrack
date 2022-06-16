import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import React, { useState } from 'react'

import  { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'

import {  RiLockPasswordLine } from 'react-icons/ri'

import Receiption from '../components/Receiption'

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

   { password == passwordone ? (
               <Receiption />
          ):(
            <div className="  z-10 absolute flex flex-col h-96 px-12 bg-white justify-center items-center shadow-xl rounded-lg ">
                      
                        <RiLockPasswordLine className="h-10 w-10 p-1 text-blue-900"/>
            <div className="flex bg-blue-00 mt-2 space-x-4 border p-2 rounded-lg outline-none">
            {/* <p>password</p> */}
            <input placeholder="PinCode" className="outline-none  " value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
          </div>
          <button onClick={wrongPass} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4">
  LogIn
</button>

          </div>
          )
            
          }

  <div className="h-full w-full flex-1 bg-blue-500  ">


  </div>










    </div>

      
    // </div>
  )
}

export default Home

// export const getStaticProps:GetStaticProps = async ()=>{

//   const res = await fetch('https://script.google.com/macros/s/AKfycbxe5kQvOnD_YypEX4_2g6YYkEfMejvE9WKx5PgMblHz/dev?action=900');

//   const data = res.json(); 

//   return{ 
//     props:{ 
//      data,
//     }
//   }

// };
