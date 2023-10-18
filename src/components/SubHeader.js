import React from "react";
import { SubHeaderContainer } from "./styled";
import UploadPhoto from "./UploadPhoto";

export default function SubHeader(props){

    return (
        <SubHeaderContainer>
            <img src={require('../pages/assests/Logo.jpeg')} style={{widows: 120, height: 120}}></img>

            <UploadPhoto size={{container: 125, img: 200}} change={false}></UploadPhoto>
        </SubHeaderContainer>
    );
}
