import { FC } from "react";
import SkillItem from "./SkillItem";
import { iconMap } from "../../../helpers/skillData";
import { Skill } from "../../types/skill";

interface SkillListProps {
  skills: Skill[];
}

const SkillList: FC<SkillListProps> = ({ skills }) => {
  return (
    <ul className="space-y-2">
      {skills.map((skill) => (
        <SkillItem
          key={skill.name}
          name={skill.name}
          level={skill.level}
          icon={iconMap[skill.name] || ""}
        />
      ))}
    </ul>
  );
};

export default SkillList;
