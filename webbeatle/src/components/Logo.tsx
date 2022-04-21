import {FC} from 'react';
import { LogoStyled } from "../styles/emotionStyles";

const Logo: FC = () => {
    return (
        <LogoStyled>
            <img className='Title' src='https://i.pinimg.com/originals/0a/9a/05/0a9a0587b547859febb9f7817d404046.png'/>
            <img className='AbbeyRoad' src="https://www.seekpng.com/png/full/825-8254049_free-png-download-beatles-abbey-road-png-images.png"></img>
        </LogoStyled>
    )
}

export default Logo;