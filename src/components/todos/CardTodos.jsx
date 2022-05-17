import { useState } from "react";

export default function CardTodos({ item }) {
  const [success, setSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setIsEdited] = useState(item);

  const successTodo = () => {
    setSuccess(true);
  };

  const handleEditingForm = (e) => {
    e.preventDefault();
    setIsEditing(false);

    setIsEdited(edited);
  };

  // updated task
  item = edited;

  return (
    <div className="h-28 md:h-36 w-56 md:w-64 bg-white/5 backdrop-blur-sm shadow-lg p-3 md:p-5 flex flex-col justify-between rounded md:rounded-xl overflow-hidden">
      {/* title */}
      {isEditing ? (
        <form onSubmit={handleEditingForm}>
          <input
            type="text"
            value={edited}
            onChange={(e) => setIsEdited(e.target.value)}
          />
          <button type="submit"></button>
        </form>
      ) : (
        <p className="text-sm sm:text-xl uppercase text-gray-800 font-semibold">
          {success ? <del>{item}</del> : isEditing ? item : edited}
        </p>
      )}

      {/* action */}
      <div className="border-t-[1px] sm:border-t-2 pt-0 sm:pt-2 -mb-3 flex justify-between">
        <div className="space-x-2">
          <button onClick={(e) => e.target.offsetParent.remove()}>
            <img
              className="hover:scale-110 h-2 w-2 sm:h-4 sm:w-4"
              src="./delete.png"
              alt=""
            />
          </button>
          <button onClick={() => setIsEditing(true)}>
            <img
              className="hover:scale-110 h-2 w-2 sm:h-4 sm:w-4"
              src="./edit.png"
              alt=""
            />
          </button>
          <button onClick={successTodo}>
            <img
              className="hover:scale-110 h-2 w-2 sm:h-4 sm:w-4"
              src="./success.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
}
