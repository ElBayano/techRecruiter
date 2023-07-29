import React from "react";
import {ContainerProfile, ImageProfile, H1Profile, Paragraph, ConteinerImage} from "./profile.style"

import Img from "../../assets/profileImageExample/carolinaProfile.png"


export default function Profile() {
    return (
    <ContainerProfile>
        <ConteinerImage> <ImageProfile src={Img}/> </ConteinerImage>
        
        <H1Profile>Carolina</H1Profile>
        <Paragraph>carolina@email.com</Paragraph>
    </ContainerProfile>
    )
}

