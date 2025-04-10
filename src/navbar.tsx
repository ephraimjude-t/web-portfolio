import { useEffect, useState } from "react";
s
const Navbar = () => {
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    setloaded(true);
  }, []);

  return (
    <div
      className={`
        /* Common Styles */
        flex flex-row justify-between fixed top-0 left-0 w-full pt-2 p-5 items-center z-[2] transition-all duration-1000 ease-in-out
        /* Loaded Styles */
        ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"}
      `}
    >
      <ul
        className={`
          /* Common Styles */
          text-[#CAC4CE] text-center font-Regular font-sans flex p-4 w-full justify-between
          /* Small Screen (sm) */
          text-sm sm:space-x-4 sm:justify-between
          /* Medium Screen (md) */
          md:text-[25px] md:space-x-12 md:justify-center
          /* Large Screen (lg) */
          lg:text-lg
        `}
      >
        <button
          className={`
            /* Common Styles */
            text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2]
            /* Small Screen (sm) */
            w-[12vw]
            /* Medium Screen (md) */
            md:w-[10vw] 
            /* Large Screen (lg) */
            lg:w-[8vw]
          `}
        >
          Home 
        </button>
        <button
          className={`
            /* Common Styles */
            text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2]
            /* Small Screen (sm) */
            w-[12vw]
            /* Medium Screen (md) */
            md:w-[10vw]
            /* Large Screen (lg) */
            lg:w-[8vw]
          `}
        >
          Skills
        </button>
        <button
          className={`
            /* Common Styles */
            text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2]
            /* Small Screen (sm) */
            w-[15vw]
            /* Medium Screen (md) */
            md:w-[12vw]
            /* Large Screen (lg) */
            lg:w-[10vw]
          `}
        >
          Projects
        </button>
        <button
          className={`
            /* Common Styles */
            text-[#CAC4CE] rounded-[12px] font-Regular font-[16px] font-sans h-[5vh] hover:scale-105 hover:bg-[#9067C6] hover:text-[#CAC4CE] z-[2]
            /* Small Screen (sm) */
            w-[19vw]
            /* Medium Screen (md) */
            md:w-[15vw]
            /* Large Screen (lg) */
            lg:w-[12vw]
          `}
        >
          About me
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
