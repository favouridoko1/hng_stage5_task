"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import brand_icon from "@/public/solar_link-circle-bold.png";
import envelop_icon from "@/public/ph_envelope-simple-fill.png";
import key_icon from "@/public/ph_lock-key-fill.png";
import Image from "next/image";

const CreateAccount = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth)

  const navigate = (page: string) => {
    router.push(page);
  };

  const handleSignup = async (e)=>{
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res)
      setEmail("");
      setPassword("");
      navigate("desktop")
      console.log("user Successfully created")
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
              onChange={(e) => setEmail(e.target.value)}
              className="px-12 outline-none py-3 border pl-16 border-border max-w-md"
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
              placeholder="At least 8 character"
              id="loginPassInput"
              className="px-12 outline-none py-3 border pl-16 border-border max-w-md"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <Image
              src={key_icon}
              alt="envelop icon"
              className="absolute bottom-4 left-8"
            />
          </li>
          <br />
          {/* <li className="list-none relative loginInpuContainer">
            <label htmlFor="Name">confirm password</label>
            <br />
            <input
              type="password"
              placeholder="At least 8 characters"
              id="loginInput"
              className="px-12 outline-none py-3 border pl-16 border-border max-w-md"
            />
            <Image
              src={key_icon}
              alt="envelop icon"
              className="absolute bottom-4 left-8"
            />
          </li>
          <br /> */}
          <p> Password must contain at least 8 characters</p>
          <br />
          <button
            type="submit"
            className="loginButton text-white py-3"
            onClick={handleSignup}
          >
            Create new account
          </button>
          <br />
          <p className="mx-12">
            Already have an account?{" "}
            <span
              className="text-purple cursor-pointer hover:text-purplehover"
              onClick={() => navigate("login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
