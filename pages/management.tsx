import React, { useState } from 'react'
import Management from '../components/Management'
import  { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast'
import {  RiLockPasswordLine } from 'react-icons/ri'

function management() {
    const [password, setPassword] = useState<string>("")
  const passwordone = "5050"

  const wrongPass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    toast('Wrong PinCode!',{
      icon:'👿'
    })
  }
  return (
     <div className="flex min-h-screen flex-col items-center justify-center py-1">
    <Toaster/>
    { password == passwordone ? (
            <Management/>
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
    
   
 </div>
  )
}

export default management