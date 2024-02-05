react-icons

const contactsRef = collection(db, "contacts");
//to grab collection made on firebase
//db is reference to firestore, and contacts is name of collection

const contactsSnapshot = await getDocs(contactsRef);
//this stores the data coming from tge firestore database
