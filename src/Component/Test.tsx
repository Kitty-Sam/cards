import React from 'react';
import SuperInputText from "./SuperInput/SuperInput";
import SuperButton from "./SuperButton/SuperButton";
import SuperCheckbox from "./SuperCheckBox/SuperCheckbox";


const Test = () => {
    return (
        <div style={{textAlign: "center", width: "700px", margin: "50px"}}>
            <SuperInputText
            placeholder="enter smth?"/>

            <SuperButton>
               press me again
            </SuperButton>

            <SuperCheckbox
            />


        </div>
    );
};

export default Test;