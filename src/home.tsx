import Navbar from "./navbar.tsx";
//Hero section
const Home = () => {
  return (
    <div className="bg-[#242038] h-screen w-full flex flex-col justify-center relative overflow-hidden z-[0]">
      <p className="text-[#CAC4CE] text-center font-bold font-montserrat text-3xl z-[1]">
        Ephraim Jude
      </p>
      <p className="text-[#CAC4CE] text-center font-semibold font-montserrat text-md p-4 z-[1]">
        Full-Stack Developer | DevOps Enthusiast | Automating the Future
      </p>
      <div className="absolute rounded-full bg-[#8D86C9] h-[40vh] w-[40vw]  blur-3xl opacity-50 z-[0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <button className ="bg-[#9067C6] text-[#CAC4CE] rounded-[12px] absolute font-Regular font-[16px] font-sans w-[25vw] h-[5vh] z-[1] top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 hover:bg-[#CAC4CE] hover:text-[#9067C6]  ">Contact Me</button>
      <Navbar />

    </div>
  );
};

export default Home;
