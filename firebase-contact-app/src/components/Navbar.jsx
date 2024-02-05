import { IoSearchOutline } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-[60px] gap-2 bg-white my-4 rounded-lg text-xl flex justify-center items-center font-medium">
      <IoSearchOutline />
      <img src="/logos_firebase.svg" alt="firebase-logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
