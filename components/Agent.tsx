import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import toast, { Toaster } from 'react-hot-toast'
import Typewriter from 'typewriter-effect'

import Data from "../Data"
//import ReactTimeago from 'react-timeago';
import TimeAgo from "react-timeago"


//const URL: string | undefined

function Agent() {

    const [input, setInput] = useState<string>('')



  const [tpmInfo, setTpmInfo] = useState<any>('')

  const [DataApi, setDataApi] = useState<any>([])

  const [reflesh, setReflesh] = useState<boolean>(false)

 

  const URL:string = process.env.NEXT_PUBLIC_BASE_URL as string



  console.log(DataApi)

  interface val  { 
    tpm:string
  }

  interface Ulr { 
    url:string | undefined
  }
  

   const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    DataApi.filter((val: val)=>{
         if(!input){
         return val
        //  }else if (val.tpm?.toLowerCase().includes(input?.toLowerCase())){
         }else if (val.tpm?.toLowerCase() ==input?.toLowerCase()){
           //return val
           setTpmInfo(val);
           //setDataApi(val)
           toast('Record Found!',{
            icon:'🚀'
          })
         }
       })
       setReflesh(!reflesh)
   }

  

   function httpGet(URLe: string | URL) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", URLe, false ); // false for synchronous request
    xmlHttp?.send( null );
    const ApiData = JSON.parse(xmlHttp.responseText)
    setDataApi(ApiData.data)
   
  }


    useEffect(() => {
    
    

      httpGet(URL)
   

  },[reflesh])

  return (
    <div
    className={`py-2 px-6 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relativee  flex flex-col h leading- w-4/5 text-white mt-8 mb-12 overflow-hidden absolute`}
  >
    <Toaster />
    <div className="felx flex-col space-y-2">
      <div className=" h- bg-gray-00  items-center flex flex-col mt-6 ">
        <p className="text-gray-900 text-2xl font-bold border-b mb-6 font-poppins italic ">
      
          Maintenance Check 📮 {' '}
        </p>

        <form className="flex items-center mt-3 space-x-3 mb-4">

         
        <div className="flex w-full space-x-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={4}
            type="number"
            autoFocus={true}
            placeholder="Enter Tpm#"
            className=" p-1 w-44 flex-1 text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
          />
         
          <button
          type="submit"
            onClick={handleSearch}
            disabled={!input}
            className="bg-transparent  hover:bg-blue-500 disabled:text-gray-800 text-white font-semibold hover:text-white py-0 ml-2 px-2 border border-white hover:border-transparent rounded"
          >
           <AiOutlineSearch className="text-white h-8 w-8 p-1 disabled:text-gray-800" />
          </button>
          </div>


        </form>

        <div className=" text-gray-900 items-center flex flex-col w-full">
          <p className="border-b text-white text-2xl italic font-poppins ">Terminal Details</p>

          <div className="w-full flex flex-col mt-2 items-right space-y-4">

          
          <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
              Retailer Name: <small className="ml-2 text-center uppercase ">{tpmInfo.agentName}</small>
            </p>

              <div className="flex space-x-1">
            <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
              Tpm#: <small className="ml-2 text-center ">{tpmInfo.tpm}</small>
            </p>

            <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
              {/* Status:  */}
              <small className="ml-2 text-center ">{tpmInfo.status}</small>
            </p>
              </div>
            <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
              Duration: <small className="ml-2 text-center ">
                <TimeAgo
                className="text-lg text-white"
                date={tpmInfo.createdAt}/></small>
            </p>

      
          </div>
        </div>
      </div>
       <div className="flex justify-center py-0 my-0">
         <p className="uppercase italic text-slate-300">{tpmInfo.branch}</p>
       </div>
      <hr />

      <div className=" flex flex-col  w-full bg-yellow-00 p-1">

        
          <div className=" flex flex-col pb-4 w-full justify-center  items-center bg-red-00">
              <p className="animate-bounce capitalize font-cinzel ">Safety-Tips</p>


        <p className="text-sm text-gray-300 font-tapestry italic">  *️⃣ Do Not hold paper whiles Printing ✊ </p>
              <Typewriter 
        options={{
          autoStart:true,
          loop: true,
          
        }}
          onInit={(typewriter) => {
            typewriter
             
              .typeString(' Do Not leave tpm under Rain  🌧  ')
              .pauseFor(2000)
              .start()
              .deleteAll()
              
          }}
        />

              {/* <p className="text-sm text-gray-300 italic">  *️⃣ Do Not hold paper whiles Printing ✊ </p> */}
              {/* <p className="text-sm text-gray-300 italic">  *️⃣ Do Not leave tpm under Rain  🌧 </p> */}


          </div>

      </div>
    </div>
  </div>
  )
}

export default Agent
