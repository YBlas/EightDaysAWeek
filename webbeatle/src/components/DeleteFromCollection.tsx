import { useMutation, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { ADD_ALBUM, ADD_TO_COLLECTION, DELETE_FROM_COLLECTION, GET_ALBUMS, GET_USERS, LOG_IN } from '../queries';
import { AddToCollectionProps, AlbumGql, GqlAlbums, GqlUsers, LogInProps, NewAlbumProps } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput, StyledOptionButton } from '../styles/emotionStyles';

const DeleteFromCollection: FC<AddToCollectionProps> = ({user, pass}) => {
    const [albumLocal, setAlbumLocal] = useState('');
    
    const[deleteAlbum, { data, loading, error }] = useMutation<AlbumGql>(DELETE_FROM_COLLECTION);

    return (
        <div className='LogIn'>
            <h2 color='white'>Name</h2>
            <StyledInput placeholder="Write name" value={albumLocal} onChange={(e) => setAlbumLocal(e.target.value)}></StyledInput>
            
            <button onClick={() => {
                deleteAlbum({ variables: { user: user, pass: pass, name: albumLocal}}).then(() => {
                    alert("Succefully deleted from collection :(");
                });
            }}>Delete Album</button>
        </div>
    )
}


export default DeleteFromCollection;