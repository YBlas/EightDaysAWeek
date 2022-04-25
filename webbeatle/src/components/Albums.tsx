import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { GET_ALBUMS } from '../queries';
import { GqlAlbums } from '../types';
import "../styles/Albums.css";

const Albums: FC = () => {
    const { data, loading, error, refetch } = useQuery<GqlAlbums>(GET_ALBUMS,
        {
            fetchPolicy: 'network-only',
        });
    console.log(data);
    return (
        <div className='Albums'>
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            {data && data.getAlbums.map(album => (
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className='cover' src={album.img} alt="Avatar"/>
                        </div>
                        <div className="flip-card-back">
                            <h1>{album.name}</h1>
                            <p>{album.tracks.join(', ')}</p>
                            <p>{album.mixes.join(', ')}</p>
                            <p>{album.year}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Albums;