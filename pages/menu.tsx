import React, { useState } from 'react'
import {  MdKeyboardArrowLeft } from 'react-icons/md'
import Engineer from '../components/Engineer'
import Management from '../components/Management'
import Receiption from '../components/Receiption'
import { AiOutlineMenu } from 'react-icons/ai';
import  { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'






function menu() {
   

 const [reception, setReception]= useState(false)
 const [engineers, setEngineers]= useState(false)
 const [management, setManagement]= useState(false)

 const [receptionCode,setReceptionCode]=useState('')
 const [engineerCode,setEngineerCode]=useState('')
 const [managementCode,setManagementCode]=useState('')

 const passwordR = "5050"
 const passwordE = "6060"
 const passwordM = "7070"

const showR = passwordR == receptionCode
const showE = passwordE == engineerCode
const showM = passwordM == managementCode

const wrongPass = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    toast('Wrong PinCode!',{
      icon:'👿'
    })
  }

  const refreshPage=()=>{
    setReceptionCode('')
    setEngineerCode('')
    setManagementCode('')

    setReception(false)
    setEngineers(false)
    setManagement(false)
  }

  const openAndCloseReceptionInput =()=>{
    setReception(!reception)
    setEngineers(false)
    setManagement(false)
      
  }
  const openAndCloseEngineerInput =()=>{
    setReception(false)
    setEngineers(!engineers)
    setManagement(false)

  }
  const openAndCloseManagementInput =()=>{
    setReception(false)
    setEngineers(false)
    setManagement(!management)

  }


  return (
      
    <div className="flex min-h-screen flex-col items-center justify-center py-1">
        <Toaster/>

        <div onClick={refreshPage} className="h-12  w-12 bg-red-500 rounded-full cursor-pointer flex p-4 mt-2 items-center justify-center">
        <AiOutlineMenu className="text-white font-bold text-2xl"/>
        
         
         </div>

        {
        showR &&
       <Receiption />  
        }
         {
        showE &&
        <Engineer/>
        }

        {
        showM &&
       <Management/>  
        }

  { !showR && !showE && !showM &&
    <div
    className={`py-4 flex-1  px-6 bg-whitee bg-gradient-to-r from-white to-red-200 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relative  flex flex-col h leading- w-4/5 text-white mt-8  overflow-hidden items-center justify-center`}
  >

      <div className=" bg-red-00 justify-center items-center flex flex-col h-96 w-full">
        
          <div className=" bg-white w-full p-2 flex m-2 rounded-3xl items-center">
             <MdKeyboardArrowLeft onClick={openAndCloseReceptionInput} className="h-10 w-10 p-1 cursor-pointer text-white bg-red-500 rounded-full"/>
            { 
            reception ? (
                    <input value={receptionCode} onChange={(e)=>setReceptionCode(e.target.value)} type="password" placeholder="PinCode" className=" outline-none flex-1 w-[50%] mx-4 text-black"/>
            ):(

                <div className=" h-14 w-14 bg-white flex-1 text-black items-center justify-center flex ">Reception</div>
            )
            }

              <div onClick={wrongPass} className=" h-16 w-16 rounded-full bg-red-500 items-center cursor-pointer  flex justify-center">
                 <p> Goal</p>
             </div>
          </div>



          <div className=" bg-white w-full p-2 flex m-2 rounded-3xl items-center">
             <MdKeyboardArrowLeft onClick={openAndCloseEngineerInput} className="h-10 w-10 p-1 cursor-pointer text-white bg-red-500 rounded-full"/>

             { 
            engineers ? (
                    <input value={engineerCode} onChange={(e)=>setEngineerCode(e.target.value)} type="password" placeholder="PinCode" className=" outline-none flex-1 w-[50%] mx-4 text-black"/>
            ):(

              <div className=" h-14 w-14 bg-white flex-1 text-black items-center justify-center flex ">Engineer's</div>
              )
            }

              <div onClick={wrongPass} className=" h-16 w-16 rounded-full bg-red-500 items-center cursor-pointer flex justify-center">
                 <p> Goal</p>
             </div>
          </div>



          <div className=" bg-white w-full p-2 flex m-2 rounded-3xl items-center">
             <MdKeyboardArrowLeft onClick={openAndCloseManagementInput} className="h-10 w-10 p-1 cursor-pointer text-white bg-red-500 rounded-full"/>

             { 
            management ? (
                    <input value={managementCode} onChange={(e)=>setManagementCode(e.target.value)} type="password" placeholder="PinCode" className=" outline-none flex-1 w-[50%] mx-4 text-black"/>
            ):(

              <div className=" h-14 w-14 bg-white flex-1 text-black items-center justify-center flex ">Management</div>

              )
            }
              <div onClick={wrongPass} className=" h-16 w-16 rounded-full bg-red-500 items-center cursor-pointer flex justify-center">
                 <p> Goal</p>
             </div>
          </div>

      </div>

    
  </div>
}

  </div>
  )
}

export default menu