import { useMutation, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { ADD_ALBUM, ADD_TO_COLLECTION, GET_ALBUMS, GET_USERS, LOG_IN } from '../queries';
import { AddToCollectionProps, AlbumGql, GqlAlbums, GqlUsers, LogInProps, NewAlbumProps } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput, StyledOptionButton } from '../styles/emotionStyles';

const AddToCollection: FC<AddToCollectionProps> = ({user, pass}) => {
    const [albumLocal, setAlbumLocal] = useState('');
    
    const[setAlbum, { data, loading, error }] = useMutation<AlbumGql>(ADD_TO_COLLECTION);

    return (
        <div className='LogIn'>
            <h2 color='white'>Name</h2>
            <StyledInput placeholder="Write name" value={albumLocal} onChange={(e) => setAlbumLocal(e.target.value)}></StyledInput>
            
            <button onClick={() => {
                setAlbum({ variables: { user: user, pass: pass, name: albumLocal}}).then(() => {
                    alert("Succefully added to collection!! :)");
                });
            }}>Add Album</button>
        </div>
    )
}


export default AddToCollection;