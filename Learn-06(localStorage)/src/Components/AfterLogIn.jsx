import { useState } from "react";

const AfterLogIn = (props) => {
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/150");

  const onSet = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const data = JSON.parse(localStorage.getItem(props.email));


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profileImage}
            alt="props"
            className="w-32 h-32 rounded-full border-4 border-white/30"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white">{data.name}</h2>
            <p className="text-gray-200">{data.email}</p>

            <div className="mt-4 flex gap-3 justify-center md:justify-start">
              <label className="bg-pink-500 px-4 py-2 rounded-lg cursor-pointer">
                Edit Profile
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSet}
                  className="hidden"
                />
              </label>
              <button
                onClick={()=>{window.location.reload()}}
                className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="my-6 border-t border-white/20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Full Name</p>
            <p className="text-lg font-semibold">{data.name}</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Email</p>
            <p className="text-lg font-semibold">{data.email}</p>
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Phone</p>
            {/* <p className="text-lg font-semibold">{data.phone}</p> */}
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Location</p>
            {/* <p className="text-lg font-semibold">{data.location}</p> */}
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Role</p>
            {/* <p className="text-lg font-semibold">{data.role}</p> */}
          </div>

          <div className="bg-white/10 p-4 rounded-lg">
            <p className="text-gray-300 text-sm">Joined</p>
            {/* <p className="text-lg font-semibold">{data.joined}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLogIn;
