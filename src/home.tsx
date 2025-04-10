import Navbar from "./navbar.tsx";
import { useEffect, useState } from "react";
import "./gradientanimation.css";

//home page
const Home = () => {
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    setloaded(true);
  }, []);

  return (
    <div className=" bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] h-screen w-full flex flex-col items-center relative overflow-hidden z-[0]" style={{
        animation: "gradient-bg 7s ease infinite",
        backgroundSize: "200% 200%",
      }}>
      
      {/* Title (Ephraim Jude) */}
      <p
        className={`
          text-[#CAC4CE] text-center font-bold font-montserrat z-[1] transition-opacity duration-500 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }
          /* Small Screen (sm) */
          text-3xl mt-[45vh]
          /* Medium Screen (md) */
          md:text-5xl md:mt-[40vh]
          /* Large Screen (lg) */
          lg:text-7xl lg:mt-[40vh] 
        `}
      >
        Ephraim Jude
      </p>

      {/* Subtitle (Full-Stack Developer...) */}
      <p
        className={`
          text-[#CAC4CE] text-center font-semibold font-montserrat p-4 z-[1] transition-opacity duration-500 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }
          /* Small Screen (sm) */
          text-md
          /* Medium Screen (md) */
          md:text-lg
          /* Large Screen (lg) */
          lg:text-2xl lg:mt-5
        `}
      >
        Full-Stack Developer | DevOps Enthusiast | Automating the Future
      </p>

      {/* Contact Me Button */}
      <div className="relative w-full flex justify-center">
        <button
          className={`
            bg-[rgba(144,103,198,0.5)] text-[#CAC4CE] rounded-[10px] font-Regular font-[16px] font-sans h-[5vh] z-[1] transition-transform duration-1000 ease-in-out ${
              loaded ? "translate-y-0" : "translate-y-20"
            }
            hover:scale-105 hover:bg-[#CAC4CE] hover:text-[#9067C6]
            /* Small Screen (sm) */
            w-[25%] max-w-xs mt-[5vh] sm:drop-shadow-lg
            /* Medium Screen (md) */
            md:max-w-sm md:mt-[10vh] hover:opacity-100 bg-opacity-50
            /* Large Screen (lg) */
            lg:max-w-md lg:mt-[10vh] lg:w-[15%]
          `}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;