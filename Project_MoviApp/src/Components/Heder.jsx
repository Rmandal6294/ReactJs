import { useState, useRef } from "react";
import img from "../assets/user_demo.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [profileImg, setProfileImg] = useState(img);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImg(url);
    }
  };

  return (
    <>
      <header className="bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] flex justify-between items-center rounded-l-xl rounded-r-4xl">
        <div className="p-3">
          <span className="bg-[linear-gradient(90deg,#000000,#737373)] bg-clip-text text-transparent text-4xl font-bold">
            RANIT'S
          </span>
          <span className="bg-[linear-gradient(190deg,#101010,#c89346)] bg-clip-text text-transparent text-2xl font-bold">
            Media
          </span>
        </div>

        <div className="flex justify-center items-center m-1 cursor-pointer">
          <img
            onClick={() => setShowModal(true)}
            className="w-11 h-11 border-2 border-gray-600 rounded-full bg-gray-800 object-cover"
            src={profileImg}
            alt="🧑‍🦰"
          />
        </div>
      </header>
      {showModal && (
        <div className=" w-screen h-screen bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 p-5 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">User Profile</h2>
            <img
              src={profileImg}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-gray-500"
            />

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700/20 file:text-white hover:file:bg-gray-600/30 cursor-pointer"
            />

            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-700/20 text-white px-4 py-2 rounded-full hover:bg-gray-600/30"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;