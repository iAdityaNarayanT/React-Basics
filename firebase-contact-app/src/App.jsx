import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
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
      <div>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <HiOutlineUserCircle />
            <div className="">
              <h2 className="">{contact.name}</h2>
              <p className="">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
