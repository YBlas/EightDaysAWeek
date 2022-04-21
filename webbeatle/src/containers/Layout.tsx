import { FC, ReactNode } from 'react';
import "../styles/Layout.css";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    )
}
export default Layout;