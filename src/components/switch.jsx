import React,{useState} from "react";
import {
    ContainerBw,
    Wraper,
    SwitchBw,
    ButtonBw,
} from "./styled/buttonBw.js"

function Switch(props){

    const [position, setPosition] = useState(false)
    const changesSwitch = ()=>{
        if(props.theme === "LightTheme"){
            props.setTheme("DarkTheme");
            changesPosition();
        }else{
            props.setTheme("LightTheme");
            changesPosition();
        }
    }

    const changesPosition = ()=>{
        setPosition(!position);
    }

    return (
        <ContainerBw>
            <Wraper>
                <SwitchBw>
                    <ButtonBw 
                    onClick={()=>changesSwitch()}
                    position={position} >
                        DL
                    </ButtonBw>
                </SwitchBw>
            </Wraper>
        </ContainerBw>
    );
}

export default Switch;