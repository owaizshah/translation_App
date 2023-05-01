import Input from "./components/Input";
import Translate from "./components/Translate";
import Select from "./components/Select";
import { useState } from "react";
import axios from "axios";

function App() {
  const [selectLang, setSelectLang] = useState("");
  const [translateInto, setTranslateInto] = useState("");
  const [translation, setTranslation] = useState("Translation");
  const [text, setText] = useState("");

  const handleText = (text) => {
    setText(text);
  };

  const handleSelectLang = (lang) => {
    setSelectLang(lang);
  };

  const handleTranslate = (lang) => {
    setTranslateInto(lang);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${selectLang}|${translateInto}`
    );
    const { translation } = res.data.matches[1];
    setTranslation(translation);
  };

  return (
    <div className=" min-h-screen text-center">
      <h1 className="  text-7xl text-indigo-400 mt-10 tracking-wider font-extrabold">
        Translate App
      </h1>
      <div className=" w-[700px] bg-slate-200 mx-auto mt-16 p-6 rounded-xl shadow-lg ">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-[10.5rem]">
            <Select
              option="--Select language"
              handleSelect={handleSelectLang}
            />
            <Select option="Translate into" handleSelect={handleTranslate} />
          </div>

          <div className="flex space-x-7">
            <Input handleText={handleText} text={text} />
            <Translate translation={translation} />
          </div>
          <div className="flex justify-end">
            <button className=" py-2 px-6 rounded mt-7 text-lg font-semibold tracking-wider bg-indigo-600 text-white">
              Translate +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
