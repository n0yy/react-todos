import CardTodos from "./components/todos/CardTodos";
import FormTodos from "./components/todos/FormTodos";
import Title from "./components/todos/Title";

import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = [...todos, text];
    setTodos(task);

    setText("");
  };

  return (
    <main
      className="min-w-full min-h-screen"
      style={{ backgroundImage: `url("/bg.png")` }}
    >
      {/* main section */}
      <section
        id="card-main"
        className="flex items-center min-h-screen justify-center"
      >
        <div className="bg-white/25 backdrop-blur-sm w-3/4 rounded-xl p-10 border-t-[1px] border-l-[1px] shadow-xl">
          {/* title */}
          <Title />
          {/* form task */}
          <FormTodos
            text={text}
            handleSubmit={handleSubmit}
            todos={todos}
            setText={setText}
          />
          {/* card task */}
          <div className="flex items-center justify-around gap-5">
            {/* card */}
            {todos.map((todo, index) => {
              return <CardTodos item={todo} key={index} />;
            })}
          </div>
        </div>
      </section>
      {/* end main section */}
    </main>
  );
}
