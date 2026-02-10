import { useState } from "react";
import "./App.css";

function App() {
  const [idx, setIdx] = useState(0);
  const [size, setSize] = useState(50);
  const [isYesPressed, setIsYesPressed] = useState(false);
  const [isOkPressed, setIsOkPressed] = useState(false);
  const buttonTexts = [
    "no",
    "ayaw ko",
    "WEH",
    "ayaw mo fr???",
    "suree? :(",
    "bakit ayaw mong pumayag",
    "ang laki na masyado ng yes",
    "PUMAYAG KA NA",
    "alam kong kinikilig ka rin naman",
    "REINZ pls... 🥺",
    "pag-usapan natin 'to 💔",
    "bakit ayaw mo",
    "sapilitan na lang",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 max-w-0">
        {!isYesPressed && (
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">
              azul alto reinz will u be my valentine!!! 😒😒
            </h1>
            <h3>pls 😵‍💫</h3>
          </div>
        )}
        {!isYesPressed && (
          <div className="flex gap-4 items-end">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=xjf9e6s3Cbs&list=RDxjf9e6s3Cbs&t=143s"
            >
              <button
                onClick={() => setIsYesPressed(true)}
                style={{ height: size, width: idx > 0 ? size : undefined }}
                className="bg-green-500! text-white px-4 py-2 rounded-md"
              >
                yes
              </button>
            </a>
            {idx < buttonTexts.length && (
              <button
                style={{ height: idx === 0 ? 50 : undefined }}
                onClick={() => {
                  setSize(size + 50);
                  setIdx(idx + 1);
                }}
                className="bg-red-500! text-white px-4 py-2 rounded-md"
              >
                {buttonTexts[idx]}
              </button>
            )}
          </div>
        )}
        {idx > buttonTexts.length && !isYesPressed && (
          <div className="w-screen">
            wala kang choice haha mag-yes ka na pls 🥺
          </div>
        )}
      </div>
      {isYesPressed && !isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 text-xs">
            wow naks 😳 proposal for valentines ko na 'to 😛 early proposal baka
            kasi maunahan 😒😒 i mizzz you always ebuu, wala ako sa 14 pero sa akin
            ka pa rin 😼
          </div>
          <button
            onClick={() => setIsOkPressed(true)}
            className="bg-green-500! text-white px-4 py-2 rounded-md"
          >
            okaayy
          </button>
        </div>
      )}
      {isOkPressed && (
        <div className="flex flex-col items-center justify-center gap-16">
          <h1 className="flex flex-col gap-4 text-xs">
            happy valentines, babe! you make me ready to dive.
          </h1>
          <div className="flex flex-col gap-4 text-xs">
            bebot bebot, <br />
            palvienne cute 😼
          </div>
        </div>
      )}
    </>
  );
}

export default App;
