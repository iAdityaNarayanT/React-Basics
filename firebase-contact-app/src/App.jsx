import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex">
        <input
          type="text"
          className="border flex-grow h-10 bg-transparent border-white rounded-md"
        />
      </div>
    </div>
  );
};

export default App;
