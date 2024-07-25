"use client";
import { useRouter } from "next/navigation";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "@/app/firebase/config";
import { useState } from "react";

import brand_icon from "@/public/solar_link-circle-bold.png";
import envelop_icon from "@/public/ph_envelope-simple-fill.png";
import key_icon from "@/public/ph_lock-key-fill.png";
import Image from "next/image";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const navigate= (page:string)=> {
      router.push(page);
  }

  const handleSignIn =async(e)=>{
    e.preventDefault()
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
      navigate("desktop")
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="flex items-center justify-center flex-col text-gray loginContainer">
        <figure className="flex gap-2">
          <Image src={brand_icon} alt="" />
          <figcaption className="font-bold text-4xl text-darkgray">
            devlink
          </figcaption>
        </figure>
        <br />
        <form className="text-nowrap bg-white p-8 rounded-2xl flex flex-col justify-center">
          <h2 className="font-bold text-3xl text-darkgray">Login</h2>
          <p>Add your details below to get back into the app</p>
       
          <br />
          <li className="list-none relative loginInpuContainer">
            <label htmlFor="loginEmailInput">Email adress</label>
            <br />
            <input
              type="email"
              placeholder="eg. alex@email.com"
              id="loginEmailInput"
              className="px-12 outline-none py-3 border pl-16 border-border max-w-md"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Image
              src={envelop_icon}
              alt="envelop icon"
              className="absolute bottom-4 left-8"
            />
          </li>
          <br />
          <li className="list-none relative loginInpuContainer">
            <label htmlFor="loginPassInput">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              id="loginPassInput"
              className="px-12 outline-none py-3 border pl-16 border-border max-w-md"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Image
              src={key_icon}
              alt="envelop icon"
              className="absolute bottom-4 left-8"
            />
          </li>
          <br />
          <button type="submit" className="loginButton text-white py-3" onClick={handleSignIn}>Login</button>
          <br />
          <p className="mx-12">Don't have an account? <span className="text-purple cursor-pointer hover:text-purplehover" onClick={()=>navigate("signup")}>Create account</span></p>
        </form>
      </div>
    </>
  );
};

export default Login;
