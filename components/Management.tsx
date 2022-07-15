import React, { useEffect, useState } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Data from '../Data'
import { FiCheckCircle } from "react-icons/fi";


function Management() {

    const URL:string = process.env.NEXT_PUBLIC_BASE_URL as string
    const [DataApi, setDataApi] = useState<any>([])
    const [reflesh, setReflesh] = useState<boolean>(false)

    // const [allGroup, setAllGroup] = useState<any>([])



    function httpGet(URL: string | URL) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", URL, false ); // false for synchronous request
        xmlHttp.send( null );
        const ApiData = JSON.parse(xmlHttp.responseText)
          setDataApi(ApiData.data)
      }
    
       useEffect(() => {
      console.log(DataApi)
        httpGet(URL)
    
    },[reflesh])

    
//groupBy BRANCH
    const result = DataApi.reduce(function(r: { [x: string]: any[]; }, a: { branch: string | number; }){
        r[a.branch]=r[a.branch] || [];
        r[a.branch].push(a);
        return r;

    },Object.create(null));



// total Tpm 
const TotalTpm = DataApi.length;


//   working tpm
 const TotalWorkingTpm = DataApi.filter((record: { status: string; })=>{

 return record.status=="Already Out"

})


const BranchTotalAlreadyOut =(branchArry: [])=>{

  const   ok: any[] =  branchArry.filter((record: { status: string; })=>{
      return  record.status=='Already Out'

      
})
 return ok.length
}





 const ActiveTpm = TotalWorkingTpm.length;

 const OtherTpm =TotalTpm - ActiveTpm;


 const ActivePercentage = Math.round((ActiveTpm / TotalTpm)*100)

 const OtherPercentage =Math.round((OtherTpm/TotalTpm)*100)




 const newdata = Object.entries(result)



  return (
      <div className="h-screen w-full p-2 items-center flex justify-center">
    <div
      className={`py-3 pb-4  items-center px-3 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-screen md:max-w-md !important text-lg rounded-2xl relative  flex flex-col  w-full  text-white mt-8  overflow-hidden`}
    >
       <div className=" bg-white flex flex-col w-full h-2/4 mb-2 shadow-xl items-center justify-center space-x-2 rounded-2xl">
                    <p className="text-gray-500 text-sm py-4  mb-2  animate-bounce font-cinzel ">Other Means: Tpm Under Maintenance or Ready for picUp..</p>
        <div className="bg-whites flex w-full h-2/4 mb-2 shadow-xls items-center justify-center space-x-2 rounded-2xl">
                   
            <div className=" shadow-xl border-2 items-center  border-red-300  flex flex-col px-6">
            <div className="bg-[#AAF7D3] border-2  -gradient-to-r from-sky-500 to-indigo-500 p-12 rounded-full w-12 items-center justify-center h-12 flex  m-1"> 
            <p className="font-cinzel text-orange-500  text-2xl">{OtherPercentage}%</p>
            </div>
            <p className="text-gray-500 text-sm pb-2 font-cinzel ">Other/Repairs</p>
            </div>

            <div className="shadow-xl border-2 items-center border-red-300 flex flex-col px-6">
            <div className="bg-[#AAF7D3] border-2  -gradient-to-r from-sky-500 to-indigo-500 p-12 rounded-full w-12 items-center justify-center  h-12 flex m-1">
                <p className="text-2xl text-orange-500 font-cinzel">{ActivePercentage}%</p>
            </div>
            <p className="text-gray-400 text-sm pb-2 font-cinzel">Active Machine</p>
            </div>
        </div>

        </div>
        
        <div className="bg-white  flex  w-full h-3/4 shadow-xl rounded-2xl items-center flex-col pt-1">
           

        <Swiper className="flex  flex-col h-full w-80 md:w-2/2 gap-5 mt-4 "
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
        
      >
        {newdata.map((review: any[])=>(

        <div>
         
     
          
        <SwiperSlide key={0} className=" flex  mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-2 select-none border-2 rounded-lg bg-gray-000 ">
        
       
            <div className="flex   space-y-2 flex-col items-start w-full">

            <p className="text-red-500 italic justify-self-center font-tapestry">{review[0]}</p>

            {
              console.log("list",review[1].filter((val:{ status: string;})=>val.status=='Working On').length)
            }

           
                    <div className="flex shadow-xl bg-white   gradient-to-r from-sky-00 to-indigo-00 opacity-00 p-1 rounded-md   w-full justify-between"> 
                  
                    <div className="text-xs w-full  flex  items-start p-2 space-x-1 ">


                     {/* left */}
                     <div className=" w-full flex flex-col items-start space-y-2">

                       <div className="bg-[#A6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                         <FiCheckCircle className="text-red-500"/>
                         <small className="text-orange-500">Working On</small>
                         <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='Working On').length}</small>
                       </div>


                       <div className="bg-[#A6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                       <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">Ready</small>
                      <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='Ready ✅').length}</small>
                      </div>

                      <div className="bg-[#C6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                      <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">On Test</small>
                      <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='On Test').length}</small>
                        </div>

                        <div className="bg-[#C6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                        <FiCheckCircle className="text-red-500"/>
                         <small className="text-orange-500">See Management</small>
                         <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='See Management').length}</small>
                        </div>
                      </div>


                       {/* right */}
                      <div className=" w-full flex flex-col items-start space-y-2">

                      <div className="bg-[#C6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                      <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">Waiting for Part</small>
                      <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='Waiting for Part').length}</small>
                      </div>

                      <div className="bg-[#C6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                      <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">Water Entered</small>
                      <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='Water Entered').length}</small>
                      </div>

                      <div className="bg-[#A6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                      <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">Card Damage by User</small>
                      <small className="text-orange-500">{review[1].filter((val:{ status: string;})=>val.status=='Card Damage by User').length}</small>
                      </div>

                      <div className="bg-[#A6F7D3] px-0 py-1 items-center flex flex-col justify-center w-full rounded-lg">
                      <FiCheckCircle className="text-red-500"/>
                      <small className="text-orange-500">Other</small>
                      <small className="text-orange-500">{0}</small>
                      </div>
                     </div>

                    </div>
                    
                    </div>  


                    <div className="w-full bg-yellow-00 h-full">

                        <div className=" shadow-xl border-2 items-center flex flex-cold px-6">


                       
                        <div className="flex flex-col">
                        <div className="bg bg-[#AAF7D3] -gradient-to-r from-sky-500 to-indigo-500 p-10 rounded-full border-2 border-red-300  w-12 items-center justify-center h-12 flex  m-4"> 
                        <p className="font-cinzel text-orange-500 text-2xl">{Math.round(((review[1].length-BranchTotalAlreadyOut(review[1]))/review[1].length)*100)}%</p>
                        </div>
                        <p className="text-gray-500 text-sm pb-2 font-cinzel ">Other/Repairs</p>
                        </div>

                       <div className="flex flex-col">
                        <div className="bg-[#AAF7D3] -to-r from-sky-500 to-indigo-500 p-10 rounded-full border-2 border-red-300 w-10 items-center justify-center h-12 flex  m-4"> 
                        <p className="font-cinzel text-orange-500 text-2xl">{Math.round((BranchTotalAlreadyOut(review[1])/review[1].length)*100)}%</p>
                        </div>
                        <p className="text-gray-500 text-sm pb-2 font-cinzel">Active Machines</p>
                       </div>


                        </div>


                        
                        

                    </div>

                    
            </div>

        
        </SwiperSlide>
        
      </div> 
        
        ))}

      </Swiper>

        </div>
      
    </div>
    </div>
  )
}

export default Management
