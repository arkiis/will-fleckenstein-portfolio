import characterImg from "../ChatGPT_Image_May_8__2026__12_57_03_AM.png";

interface FrameProps {
  title: string;
  role: string;
  date: string;
}

function Frame({ title, role, date }: FrameProps) {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal gap-[10px] items-start leading-[normal] py-[10px] relative shrink-0">
      <p className="relative shrink-0 text-[18px] md:text-[22px] text-black font-[IBM_Plex_Sans] break-words" style={{ fontVariationSettings: "'wdth' 100" }}>
        {title}
      </p>
      <p className="relative shrink-0 text-[#737373] text-[14px] md:text-[16px] font-[IBM_Plex_Sans]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {role} • {date}
      </p>
    </div>
  );
}

interface ProjectProps {
  title: string;
  role: string;
  img: string;
  date: string;
  isFirstCard?: boolean;
}

export default function Project({ title, role, img, date, isFirstCard = false }: ProjectProps) {
  return (
    <div className="bg-[#fafafa] content-stretch drop-shadow-[0px_4px_8px_rgba(0,0,0,0.08)] hover:drop-shadow-[0px_8px_16px_rgba(0,0,0,0.12)] flex flex-col gap-[8px] md:gap-[11px] items-start p-[6px] md:p-[8px] relative rounded-[8px] size-full transition-all duration-300 md:hover:scale-[1.02] group" data-name="Project">
      <div aria-hidden="true" className="absolute border-[1.5px] md:border-2 border-[#e5e7eb] md:group-hover:border-[#d1d5db] border-solid inset-[-2px] pointer-events-none rounded-[10px] transition-colors duration-300 z-0" />

      {isFirstCard && (
        <>
          {/* Character peeking from left */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 translate-x-28 group-hover:-translate-x-[calc(100%-0.5rem)] transition-transform duration-500 ease-out pointer-events-none -z-10">
            {/* Speech bubble */}
            <div className="absolute -left-28 -top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 z-50">
              <div className="relative bg-white rounded-2xl px-4 py-2 shadow-lg border-2 border-gray-900">
                <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">Thanks for checking my work!</p>
                {/* Speech bubble tail pointing from bottom right */}
                <div className="absolute right-2 bottom-0 translate-y-2">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
                  <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white absolute bottom-[3px] right-0"></div>
                </div>
              </div>
            </div>

            <img
              src={characterImg}
              alt="Character"
              className="w-32 h-auto"
            />
          </div>
        </>
      )}

      <div className="aspect-[4/3] md:h-[417px] md:aspect-auto relative rounded-[6px] shrink-0 w-full overflow-hidden">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6px] size-full transition-transform duration-300 md:group-hover:scale-105" src={img} style={{ imageRendering: '-webkit-optimize-contrast' }} />
      </div>
      <Frame title={title} role={role} date={date} />
    </div>
  );
}