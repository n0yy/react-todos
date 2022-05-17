import React, { useState } from "react";

export default function FormTodos(props) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // jalanin props yang dikirim dari App.js
    props.text(text);

    setText("");
  };

  return (
    <div className="mx-auto w-full sm:w-1/2 mt-7 mb-12">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-8 sm:h-10 rounded-full bg-white/20 shadow-md border-t-[1px] border-l-[1px] focus:border-none text-gray-800 focus:outline-none appearance-none focus:ring-2 px-7 focus:ring-slate-200 placeholder:text-gray-700 focus:placeholder-transparent transition duration-300"
          placeholder="Write your Task..."
          name="task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="task"
          autoFocus
        />
        <div className="w-full mt-3 flex items-center justify-center">
          <button
            className="bg-gradient-to-br text-gray-100 w-1/3 py-1 from-yellow-400 to-yellow-500 rounded-full shadow-md uppercase text-xs font-bold"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
