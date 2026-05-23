export function Grain() {
  return (
    <>
      <svg className="pointer-events-none fixed inset-0 z-[60] h-full w-full opacity-[0.13] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
      <div
        className="pointer-events-none fixed inset-0 z-[55]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(214,139,74,0.10), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(120,40,30,0.08), transparent 45%), radial-gradient(circle at 0% 60%, rgba(40,30,70,0.10), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-[58]"
        style={{
          boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.65)",
        }}
      />
    </>
  );
}
