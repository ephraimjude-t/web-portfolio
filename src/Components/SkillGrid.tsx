
import SkillCard from "./SkillCard";

const skills = [
  { name: "JavaScript", logo: "/logos/js.png" },
  { name: "React", logo: "/logos/react.png" },
  { name: "Python", logo: "/logos/python.png" },
];

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-10">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill.name} logo={skill.logo} />
      ))}
    </div>
  );
};

export default SkillsGrid;