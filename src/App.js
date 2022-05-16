import CardTodos from "./components/todos/CardTodos";
import FormTodos from "./components/todos/FormTodos";
import Title from "./components/todos/Title";

import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState([]);

  // buat callback function buat dijadiin props ke FormTodos
  const todos = (item) => {
    setTextInput([...textInput, item]);
  };

  return (
    <main
      className="min-w-full min-h-screen"
      style={{ backgroundImage: `url("/bg.png")` }}
    >
      {/* main section */}
      <section
        id="card-main"
        className="flex items-center min-h-screen justify-center w-full py-20"
      >
        <div className="bg-white/25 backdrop-blur-sm w-3/4 rounded-xl p-10 border-t-[1px] border-l-[1px] shadow-xl">
          {/* title */}
          <Title />
          {/* form task */}
          <FormTodos text={todos} />
          {/* card task */}
          <div className="grid grid-cols-3 gap-5">
            {/* card */}
            {textInput.map((item, index) => {
              return <CardTodos item={item} key={index} />;
            })}
          </div>
        </div>
      </section>
      {/* end main section */}
    </main>
  );
}
