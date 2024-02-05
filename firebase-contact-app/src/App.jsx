import { AiFillPlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="relative flex items-center flex-grow">
          <FiSearch className="absolute ml-1 text-white text-3xl" />
          <input
            type="text"
            className="border flex-grow h-10 bg-transparent border-white pl-9 text-white rounded-md"
          />
        </div>

        <AiFillPlusCircle className="text-5xl  cursor-pointer text-white" />
      </div>
    </div>
  );
};

export default App;
