
import React from 'react'
import Agent from '../components/Agent'


function agents() {

  
  return     (
    <div className="flex justify-center items-center h-screen flex-col" >
          <div className="
   h-full flex-1 w-full bg-red-00 opacity-80">

 
   </div>
      <Agent/>




<div className="h-full w-full flex-1 bg-red-500  ">


  </div>
    </div>

    
  )
}

export default agents


// const URL= process.env.NEXT_PUBLIC_BASE_URL;

// export const GetStaticProps = async  ()=>{



//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.open( "GET", URL, false ); // false for synchronous request
//   xmlHttp.send( null );
//   return JSON.parse(xmlHttp.responseText);


//   return{
//     props: {
//       Data,
//     }
//   }
// }
