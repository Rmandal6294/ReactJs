import { useState } from "react";


const TwoWayBinding = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");

  const onsubmitHandle = (e) => {
    e.preventDefault();
    console.log(`From Submitted! Data- ${name}-${email}-${ph}`)
    setName("")
    setEmail("")
    setPh("")

  };

  return (
    <form
      className="max-w-100 font-sans"
      onSubmit={(e) => {
        onsubmitHandle(e);
      }}
    >
      <fieldset className="border-2 border-[#3498db] rounded-lg p-5 mb-5">
        <legend className="bg-[#3498db] text-white px-3.75 py-1.25 rounded border-none font-bold text-[0.9rem]">
          Contact Details From-II
        </legend>

        <div className="mb-3.75">
          <label
            for="name"
            className="block mb-1.25 text-[0.85rem] text-[#333]"
          >
            Full Name
          </label>
          <input
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            aria-required="true"
            className="w-full p-2 border border-[#ccc] rounded box-border"
          />
        </div>

        <div className="mb-3.75">
          <label
            for="email"
            className="block mb-1.25 text-[0.85rem] text-[#333]"
          >
            Email Address
          </label>
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="w-full p-2 border border-[#ccc] rounded box-border"
          />
        </div>

        <div className="mb-3.75">
          <label
            for="phone"
            className="block mb-1.25 text-[0.85rem] text-[#333]"
          >
            Phone Number
          </label>
          <input
            value={ph}
            onChange={(e)=>{
                setPh(e.target.value)
            }}
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            className="w-full p-2 border border-[#ccc] rounded box-border"
          />
        </div>

        <button
          type="submit"
          className="border-none bg-[#3498db] p-2 m-5 rounded-xl cursor-pointer"
        >
          Submit Information
        </button>
      </fieldset>
    </form>
  );
};

export default TwoWayBinding;
