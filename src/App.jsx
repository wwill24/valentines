import { useState } from "react";
import dogbeach from "/IMG_0620.JPG"
import zouk from "/IMG_1167.JPG"
import akpsi from "/IMG_4602.JPG"
import centurycity from "/IMG_1045.JPG"
// import angry from "./assets/IMG_7538.png"

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Why would you say no! Are you sure?",
      "Really sure?",
      "Give it one more thought",
      "Please?!",
      "Surely not?",
      "Last chance to be my valentine!",
      "Kidding, but please?",
      "Don't be silly! Just say yes!",
      "You're supposed to say yes...",
      "Come on!! Be nice >:(",
      "Why you keep saying no?!",
      "Change of heart perhaps?",
      "Wouldn't you reconsider?",
      "I'm giving you one more chance",
      "You're on thin ice...",
      "Is that your final answer?...",
      "You make me sad!!! :(",
      "COME ON JUST SAY YES!!!",
      "CLICK YES! LOOK HOW BIG IT IS"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? ( 
        noCount == 0 ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-4xl md:text-6xl font-bold my-4">
              OKAY!!!! YAYYYYY!!!! HEHEHE
            </div>
            <div className="flex flex-row">
              {/* <img src={angry} />
              <img src={angry} />
              <img src={angry} /> */}
            </div>
          </>
        ) : (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-4xl md:text-6xl font-bold my-4">
              OKAY!!!! YAYYYYY!!!! FINALLY!!!! HEHEHE
            </div>
          </>         
        )
      ) : (
        <>
          <img
            src={dogbeach}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={zouk}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            src={akpsi}
            className="fixed bottom-16 left-10 md:left-24 -z-10 animate-pulse md:w-40 w-32"
          />
          <img
            src={centurycity}
            className="fixed top-16 right-10 md:right-24 -z-10 animate-pulse md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine? <span role="img" aria-label="heart"> ❤️ </span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {

};
