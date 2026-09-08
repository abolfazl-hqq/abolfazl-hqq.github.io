const techIcons = [
  <svg key="js" viewBox="0 0 65 65" className="h-full w-full">
    <rect x="10" y="10" width="60" height="60" rx="4" />
    <text x="45" y="55" textAnchor="middle" fontSize="27" fontWeight="900" fill="black">JS</text>
  </svg>,
  <svg key="react" viewBox="0 0 80 80" className="h-full w-full">
    <ellipse cx="40" cy="40" rx="30" ry="11" fill="none" strokeWidth="4" />
    <ellipse cx="40" cy="40" rx="30" ry="11" fill="none" strokeWidth="4" transform="rotate(60 40 40)" />
    <ellipse cx="40" cy="40" rx="30" ry="11" fill="none" strokeWidth="4" transform="rotate(120 40 40)" />
    <circle cx="40" cy="40" r="6" />
  </svg>,
  <svg key="ts" viewBox="0 0 65 65" className="h-full w-full">
    <rect x="10" y="10" width="60" height="60" rx="4" />
    <text x="48" y="58" textAnchor="middle" fontSize="25" fontWeight="900" fill="black">TS</text>
  </svg>,
  <svg key="code" viewBox="0 0 80 80" className="h-full w-full">
    <path d="M30 24 14 40l16 16M50 24l16 16-16 16M45 15 34 65" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="node" viewBox="0 0 80 80" className="h-full w-full">
    <path d="M40 8 68 24v32L40 72 12 56V24Z" fill="none" strokeWidth="5" />
    <text x="40" y="51" textAnchor="middle" fontSize="30" fontWeight="700">N</text>
  </svg>,
  <svg key="python" viewBox="0 0 80 80" className="h-full w-full">
    <path d="M42 10c-14 0-17 6-17 13v9h24v4H19c-8 0-13 6-13 14s5 15 13 15h8V54c0-8 7-14 15-14h19c7 0 13-6 13-13v-4c0-8-7-13-15-13Z" />
    <circle cx="34" cy="20" r="3" fill="black" />
  </svg>,
];

export default function MovingTechBackground() {
  const icons = [...techIcons, ...techIcons];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(255,255,255,0.035),transparent_38%)]" />
      <div className="hero-tech-track absolute left-0 top-[20%] flex w-max items-center gap-28 opacity-[0.11]">
        {icons.map((icon, index) => (
          <div key={index} className={`h-28 w-28 shrink-0 fill-white stroke-white text-white ${index % 2 === 0 ? "translate-y-20" : "-translate-y-16"}`}>
            {icon}
          </div>
        ))}
      </div>
      <div className="hero-tech-track-slow absolute left-0 top-[72%] flex w-max items-center gap-36 opacity-[0.08]">
        {icons.slice().reverse().map((icon, index) => (
          <div key={index} className={`h-24 w-24 shrink-0 fill-white stroke-white text-white ${index % 2 ? "translate-y-12" : "-translate-y-10"}`}>
            {icon}
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
