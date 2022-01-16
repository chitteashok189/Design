import React from 'react';
import {BsFillQuestionCircleFill,BsPlay} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {FaFigma,FaRegHandPaper} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate=useNavigate();
    const onPlay=()=>{
        window.location.href="https://www.figma.com/proto/YgEc7zpBFfIjq3WmSvkb2K/Frontend-assignment?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
    }
    const onGoogle=()=>{
        window.location.href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=j8qpZGIczhMbayvfMux7pKUkuMFr0z8706zk0ShxUCWY&flowName=GeneralOAuthFlow";
    }
    const onEmail=()=>{
        window.location.href="/create";
    }
    return (
        <div>
            <div class="h-14 bg-black">
            <FaFigma color='white' class="relative  left-4" size={20} style={{positoin:"relative",top:20}}/><select class="bg-black text-white ml-8">
               <option></option>
          
                   </select> 
            <FaRegHandPaper style={{position:"relative",left:80,bottom:40}} class=" bg-blue-500" size={50} color='white'/>
            <h1 class="text-white text-center relative bottom-20">Frontend-assignment</h1>
             <BsFillQuestionCircleFill size={25} color='red' style={{marginLeft:1050,position:"relative",bottom:100}}></BsFillQuestionCircleFill>
            <button class="border border-white text-white w-16  rounded-lg p-1" style={{marginLeft:1100,position:"relative",bottom:130}} onClick={()=>navigate("/login")}>Log in</button>
            <BsPlay class="text-white" size={20} style={{marginLeft:1200,position:"relative",bottom:155}} onClick={onPlay}/>
            </div>
            <div class="h-20 mt-8 ml-32 mr-32 border border-gray-300 drop-shadow-xl bg-white">
                <img src="./assets/figma.png" class="w-12 mt-4"></img>
                <h1 class="ml-20 relative bottom-10"><b>Welcome to Figma !</b>Create an account to edit and colloborateon this file.</h1>
                <button class="border border-black w-48 rounded-lg  " onClick={onGoogle} style={{marginLeft:650,position:"relative",bottom:69}}><FcGoogle class="relative left-2" style={{position:"relative",top:12}}/><span class="ml-4 relative bottom-2" style={{fontSize:13}}>Continue with Google</span></button>
                <button class="p-2 rounded-md bg-green-500 text-white" style={{fontSize:13,marginLeft:18,position:"relative",bottom:80}} onClick={onEmail}>Sign up with email</button>
            </div>
        </div>
    )
}
