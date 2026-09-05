import Link from "next/link";

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path
        d="m8 12 2.5 2.5L16 9"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FocusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="8.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FloatingCard({ className = "", icon, children }) {
  return (
    <div
      className={`
        absolute z-20 hidden
        items-center gap-4
        rounded-2xl
        border border-white/[0.08]
        bg-gradient-to-br from-white/[0.08] to-white/[0.035]
        px-5 py-5
        text-[15px] font-semibold text-white/90
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        backdrop-blur-xl
        lg:flex
        ${className}
      `}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-white/90">
        {icon}
      </div>

      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-6 pb-16 pt-20 sm:px-10 lg:px-16">
        <div className="relative w-full">
          {/* main content */}
          <div className="relative z-20 max-w-[700px]">
            <h1 className="font-sans text-[clamp(4.4rem,8.6vw,8rem)] font-bold leading-[0.86] tracking-[-0.065em]">
              <span className="block">Abolfazl</span>

              <span className="relative mt-2 block w-fit">
                <span className="relative z-10 bg-gradient-to-r from-white via-white to-[#777] bg-clip-text text-transparent">
                  Haghighi
                </span>
              </span>
            </h1>

            <div className="mt-16 border-l-2 border-white/10 pl-5">
              <p className="max-w-[500px] text-[16px] leading-[1.7] text-white/50 sm:text-[18px]">
                Creative developer and designer.
                <br />
                Making high quality applications and websites.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="
                  inline-flex h-14 items-center justify-center
                  rounded-lg bg-white px-8
                  text-[15px] font-semibold text-black
                  transition duration-300
                  hover:-translate-y-1 hover:bg-white/90
                "
              >
                View My Work
              </Link>

              <Link
                href="#contact"
                className="
                  inline-flex h-14 items-center justify-center
                  rounded-lg border border-white/60 px-8
                  text-[15px] font-semibold text-white
                  transition duration-300
                  hover:-translate-y-1 hover:bg-white hover:text-black
                "
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* floating feature cards */}
          <FloatingCard
            className="left-[58%] top-[-80px] hero-float-one"
            icon={<InfoIcon />}
          >
            5+ Projects
          </FloatingCard>

          <FloatingCard
            className="right-[1%] top-[210px] hero-float-two"
            icon={<CheckIcon />}
          >
            Quality First
          </FloatingCard>

          <FloatingCard
            className="right-[6%] top-[430px] hero-float-three"
            icon={<FocusIcon />}
          >
            User Focused
          </FloatingCard>
        </div>
      </div>

    </section>
  );
}