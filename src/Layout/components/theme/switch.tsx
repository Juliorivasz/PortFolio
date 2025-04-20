import { useState } from "react";
import { ContainerBw, Wraper, SwitchBw, ButtonBw } from "./styled/buttonBw.js";
import { useTheme } from "../../../context/useTheme.js";

interface SwirchProps {
  theme: string;
}

function Switch({ theme }: SwirchProps) {
  const { handleDark, handleLight } = useTheme();
  const isLightTheme = theme === "LightTheme";

  const [icon, setIcon] = useState(isLightTheme ? "🌙" : "🌞");
  const [isPosition, setPosition] = useState(false);

  const changesSwitch = () => {
    const newTheme = isLightTheme ? handleDark : handleLight;

    newTheme();
    setIcon(isLightTheme ? "🌞" : "🌙");
    setPosition(!isPosition);
  };

  return (
    <ContainerBw>
      <Wraper>
        <SwitchBw>
          <ButtonBw
            $isPosition={isPosition}
            onClick={changesSwitch}>
            {icon}
          </ButtonBw>
        </SwitchBw>
      </Wraper>
    </ContainerBw>
  );
}

export default Switch;
