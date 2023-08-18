import { useState } from "react";
import SongList from "./Components/SongList";
import SongBtn from "./Components/SongBtn";

const App = () => {
  const [tableSelect, setTabelSelect] = useState('played');

  const handleSelectChange = (option) => {
    setTabelSelect(option);
  }

  return (
    <main className="flex flex-col items-center text-center mt-20">
      <h1 className="text-6xl font-bold mb-5">TAYLOR SWIFT SURPRISE SONGS LIST</h1>
      <div className="flex gap-4 mb-5">
        <SongBtn handleSelectChange={handleSelectChange}/>
      </div>
      <div className="mx-16 w-[95%] mb-20">
        <SongList tableSelect={tableSelect}/>
      </div>
    </main>
  );
}

export default App;