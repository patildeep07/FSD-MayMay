// import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import Shimmer from "./components/Shimmer";
import type { MemeType } from "./types/types";
import MemeCard from "./components/MemeCard";

function App() {
  document.title = "MayMay";

  const [memes, setMemes] = useState<MemeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMemes = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("https://meme-api.com/gimme/12");
      const data = await response.json();

      setMemes((prev) => [...prev, ...data.memes]);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMemes();

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 1) {
      getMemes();
    }
  };

  return (
    <>
      <h1 className="font-bold text-[24px] mb-4">MayMay</h1>
      {memes && (
        <div className="flex flex-row flex-wrap gap-10 justify-center align-middle ">
          {memes.map((meme, idx) => {
            return <MemeCard meme={meme} key={idx} />;
          })}
        </div>
      )}
      {isLoading && <Shimmer />}
    </>
  );
}

export default App;
