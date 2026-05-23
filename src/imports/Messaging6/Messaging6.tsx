import svgPaths from "./svg-4lefypqnqb";
import imgChevronLeft from "./3aa8ddc48665a316fe95f0a94d79f6250745a3fc.png";
import imgEllipse1 from "./c421768b60d3b5062e218f7852627ce0881b42b0.png";
import imgMenuVertical from "./c86fbb700ca19a743fc9b87a4718b95a19f35e31.png";
import imgPaperPlane from "./3131ff17761e5f5740b4c7ff283d4fc9d2ac867e.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] items-start justify-end leading-[0] py-[4px] relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Kadie Bonilla</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#959595] text-[11px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Last seen 50 min ago</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[22px]" data-name="Chevron Left">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChevronLeft} />
      </div>
      <div className="relative shrink-0 size-[45px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="45" src={imgEllipse1} width="45" />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[34px] items-center justify-center relative shrink-0 w-[25px]">
      <div className="h-[23px] relative shrink-0 w-[22px]" data-name="Menu Vertical">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMenuVertical} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 pb-[15px] pt-[10px] px-[21px] top-[62px] w-[402px]">
      <div aria-hidden="true" className="absolute border-[#efefef] border-b border-solid inset-0 pointer-events-none" />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function FillShadow() {
  return (
    <div className="absolute inset-0 rounded-[32px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" data-name="Fill + Shadow">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[32px]" />
        <div className="absolute bg-[rgba(245,245,245,0.6)] inset-0 rounded-[32px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[32px]" data-name="Glass Effect" />;
}

function Group() {
  return (
    <div className="h-[41.202px] relative w-[60.126px]">
      <div className="absolute inset-[-2.32%_-1.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0369 43.1126">
          <g id="Group 16">
            <path d={svgPaths.p11aa1c00} fill="var(--fill-0, #A9D917)" id="Vector 53" stroke="var(--stroke-0, #6EBA28)" strokeWidth="1.911" />
            <path d={svgPaths.p209b5a00} fill="var(--fill-0, white)" id="Vector 57" />
            <path d={svgPaths.p9666f70} fill="var(--fill-0, black)" id="Ellipse 9" />
            <circle cx="5.6832" cy="10.0325" fill="var(--fill-0, #6EBA28)" id="Ellipse 11" r="1.00934" />
            <circle cx="11.7392" cy="10.0325" fill="var(--fill-0, #6EBA28)" id="Ellipse 12" r="1.00934" />
            <path d={svgPaths.p39be0600} fill="var(--fill-0, black)" id="Ellipse 13" />
            <path d={svgPaths.p9bf1b00} id="Vector 55" stroke="var(--stroke-0, #6EBA28)" strokeLinecap="round" strokeWidth="1.911" />
            <path d={svgPaths.p3e803640} id="Vector 56" stroke="var(--stroke-0, #6EBA28)" strokeLinecap="round" strokeWidth="1.911" />
            <g id="Vector 63">
              <path d={svgPaths.p4d90d00} fill="var(--fill-0, #6EBA28)" />
              <path d={svgPaths.pe8ca3b0} stroke="var(--stroke-0, #6EBA28)" strokeLinecap="round" strokeWidth="1.911" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MessageContainer4() {
  return (
    <div className="bg-[#e9e9eb] flex-[1_0_0] max-w-[300px] min-w-px relative rounded-[16px]" data-name="Message Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[12px] py-[7px] relative size-full">
          <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic opacity-90 relative text-[12px] text-black tracking-[-0.15px] w-full whitespace-pre-wrap">
                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.25] mb-0">{`Not sure what to say? `}</p>
                <p className="leading-[1.25]">I’ll help you get the conversation started!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end min-w-px relative" data-name="Message Container">
      <MessageContainer4 />
    </div>
  );
}

function MessageContainer2() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="Message Container">
      <MessageContainer3 />
    </div>
  );
}

function MessageContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-w-px relative" data-name="Message Container">
      <MessageContainer2 />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="content-stretch flex items-start relative w-full" data-name="Message Container">
      <MessageContainer1 />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center px-[24px] relative shrink-0 w-[378px]" data-name="Quick Actions">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Group />
        </div>
      </div>
      <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <MessageContainer />
        </div>
      </div>
      <div className="absolute h-[10px] left-[88px] top-[11px] w-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path d={svgPaths.p2b22a400} fill="var(--fill-0, #E9E9EB)" id="Vector 69" />
        </svg>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="bg-[#e6e6e6] h-px relative shrink-0 w-full" data-name="Separator" />;
}

function LabelAndSubtitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[10px] relative" data-name="Label and Subtitle">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.43px] w-full">
        <p className="leading-[20px]">{`Request Pricing & Packages`}</p>
      </div>
    </div>
  );
}

function Leading() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Leading">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[17px] text-center w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">{`\u{1013A2}`}</p>
      </div>
      <LabelAndSubtitle />
    </div>
  );
}

function LabelAndSubtitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[10px] relative" data-name="Label and Subtitle">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.43px] w-full">
        <p className="leading-[20px]">Ask for Delivery Location</p>
      </div>
    </div>
  );
}

function Leading1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Leading">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[17px] text-center w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">{`\u{1002D5}`}</p>
      </div>
      <LabelAndSubtitle1 />
    </div>
  );
}

function LabelAndSubtitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[10px] relative" data-name="Label and Subtitle">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#131313] text-[16px] tracking-[-0.43px] w-full">
        <p className="leading-[20px]">Check Availability</p>
      </div>
    </div>
  );
}

function Leading2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Leading">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131313] text-[17px] text-center w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">{`\u{100249}`}</p>
      </div>
      <LabelAndSubtitle2 />
    </div>
  );
}

function LabelAndSubtitle3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px py-[10px] relative" data-name="Label and Subtitle">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] tracking-[-0.43px] w-full">
        <p className="leading-[20px]">See Portfolio Examples</p>
      </div>
    </div>
  );
}

function Leading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Leading">
      <div className="flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[17px] text-center w-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">{`\u{100260}`}</p>
      </div>
      <LabelAndSubtitle3 />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0 w-[378px]" data-name="Menu Items">
      <div className="h-[21px] relative shrink-0 w-full" data-name="Separator">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[8px] relative size-full">
            <Separator />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Section Title">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pb-[10px] pt-[4px] px-[8px] relative size-full">
            <div className="flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#808080] text-[13px] text-ellipsis tracking-[-0.08px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[15px] overflow-hidden text-ellipsis">Starter Tips</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] relative size-full">
            <Leading />
            <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] text-center w-[14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
              <p className="leading-[20px]">{`\u{10018A}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] relative size-full">
            <Leading1 />
            <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] text-center w-[14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
              <p className="leading-[20px]">{`\u{10018A}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] relative size-full">
            <Leading2 />
            <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#131313] text-[15px] text-center w-[14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
              <p className="leading-[20px]">{`\u{10018A}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[6px] items-center pl-[6px] pr-[8px] relative size-full">
            <Leading3 />
            <div className="flex flex-col font-['SF_Pro:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a1a] text-[15px] text-center w-[14px]" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss15'" }}>
              <p className="leading-[20px]">{`\u{10018A}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuIPhone() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 py-[12px] top-[152px]" data-name="Menu - iPhone">
      <FillShadow />
      <GlassEffect />
      <QuickActions />
      <MenuItems />
    </div>
  );
}

function VuesaxLinearPaperclip() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/paperclip-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="paperclip-2">
          <path d={svgPaths.p3e29280} id="Vector" stroke="var(--stroke-0, #5C5C5D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <button className="block cursor-pointer relative shrink-0 size-[20px]" data-name="vuesax/linear/paperclip-2">
        <VuesaxLinearPaperclip />
      </button>
      <div className="flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] relative shrink-0 text-[#5c5c5d] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`Hey! Message when you're ready!`}</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#0122a5] content-stretch flex h-[34px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[44px]">
      <div className="relative shrink-0 size-[18px]" data-name="Paper Plane">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPaperPlane} />
      </div>
    </div>
  );
}

function SearchComponent() {
  return (
    <div className="bg-[#efefef] relative rounded-[20px] shrink-0 w-full" data-name="searchComponent">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[10px] pr-[7px] py-[5px] relative size-full">
          <Frame1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[192px] w-[378px]">
      <SearchComponent />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[236px] relative shrink-0 w-[378px]">
      <Frame6 />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-w-px pt-[1.5px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        10:09
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Frame">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p7a14d80} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pr-px pt-px relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

export default function Messaging() {
  return (
    <div className="bg-white relative size-full" data-name="Messaging 6">
      <Frame7 />
      <MenuIPhone />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[618px] w-[378px]">
        <Frame8 />
      </div>
      <div className="absolute bg-white content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[24px] right-0 top-0" data-name="Status bar">
        <Time />
        <Levels />
      </div>
    </div>
  );
}