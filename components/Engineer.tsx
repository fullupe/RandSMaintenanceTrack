import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'

import Data from "../Data"
import ReactTimeago from 'react-timeago';

function Engineer() {

    const [input, setInput] = useState<string>('')

    const [status, setStatus] = useState<string>('')

   const [tpmInfo, setTpmInfo] = useState<any>('')


  const [DataApi, setDataApi] = useState<any>([])

  const [reflesh, setReflesh] = useState<boolean>(false)

  const baseUrl = process.env.BaseUrl

   //console.log(Data)
  

   const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    DataApi.filter((val: { tpm: string; })=>{
         if(!input){
         return val
         }else if (val.tpm?.toLowerCase().includes(input?.toLowerCase())){
           //return val
           setTpmInfo(val);
           toast('Record Fund!',{
            icon:'🚀'
          })
         }
       })
   }


   useEffect(() => {
    axios.get(`https://sheet.best/api/sheets/0e6472cf-f417-4ce9-9618-7717b52883b4`).then((response)=>{
    setDataApi(response.data)
    console.log(response.data)
    //setLoading(false)
  }).catch((error)=>{
    console.log(error)
  })
},[reflesh])





   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    axios
      .patch(
        `https://sheet.best/api/sheets/0e6472cf-f417-4ce9-9618-7717b52883b4/tpm/*${input}*`,
       
        { 
          status,
          createdAt: new Date().toLocaleString()
        }
      )
      .then((response) => {
        //setReflesh(!reflesh)
        console.log(response.data)
        //setSimserialnumber('')
        toast('Records Updated!',{
          icon:'🚀'
        })
       
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <div
      className={`py-4  px-6 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relative  flex flex-col h leading- w-4/5 text-white mt-8  overflow-hidden`}
    >
      <Toaster />
      <div className="felx flex-col space-y-2">
        <div className=" h-96 bg-gray-00  items-center flex flex-col pt-8 ">
          <p className="text-gray-900 text-xl font-bold border-b mb-4">
            Engineer's Check{' '}
          </p>

          <form className="flex items-center mt-3 space-x-3 mb-4">

           
          <div className="flex w-full space-x-8">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={4}
              type="number"
              autoFocus={true}
              placeholder="Enter Tpm Number"
              className=" p-1 w-44 flex-1 text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
            />
            {/* <button disabled={!input} className="text-white rounded-lg bg-blue-700 disabled:text-gray-800 cousor-pointer p-2 ">Search</button> */}
            <button
              onClick={handleSearch}
              disabled={!input}
              className="bg-transparent  hover:bg-blue-500 disabled:text-gray-800 text-white font-semibold hover:text-white py-0 ml-2 px-2 border border-white hover:border-transparent rounded"
            >
             <AiOutlineSearch className="text-white h-8 w-8 p-1 disabled:text-gray-800" />
            </button>
            </div>


          </form>

          <div className=" text-gray-900 items-center flex flex-col w-full ">
            <p className="border-b text-white">Terminal Details</p>

            <div className="w-full flex flex-col mt-4 items-right space-y-4">

            
            <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Retailer Name: <small className="ml-2 text-center ">{tpmInfo.agentName}</small>
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
                Duration: <small className="ml-2 text-center ">{<ReactTimeago
                className="text-lg text-white"
                date={tpmInfo.createdAt}/>}</small>
              </p>

             
            </div>
          </div>
        </div>

        <hr />

        <form className=" flex flex-col h-full w-full bg-yellow-00 p-4 space-y-3">
         
          <label>Change Status</label>

          <select
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
              <optgroup label="Status">
            <option value="Ready ✅">Ready</option>
            <option value="Working On">Working On</option>
            <option value="On Test">On Test</option>
            <option value="Eee Management">See Management</option>
            <option value="Waiting for Part">Waiting for Part</option>
            <option value="Watter Entered">Water Entered</option>
            <option value="Card Damage by User">Card Damange by User</option>
            </optgroup>
          </select> 
          <button disabled={!input} onClick={handleSubmit}className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded disabled:text-gray-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Engineer
