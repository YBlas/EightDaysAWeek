import { useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { GET_ALBUMS, GET_USERS, LOG_IN } from '../queries';
import { GqlAlbums, GqlUsers, LogInProps } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput, StyledOptionButton } from '../styles/emotionStyles';

const LogIn: FC<LogInProps> = ({changeUser, changePass, changeVisibility}) => {
    const [userLocal, setUser] = useState('');
    const [passLocal, setPass] = useState('');
    const { data, loading, error, refetch } = useQuery<GqlUsers>(LOG_IN, {
        variables: { user: userLocal, pass: passLocal }
    });
    return (
        <div className='LogIn'>
            <h2 color='white'>User</h2>
            <StyledInput placeholder="Write User" value={userLocal} onChange={(e) => setUser(e.target.value)}></StyledInput>
            <h2 color='white'>Pass</h2>
            <StyledInput placeholder="Write Password" value={passLocal} onChange={(e) => setPass(e.target.value)}></StyledInput>

            <button onClick={()=>{
                if(data){
                alert("Succefully logged in!! :)");
                changeUser(userLocal);
                changePass(passLocal);
                changeVisibility("visible"); 
                }else{
                    alert("Wrong user or password");
                }
            }}>Log In</button>

        </div>
    )
}

export default LogIn;