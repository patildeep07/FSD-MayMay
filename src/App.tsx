// import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import Shimmer from "./components/Shimmer";
import type { MemeType } from "./types/types";

function App() {
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
        <div className="flex flex-row flex-wrap gap-10 justify-start align-middle ">
          {memes.map((meme, idx) => {
            return (
              <div
                key={idx}
                className="w-64 h-72 border-solid border-gray-400 gap-1 border-2 my-1 flex flex-col justify-between"
              >
                <img
                  alt={meme.title}
                  src={meme.preview[0]}
                  className="aspect-square"
                />

                <h1>{meme.author}</h1>
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <Shimmer />}
    </>
  );
}

export default App;
