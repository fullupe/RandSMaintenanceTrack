import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import TimeAgo from 'react-timeago'

import { BallTriangle,Circles } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Data from '../Data'

var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp

function Receiption() {
  const[Loading, SetLoading] = useState<boolean>(false)

    const URL:string = process.env.NEXT_PUBLIC_BASE_URL as string

    const URLUpdate:string = process.env.NEXT_PUBLIC_BASE_URL_UPDATE as string

  const [input, setInput] = useState<string>('')

  const [tpmInfo, setTpmInfo] = useState<any>('')

  const [DataApi, setDataApi] = useState<any>([])

  const [reflesh, setReflesh] = useState<boolean>(false)

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  //console.log(Data)

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    DataApi.filter((val: { tpm: string }) => {
      if (!input) {
        return val
      } else if (val.tpm?.toLowerCase().includes(input?.toLowerCase())) {
        //return val
        setTpmInfo(val)
        toast('Record Found!', {
          icon: '🚀',
        })
        setReflesh(!reflesh)
      }
    })
  }



  function httpGet(URL: string | URL) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', URL, false) // false for synchronous request
    xmlHttp.send(null)
    const ApiData = JSON.parse(xmlHttp.responseText)
    setDataApi(ApiData.data)
  }

  useEffect(() => {
    //  var URL="https://script.google.com/macros/s/AKfycbw4gyPjd3G9SQysqlFEz75sZlK9eDmTjf_nbk8r09SwHdB0dmQlxmuVuDa0wooJ6cy4fQ/exec?action=getData"
    //var URL="https://script.google.com/macros/s/AKfycbzQlbuOEpenxV-zxSQMPrKB8ukhYeHn4Snkjmo6LqxXbExs4rV4RGaVd0guqctPTkX0sA/exec?action=900"

    httpGet(URL)

    //  console.table(httpGet(URL))
  }, [reflesh])

  const handleSubmitIn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    const request = {
      tpm: tpmInfo.tpm,
      agentName: tpmInfo.agentName,
      status: 'Working On',
      branch: tpmInfo.branch,
      //createdAt: new Date().toDateString(),
      createdAt: new Date(),
    }
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('POST', URLUpdate, true) // false for synchronous request

    if(xmlHttp.readyState==1){
      SetLoading(true)
    }else {
      SetLoading(false)
    }

    xmlHttp.send(JSON.stringify(request)) // Make sure to stringify

    xmlHttp.onload = function () {
      SetLoading(false)
      // Do whatever with response
      //console.log(request)
      //alert(xmlHttp.responseText)
      toast('Records Updated!', {
        icon: '🚀',
      })
      console.log(xmlHttp.responseText)
      setInput('')
      setReflesh(!reflesh)
    }
    xmlHttp.onerror = function () {
      alert(xmlHttp.responseText)
      console.log(request)
    }

    
  }

  const handleSubmitOut = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const request = {
      tpm: tpmInfo.tpm,
      agentName: tpmInfo.agentName,
      status: 'Already Out',
      branch: tpmInfo.branch,
      createdAt: new Date(),
    }
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('POST', URLUpdate, true) // false for synchronous request

    if(xmlHttp.readyState==1){
      SetLoading(true)
    }else {
      SetLoading(false)
    }

    xmlHttp.send(JSON.stringify(request)) // Make sure to stringify

    xmlHttp.onload = function () {
      SetLoading(false)
      // Do whatever with response
      //console.log(request)
      //alert(xmlHttp.responseText)
      toast('Records Updated!', {
        icon: '🚀',
      })
      console.log(xmlHttp.responseText)
      setInput('')
      setReflesh(!reflesh)
    }
    xmlHttp.onerror = function () {
      alert(xmlHttp.responseText)
      console.log(request)
    }

  }

  return (
    <div
      className='py-4 px-6 bg-whitee bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relativee absolutev  flex flex-col h leading- w-4/5 text-white mt-8 mb-12 overflow-hidden'
    >

      
      <Toaster />
      <div className="felx flex-col space-y-6">
        <div className=" h- bg-gray-00  items-center flex flex-col mt-8 ">
          <p className="text-gray-900 text-2xl font-bold border-b mb-8 italic font-poppins ">
            Receiption Check 📮{' '}
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
              {/* <button disabled={!input} className="text-white rounded-lg bg-blue-700 disabled:text-gray-800 cousor-pointer p-2 ">Search</button> */}
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

            <div className="w-full flex flex-col mt-2 mb-1 items-right space-y-4 pb-1">
              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Retailer Name:{' '}
                <small className="ml-2 text-center uppercase ">
                  {tpmInfo.agentName}
                </small>
              </p>

              <div className="flex space-x-1">
                <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                  Tpm#:{' '}
                  <small className="ml-2 text-center ">{tpmInfo.tpm}</small>
                </p>

                <p className="p-1 flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                  {/* Status:  */}
                  <small className="ml-2 text-center ">{tpmInfo.status}</small>
                </p>
              </div>

              <p className="p-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg opacity-30">
                Duration:{' '}
                <small className="ml-2 text-center ">
                  <TimeAgo
                    className="text-lg text-white"
                    //date= '04/16/2022'
                    date={tpmInfo.createdAt}
                  />
                </small>
              </p>
            </div>
            {Loading &&<Circles color="#FC6238" height={40} width={70} />}
          </div>
        </div>

        <hr />

        <div className=" flex flex-col  w-full bg-yellow-00 pb-8 ">
          <div className=" flex  w-full justify-center space-x-4 items-center bg-red-00">
            <button
              type="submit"
              disabled={!input}
              onClick={handleSubmitIn}
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-8 border border-orange-400 hover:border-transparent rounded disabled:text-gray-500"
            >
              Tpm In
            </button>
            <button
              type="submit"
              disabled={!input}
              onClick={handleSubmitOut}
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-green-400 hover:border-transparent rounded disabled:text-gray-500"
            >
              Tpm Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receiption
function sata(sata: any) {
  throw new Error('Function not implemented.')
}

function result(
  result: any,
  any: any
): GoogleAppsScript.URL_Fetch.URLFetchRequestOptions {
  throw new Error('Function not implemented.')
}

function getContentText() {
  throw new Error('Function not implemented.')
}
