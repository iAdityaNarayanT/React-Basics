import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

import Navbar from "./components/Navbar";
import { db } from "./config/firebase";
const App = () => {
  const [contacts, setContacts] = useState([]);
  //use effect hook to perform network call
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setContacts(contactLists);
        console.log(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
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
      <div className="mt-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex justify-around bg-yellow items-center rounded-lg p-2"
          >
            <div className="flex gap-1">
              <HiOutlineUserCircle className="text-orange text-4xl" />
              <div className="">
                <h2 className="font-medium">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>
            <div className="flex text-3xl">
              <RiEditCircleLine />
              <IoMdTrash className="text-orange" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
