import img from "../assets/user_demo.png";

const Heder = () => {
  return (
    <header className="bg-[linear-gradient(140deg,#e7aa51,#ffe499,#8d5a1b,#e7aa51,#ac7031)] flex justify-between items-center rounded-l-xl rounded-r-4xl">
      <div className="p-3">
        <span className="bg-[linear-gradient(90deg,#000000,#737373)] bg-clip-text text-transparent text-4xl font-bold">
          RANIT'S
        </span>
        <span className="bg-[linear-gradient(190deg,#101010,#c89346)] bg-clip-text text-transparent text-2xl font-bold">
          Media
        </span>
      </div>

      <div className=" flex justify-center items-center m-1 cursor-pointer">
        <img className="w-11 h-11 border-2 border-gray-600 rounded-full bg-gray-800" src={img} alt="🧑‍🦰" />
      </div>
    </header>
  );
};

export default Heder;
