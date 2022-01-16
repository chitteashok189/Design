import React from 'react';
import {FcGoogle} from "react-icons/fc";

export default function Login() {
    const onGoogle=()=>{
        window.location.href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=532352704633-6pkces9iboppp465idnovkcqtlsa8j7t.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwww.figma.com%2Ffinish_google_sso&response_type=code&scope=profile%20email&access_type=online&prompt=select_account&state=j8qpZGIczhMbayvfMux7pKUkuMFr0z8706zk0ShxUCWY&flowName=GeneralOAuthFlow";
    }
    return (
        
        <div>
            <div class="border border-gray-500 ml-96 mt-8 drop-shadow-xl" style={{width:420,height:550}}>
                <h1 class="text-3xl text-center font-bold mt-4">Log in to colloborate</h1>
                <h1 class="text-3xl text-center font-bold"> on "Frontend-</h1>
                <h1 class="text-3xl text-center font-bold">assignment"</h1>
                <button class="border-2 border-black w-48 rounded-lg w-72 ml-14 mt-4" onClick={onGoogle} ><FcGoogle class="relative left-8" style={{position:"relative",top:12}}/><span class="ml-4 relative bottom-2 font-bold">Continue with Google</span></button>
                <h1 class="text-gray-500 text-center mt-6">or</h1>
                <input type="email" placeholder='Email' class="border-2 border-black rounded-md w-48 p-2 w-72 ml-14 mt-4"></input>
                <input type="password" placeholder='Password' class="border-2 rounded-md border-black w-48 p-2 w-72 ml-14 mt-4"></input>
                <button class="border-2 border-black w-48 rounded-lg w-72 ml-14 mt-4 p-2 bg-black"><span class="text-white">Log in</span></button><br></br>
                <a href="/saml" class="text-blue-500 ml-28 relative top-4 underline">Log in with SAML SSO</a><br></br>
                <a href="/password" class="text-blue-500 ml-32 relative top-4 underline">Forgot password</a>
                <h1 class="text-gray-500 ml-28 relative top-4">No account<a href="/create" class="text-blue-500">Create one</a></h1>
            </div>
        </div>
    )
}
