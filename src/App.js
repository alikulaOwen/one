
import Counter from "./features/counter/counter";

export function App() {
  return <div className="flex justify-center items-center bg-emerald-100 w-screen h-screen">
    <div className="w-80 h-auto flex flex-col shadow-3xl  rounded-2xl 
    bg-emerald-300 justify-center align-middle 
    items-center border-2 border-solid border-emerald-400">
    <h1 className="text-3xl font-bold font-serif my-6">Hello You!</h1>
    <Counter />
  </div></div>;
}