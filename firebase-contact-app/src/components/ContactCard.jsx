import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";

// eslint-disable-next-line react/prop-types
const ContactCard = ({ contact }) => {
  const [isOpen, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between bg-yellow items-center rounded-lg p-2"
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
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
