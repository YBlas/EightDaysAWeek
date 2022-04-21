import { useMutation, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { CREATE_USER, GET_ALBUMS, GET_USERS, LOG_IN } from '../queries';
import { GqlAlbums, GqlUsers, LogInProps } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput, StyledOptionButton } from '../styles/emotionStyles';

const SignIn: FC = () => {
    const [userLocal, setUser] = useState('');
    const [passLocal, setPass] = useState('');
    const [SetUser, { data, loading, error }] = useMutation<GqlUsers>(CREATE_USER);
    return (
        <div className='LogIn'>
            <h2 color='white'>User</h2>
            <StyledInput placeholder="Write User" value={userLocal} onChange={(e) => setUser(e.target.value)}></StyledInput>
            <h2 color='white'>Pass</h2>
            <StyledInput placeholder="Write Password" value={passLocal} onChange={(e) => setPass(e.target.value)}></StyledInput>

            <button onClick={() => {
                SetUser({ variables: { user: userLocal, pass: passLocal } }).then(() => {
                    alert("Succefully created user!! :)");
                });
            }}>Sign In</button>

        </div>
    )
}

export default SignIn;