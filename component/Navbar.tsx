import Image from "next/image";
import brandicon_small from "@/public/solar_link-circle-bold_small.png";
import ph_link from "@/public/ph_link-bold.png";
import userprofile from "@/public/ph_user-circle-bold.png";

const Navbar = () => {
  return (
    <>
        <div className="flex justify-between bg-white py-2 rounded my-6 w-96">
          <ul className="flex items-center  gap-8">
            <li className="flex items-center gap-3">
              <figure className="flex gap-2 items-center">
                <span>
                  <Image src={brandicon_small} alt="" />
                </span>
                <figcaption className="font-bold text-3xl text-darkgray">
                  devlink
                </figcaption>
              </figure>
            </li>
          </ul>
          <ul className="flex gap-2 text-bold text-purple items-center">
            <figure className="flex gap-2 bg-lightpurple py-2 px-4 rounded">
              <span>
                <Image src={ph_link} alt="" />
              </span>
              <figcaption className="text-base text-darkgray">Links</figcaption>
            </figure>
            <figure className="flex gap-2 py-2 px-4 rounded items-center">
              <span>
                <Image src={userprofile} alt="" />
              </span>
              <figcaption className="text-base text-darkgray">
                Profile Details
              </figcaption>
            </figure>
          </ul>
          <ul className="flex items-center justify-between gap-4">
            <button className="border border-purple rounded-2xl py-2 px-4 hover:bg-lightpurple">
              Preview
            </button>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
