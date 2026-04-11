import { useState } from "react";
import NotesCard from "./Components/NotesCard";
import img from "./assets/img.png";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState("");
  const [tasks, setTasks] = useState([]);

  const onsubmitHandle = (e) => {
    e.preventDefault();
    console.log("From submitted");
    const storeTask = [...tasks];
    storeTask.push({
      title,
      body,
      tag,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    setTasks(storeTask);
    setTitle("");
    setBody("");
    setTag("");
  };

  const onDelete = (idx) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(idx, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full h-scree flex flex-col justify-between items-center gap-5 box-border">
      <div className="w-full h-[63vh] flex flex-col-reverse lg:flex-row ">
        <div className="lg:w-1/2 h-full">
          <h1 className="w-fit h-fit bg-[#333] px-5 py-2 text-bold text-xl text-white rounded-b-2xl m-auto">
            {" "}
            Note Application{" "}
          </h1>
          <form
            onSubmit={(e) => {
              onsubmitHandle(e);
            }}
            className="w-full h-full flex flex-col gap-5 p-10"
          >
            <input
              type="text"
              value={tag}
              required
              onChange={(e) => setTag(e.target.value)}
              placeholder="Note heading..."
              className="rounded-xl text-sm px-3 py-2.5 border border-black/10 bg-gray-50
            focus:outline-none focus:border-black/30 placeholder:text-gray-300 transition-colors"
            />

            <input
              type="text"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note heading..."
              className="rounded-xl text-sm px-3 py-2.5 border border-black/10 bg-gray-50
            focus:outline-none focus:border-black/30 placeholder:text-gray-300 transition-colors"
            />

            <textarea
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your note..."
              rows={3}
              className="rounded-xl text-sm px-3 py-2.5 border border-black/10 bg-gray-50
            focus:outline-none focus:border-black/30 placeholder:text-gray-300 resize-none transition-colors"
            />

            <button
              className="mt-1 rounded-xl py-2.5 text-sm font-medium bg-[#1a1a2e] text-white
          hover:opacity-85 active:scale-[0.98] transition-all duration-150 w-full"
            >
              Add note
            </button>
          </form>
        </div>

        <img
          className="lg:w-1/2 h-full object-fit"
          src={img}
          alt="personLogo"
        ></img>
      </div>
      <div className="w-[95%] h-62.5 overflow-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] rounded-4xl bg-gray-100 border border-black/10 ">
        <h1 className="w-fit h-fit bg-[#333] px-5 py-2 text-bold text-xl text-white rounded-b-2xl mb-5">
          Recent Notes
        </h1>
        <div className="flex flex-wap flex-wap gap-5 lg:flex-row ">
          {tasks.map((elem, idx) => (
            <NotesCard
              key={idx}
              title={elem.title}
              body={elem.body}
              tag={elem.tag}
              date={elem.date}
              onDelete={() => onDelete(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
