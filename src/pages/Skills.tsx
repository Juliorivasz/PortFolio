import { useState } from "react";
import { skillData } from "../helpers/skillData";
import CategoryButton from "../Layout/components/skills/CategoryButton";
import SkillList from "../Layout/components/skills/SkillList";
import { useTheme } from "../context/useTheme";

export const Skills = () => {
  const { themeState } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(skillData[0].title);

  const currentSkills = skillData.find((cat) => cat.title === selectedCategory);

  return (
    <section
      className={`container__section mx-auto px-2 sm:px-6 py-12 ${
        themeState.theme === "LightTheme" ? "bg__gray b" : "bg__black w"
      }`}>
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-col justify-between w-full h-full lg:flex-row gap-10 overflow-hidden">
        <aside className="w-full lg:w-1/4">
          <ul className="space-y-2">
            {skillData.map((category) => (
              <CategoryButton
                key={category.title}
                title={category.title}
                selectedCategory={selectedCategory}
                onClick={() => setSelectedCategory(category.title)}
              />
            ))}
          </ul>
        </aside>

        <article className="w-full lg:w-3/4 h-screen max-h-150">
          <h3 className={`text-2xl font-semibold mb-4 text-blue-900 ${themeState.theme === "LightTheme" ? "b" : " w"}`}>
            {currentSkills?.title}
          </h3>
          {currentSkills && <SkillList skills={currentSkills.skills} />}
        </article>
      </div>
    </section>
  );
};
