import {useState} from "react";
import {
    ContainerBw,
    Wraper,
    Text,
    SwitchBw,
    ButtonBw,
} from "./styled/buttonBw.js";
import { ThemeType } from './styled/themes';

interface SwirchProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType)=> void;
}

function Switch({ theme, setTheme }: SwirchProps) {
    const isLightTheme = theme === "LightTheme";
  
    const [stateButton, setStateButton] = useState(isLightTheme ? 'Light' : 'Dark');
    const [nameButton, setNameButton] = useState(isLightTheme ? 'L' : 'D');
    const [isPosition, setPosition] = useState(false);
  
    const changesSwitch = () => {
      const newTheme = isLightTheme ? 'DarkTheme' : 'LightTheme';
  
      setTheme(newTheme);
      setStateButton(isLightTheme ? 'Dark' : 'Light');
      setNameButton(isLightTheme ? 'D' : 'L');
      setPosition(!isPosition);
    };

    return (
        <ContainerBw>
            <Text >
                Mode {stateButton}
            </Text>
            <Wraper>
                <SwitchBw>
                    <ButtonBw $isPosition={isPosition} onClick={()=>changesSwitch()} >
                        {nameButton}
                    </ButtonBw>
                </SwitchBw>
            </Wraper>
        </ContainerBw>
    );
}

export default Switch;