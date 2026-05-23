import svgPaths from "./svg-ofhw4hlq4x";
import imgScreenshot20260304At123937Pm1 from "figma:asset/213b9116f2536be67144290c802bb2bd0ea97485.png";

function Graphic() {
  return (
    <div className="-translate-y-1/2 absolute h-[268px] right-[122px] top-1/2 w-[32px]" data-name="Graphic">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 268">
        <g id="Graphic">
          <path d={svgPaths.pae58f00} fill="var(--fill-0, #38244A)" id="Graphic_2" />
          <rect fill="var(--fill-0, #38244A)" height="6" id="Shape" rx="3" width="6" x="13" y="72" />
          <path d={svgPaths.p1d4b6380} fill="var(--fill-0, #38244A)" id="Graphic_3" />
          <rect fill="var(--fill-0, #38244A)" height="6" id="Shape_2" rx="3" width="6" x="13" y="190" />
          <path d={svgPaths.p2c77a400} fill="var(--fill-0, #38244A)" id="Graphic_4" />
        </g>
      </svg>
    </div>
  );
}

function Graphic1() {
  return (
    <div className="-translate-y-1/2 absolute h-[268px] left-[121px] top-1/2 w-[32px]" data-name="Graphic">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 268">
        <g id="Graphic">
          <path d={svgPaths.pae58f00} fill="var(--fill-0, #38244A)" id="Graphic_2" />
          <rect fill="var(--fill-0, #38244A)" height="6" id="Shape" rx="3" width="6" x="13" y="72" />
          <path d={svgPaths.p1d4b6380} fill="var(--fill-0, #38244A)" id="Graphic_3" />
          <rect fill="var(--fill-0, #38244A)" height="6" id="Shape_2" rx="3" width="6" x="13" y="190" />
          <path d={svgPaths.p2c77a400} fill="var(--fill-0, #38244A)" id="Graphic_4" />
        </g>
      </svg>
    </div>
  );
}

export default function LoFi() {
  return (
    <div className="bg-[#fff4e8] relative size-full" data-name="Lo-fi">
      <Graphic />
      <Graphic1 />
      <div className="absolute h-[1079px] left-[250px] top-px w-[1377px]" data-name="Screenshot 2026-03-04 at 12.39.37 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260304At123937Pm1} />
      </div>
    </div>
  );
}