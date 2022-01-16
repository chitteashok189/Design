import React from 'react'

export default function Password() {
    return (
        <div>
             <div style={{width:400,height:300}} class="border border-gray-300 drop-shadow-xl rounded-lg bg-white ml-96 mt-40">
               <h1 class="text-3xl font-bold text-center mt-4">Enter your mail to</h1>
               <h1 class="text-3xl font-bold text-center">reset password</h1>
               <input type="email" placeholder='Email' class="border-2 border-black rounded-md w-48 p-2 w-72 ml-14 mt-6"></input>
              <button class=" w-48 rounded-lg w-72 ml-14 mt-4 p-2 bg-gray-300"><span class="text-white">Reset password</span></button><br></br>
              <a href="/login" class="text-blue-500 underline ml-44 relative top-4">cancel</a>
          </div> 
        </div>
    )
}
