import Navbar from "@/component/Navbar";
import Image from "next/image";
import device_frame from "@/public/device_frame.png";
import frame_container from "@/public/device_frame_rectangle.png";
import hand_icon from "@/public/hand_icon.png";

const Desktop = () => {
  return (
    <>
      <Navbar />
    <div>
      {/* <br /> */}
      <div className="flex gap-3 justify-center mb-10 rounded text-black">
        <div className="bg-white w-2/6 relative items-center flex justify-center">
          <div className="rounded-full bg-lightgray  z-10">
            {/* <Image /> */}
          </div>
            <Image src={device_frame} alt="" className="absolute" />
            <Image src={frame_container} alt="" className="absolute" />
        </div>

        <div className="bg-white w-3/5 rounded p-4 flex flex-col relative">
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
          <button className="bg-purplehover rounded max-w-24 py-2 px-4 text-purple hover:bg-lightpurple absolute  right-6 bottom-2">
            save
          </button>
          <br />
        </div>
      </div>
    </div>
    </>
  );
};

export default Desktop;
