import { useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { GET_ALBUMS, GET_USERS } from '../queries';
import { GqlAlbums, GqlUsers } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput } from '../styles/emotionStyles';

const UsersSearch: FC = () => {
    const [userLocal, setUser] = useState('');
    const { data, loading, error, refetch } = useQuery<GqlUsers>(GET_USERS, {
        variables: { user: userLocal }
    });
    return (
        <div className='UsersSearch'>
            <StyledInput placeholder="Write the user you're looking for" value={userLocal} onChange={(e) => setUser(e.target.value)}></StyledInput>
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            {data && data.getUsers.map(user => (
                <div className="UserBox">
                    <h1 key={user._id} onClick={() => {
                        alert(`${user.user} collection: ${user.collection.map(album => album.name).join(', ')}`);
                    }}>{user.user}</h1>
                </div>
            ))}

        </div>
    )
}

export default UsersSearch;