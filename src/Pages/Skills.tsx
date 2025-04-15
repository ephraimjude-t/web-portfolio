import StarBackground from "../Components/StarBackground.tsx";

const Skills = () => {
    return (
        <div className ="h-screen w-full bg-[#242038] bg-gradient-to-r from [#242038] to-[#665A9E] overflow-hidden" style={{
            animation: "gradient-bg 7s ease infinite",
            backgroundSize: "200% 200%",
        }}>
            <StarBackground />
            
        </div>
    );
}
export default Skills;