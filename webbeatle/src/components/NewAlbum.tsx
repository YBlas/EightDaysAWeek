import { useMutation, useQuery } from '@apollo/client';
import { FC, useState } from 'react';
import { ADD_ALBUM, GET_ALBUMS, GET_USERS, LOG_IN } from '../queries';
import { AlbumGql, GqlAlbums, GqlUsers, LogInProps, NewAlbumProps } from '../types';
import "../styles/UsersSearch.css";
import { StyledInput, StyledOptionButton } from '../styles/emotionStyles';

const NewAlbum: FC<NewAlbumProps> = ({user, pass}) => {
    const [nameLocal, setName] = useState('');
    const [imgLocal, setImg] = useState('');
    const [tracksLocal, setTracks] = useState<string[]>([]);
    const [mixesLocal, setMixes] = useState<string[]>([]);
    const [yearLocal, setYear] = useState(0);
    
    const[setAlbum, { data, loading, error }] = useMutation<AlbumGql>(ADD_ALBUM);

    return (
        <div className='LogIn'>
            <h2 color='white'>Name</h2>
            <StyledInput placeholder="Write name" value={nameLocal} onChange={(e) => setName(e.target.value)}></StyledInput>
            <h2 color='white'>Image url</h2>
            <StyledInput placeholder="Write url of cover image" value={imgLocal} onChange={(e) => setImg(e.target.value)}></StyledInput>
            <h2 color='white'>Tracks</h2>
            <StyledInput placeholder="Write tracks separated with ," value={tracksLocal} onChange={(e) =>{
                const tracks = e.target.value.split(",");
                setTracks(tracks);
            }}></StyledInput>
            <h2 color='white'>Mixes</h2>
            <StyledInput placeholder="Write mixes separated with ," value={mixesLocal} onChange={(e) =>{
                const mixes = e.target.value.split(",");
                setMixes(mixes);
            }
            }></StyledInput>
            <h2 color='white'>Year</h2>
            <StyledInput placeholder="Write year" value={yearLocal} onChange={(e) => setYear(parseInt(e.target.value))}></StyledInput>
            <button onClick={() => {
                setAlbum({ variables: { user: user, pass: pass, name: nameLocal, img: imgLocal, tracks: tracksLocal, mixes: mixesLocal, year: yearLocal } }).then(() => {
                    alert("Succefully created album!! :)");
                });
            }}>Add Album</button>
        </div>
    )
}


export default NewAlbum;