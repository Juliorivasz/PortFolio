import { useState } from "react";
import { useTheme } from "../../../context/useTheme";

interface SwitchProps {
  theme: string;
}

function Switch({ theme }: SwitchProps) {
  const { handleDark, handleLight } = useTheme();
  const isLightTheme = theme === "LightTheme";

  const [icon, setIcon] = useState(isLightTheme ? "🌙" : "🌞");

  const changesSwitch = () => {
    const newTheme = isLightTheme ? handleDark : handleLight;
    newTheme();
    setIcon(isLightTheme ? "🌞" : "🌙");
  };

  return (
    <div className="w-auto bg-transparent transition-all duration-500 ease-in">
      <div className="w-full max-w-[1388px] mx-auto flex flex-wrap flex-row-reverse">
        <div className={`relative w-[60px] h-[35px] rounded-full transition-all duration-1000 ease-in ${
          isLightTheme ? "bg-[rgb(219,233,237)]" : "bg-[rgb(16,23,47)]"
        }`}>
          <button
            onClick={changesSwitch}
            className={`absolute cursor-pointer bottom-[5px] w-[25px] h-[25px] border-none rounded-full transition-all duration-400 ease-in outline-none text-[1.1rem] font-['Inter'] flex items-center justify-center ${
              isLightTheme 
                ? "left-[5px] bg-[rgb(16,23,47)] text-[rgb(219,233,237)]" 
                : "left-[30px] bg-[rgb(219,233,237)] text-[rgb(16,23,47)]"
            }`}
          >
            {icon}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Switch;
