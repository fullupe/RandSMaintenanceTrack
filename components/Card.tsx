import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import Data from "../Data"

function Card() {
  const [input, setInput] = useState<string>('')

  const [simserialnumber, setSimserialnumber] =useState<string>('')
  const [simNumber, setSimNumber] = useState<string>('')
  const [simType, setSimType] = useState<string>('')

  const [tpmInfo, setTpmInfo] = useState<any>('')

  //console.log(Data)
  

   const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
       Data.filter((val)=>{
         if(!input){
         return val
         }else if (val.tpm?.toLowerCase().includes(input?.toLowerCase())){
           //return val
           setTpmInfo(val)
         }
       })
   }

   const handleSubmit = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
       e.preventDefault()

       const sendData = {
        simserialnumber,
        simNumber,
        simType,
       }

       console.log(sendData)
    
       
   }
    
  
  return (
    <div
      className={`py-4 px-6 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relative  flex flex-col h leading- w-4/5 text-white mt-8 mb-12 overflow-hidden`}
    >
      <div className="felx flex-col space-y-6">
        <div className=" h-96 bg-gray-00  items-center flex flex-col ">
          <p className="text-gray-900 text-xl font-bold border-b ">
            Maintenance Check{' '}
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

          <div className=" text-gray-900 items-center flex flex-col w-full">
            <p className="border-b text-white">Terminal Details</p>

            <div className="w-full flex flex-col mt-2 items-right space-y-4">

            
            <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Retailer Name: <small className="ml-2 text-center ">{tpmInfo.retailerName}</small>
              </p>

                <div className="flex space-x-1">
              <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Retailer#: <small className="ml-2 text-center ">{tpmInfo.retailerid}</small>
              </p>

              <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                LMC: <small className="ml-2 text-center ">{tpmInfo.lmc}</small>
              </p>
                </div>



              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Sim Serial: <small className="ml-2 text-center ">{tpmInfo.sim_Serial}</small>
              </p>

              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                sim Number: <small className="ml-2  ">{tpmInfo.sim_number}</small>
              </p>
              <p className="p-1  px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Sim Type: <small className="ml-2    ">{tpmInfo.sim_type}</small>
              </p>
            </div>
          </div>
        </div>

        <hr />

        <form className=" flex flex-col h-full w-full bg-yellow-00 p-4 space-y-3">
          <input
            value={simserialnumber}
            onChange={(e) => setSimserialnumber(e.target.value)}
            //maxLength={4}
            type="number"
            autoFocus={true}
            placeholder="Enter New Serial Number"
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
          />

          <input
            value={simNumber}
            onChange={(e) => setSimNumber(e.target.value)}
            //maxLength={4}
            type="number"
            autoFocus={true}
            placeholder="Enter New Sim Number"
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
          />
          <label>Choose Sim Type</label>

          <select
            className=" p-2 flex w-full text-xl rounded-lg bg-gray-100 text-black outline-none placeholder:text-xl"
            onChange={(e) => setSimType(e.target.value)}
            value={simType}
          >
              <optgroup label="Sim Type">
            <option value="Mtn">Mtn</option>
            <option value="Tigo">Tigo</option>
            <option value="Voda">Voda</option>
            <option value="Glo">Glo</option>
            </optgroup>
          </select>
          <button onClick={handleSubmit}className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Card
