import {FC, ReactNode} from "react";
import "../styles/OptionsContainer.css";

const OptionsContainer: FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className='OptionsContainer'>
            {children}
        </div>
    )
}
export default OptionsContainer;