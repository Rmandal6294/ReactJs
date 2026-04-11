const FromHandling = () => {

    const onsubmitHandle = (e) =>{
        e.preventDefault();
    }
  return (
    <form className="max-w-100 font-sans" onSubmit={(e)=>{
        onsubmitHandle(e)
    }}>
      <fieldset className="border-2 border-[#3498db] rounded-lg p-5 mb-5">
        <legend className="bg-[#3498db] text-white px-3.75 py-1.25 rounded border-none font-bold text-[0.9rem]">
          Contact Details From-I
        </legend>

        <div className="mb-3.75">
          <label
            for="name"
            className="block mb-1.25 text-[0.85rem] text-[#333]"
          >
            Full Name
          </label>
          <input
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
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            className="w-full p-2 border border-[#ccc] rounded box-border"
          />
        </div>

        <fieldset className="border border-dashed border-[#ccc] mt-2.5 p-4 rounded-lg">
          <legend className="bg-[#3498db] text-white px-3.75 py-1.25 rounded border-none font-bold text-[0.9rem]">
            Communication Preference
          </legend>
          <div className="flex gap-10">
            <label className="block mb-1.25 text-[0.85rem] text-[#333] p-2">
              <input type="radio" name="pref" value="email" /> Email
            </label>
            <label className="block mb-1.25 text-[0.85rem] text-[#333] p-2">
              <input type="radio" name="pref" value="phone" /> Phone
            </label>
          </div>
        </fieldset>
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

export default FromHandling;
