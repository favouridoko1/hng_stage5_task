import Navbar from "@/component/Navbar";
import Image from "next/image";
import icom from "@/public/ph_envelope-simple-fill.png";
import hand_icon from "@/public/hand_icon.png";

const Desktop = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="flex gap-3 justify-center">
        <div className="bg-white w-2/6">
          <Image src={icom} alt="" />
        </div>
        <div className="bg-white w-3/5 rounded p-4 flex flex-col">
          <h2 className="font-bold text-3xl text-darkgray">
            Customize your links
          </h2>
          <p>
            add/edit/remove links below and share all your profiles with the
            world!
          </p>
          <br />
          <button className="border border-purple rounded-2xl py-2 px-4 text-purple hover:bg-lightpurple">
            + Add new link
          </button>
          <br />
          <div className="bg-lightgray rounded py-16 flex justify-center flex-col items-center ">
            <Image src={hand_icon} alt="" />
            <h2 className="font-bold text-3xl text-darkgray">
              Let's get you started
            </h2>
            <p className="addlinkdescription">
              Use the "Add link" button to get started. Ones you have more than
              one link. You can reorder and edit them. We're here to help you
              share your profiles with everyone!
            </p>
          </div>
          <br />
          <hr className="hr" />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
