import React,{useState} from "react";
import {
    ContainerBw,
    Wraper,
    Text,
    SwitchBw,
    ButtonBw,
} from "./styled/buttonBw.js"

function Switch(props){

    const [stateButton, setStateButton] = useState('Light')
    const [nameButton, setNameButton] = useState('L')
    const [position, setPosition] = useState(false)
    const changesSwitch = ()=>{
        if(props.theme === "LightTheme"){
            props.setTheme("DarkTheme");
            setStateButton('Dark');
            setNameButton('D')
            changesPosition();
        }else{
            props.setTheme("LightTheme");
            setStateButton('Light');
            setNameButton('L');
            changesPosition();
        }
    }

    const changesPosition = ()=>{
        setPosition(!position);
    }

    return (
        <ContainerBw>
            <Text>
                Mode {stateButton}
            </Text>
            <Wraper>
                <SwitchBw>
                    <ButtonBw 
                    onClick={()=>changesSwitch()}
                    position={position} >
                        {nameButton}
                    </ButtonBw>
                </SwitchBw>
            </Wraper>
        </ContainerBw>
    );
}

export default Switch;