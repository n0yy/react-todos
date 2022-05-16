export default function CardTodos({ item }) {
  return (
    <div className="h-36 w-72 bg-white/5 backdrop-blur-sm shadow-lg p-5 flex flex-col justify-between rounded-xl">
      {/* title */}
      <p className="text-xl uppercase text-gray-800 font-semibold">{item}</p>
      {/* action */}
      <div className="border-t-2 pt-2 -mb-3 flex justify-between">
        <div className="space-x-2">
          <button onClick={(e) => e.target.offsetParent.remove()}>
            <img className="hover:scale-110" src="./delete.png" alt="" />
          </button>
          <button>
            <img className="hover:scale-110" src="./edit.png" alt="" />
          </button>
          <button>
            <img className="hover:scale-110" src="./success.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
