import imgScreenshot20260303At33249Pm1 from "figma:asset/a925d6b94c89832b956c5c75801af5b3c53e7b06.png";
import imgScreenshot20260304At40641Pm1 from "figma:asset/407ed524b08bd2626ecde34d1d756bdf55c74aa0.png";

export default function Reasearch() {
  return (
    <div className="bg-[#fff4e8] relative size-full" data-name="Reasearch 2">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Serif:Regular',sans-serif] justify-center leading-[0] left-[117px] not-italic text-[#38244a] text-[64px] top-[194px] tracking-[-1.28px] uppercase w-[1432px]">
        <p className="leading-none">User persona</p>
      </div>
      <div className="absolute h-[654px] left-[calc(50%+54px)] top-[323px] w-[761px]" data-name="Screenshot 2026-03-03 at 3.32.49 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260303At33249Pm1} />
      </div>
      <div className="absolute h-[641px] left-[117px] top-[329px] w-[819px]" data-name="Screenshot 2026-03-04 at 4.06.41 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260304At40641Pm1} />
      </div>
    </div>
  );
}