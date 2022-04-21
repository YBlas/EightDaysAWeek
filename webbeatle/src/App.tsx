import { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout';
import Logo from './components/Logo';
import OptionsContainer from './containers/OptionsContainer';
import { StyledOptionButton } from './styles/emotionStyles';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import Albums from './components/Albums';
import React from 'react';
import UsersSearch from './components/UsersSearch';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import NewAlbum from './components/NewAlbum';
import AddToCollection from './components/AddToCollection';
import DeleteFromCollection from './components/DeleteFromCollection';

const client = new ApolloClient({
  uri: "http://localhost:6969/graphql",
  cache: new InMemoryCache()
});



const App: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedVisibility, setVisibility] = useState("hidden");
  const [AlbumsShow, setAlbumsShow] = useState(true);
  const [SearchUserShow, setSearchUserShow] = useState(false);
  const [LogInShow, setLogInShow] = useState(false);
  const [SignInShow, setSignInShow] = useState(false);
  const [AddAlbumShow, setAddAlbumShow] = useState(false);
  const [AddtoCollectionShow, setAddtoCollectionShow] = useState(false);
  const [DeleteFromCollectionShow, setDeleteFromCollectionShow] = useState(false);

  return (

    <Layout>
      <Logo />
      <ApolloProvider client={client}>
        <OptionsContainer>
          <StyledOptionButton visibility='visible' onClick={()=>{
            setAlbumsShow(true);
            setSearchUserShow(false);
            setLogInShow(false);
            setSignInShow(false);
            setAddAlbumShow(false);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(false);
            }} >Albums</StyledOptionButton>
          <StyledOptionButton visibility='visible' onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(true);
            setLogInShow(false);
            setSignInShow(false);
            setAddAlbumShow(false);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(false);
            }}>Search Users</StyledOptionButton>
          <StyledOptionButton visibility='visible' onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(false);
            setLogInShow(true);
            setSignInShow(false);
            setAddAlbumShow(false);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(false);
            }}>LogIn</StyledOptionButton>
          <StyledOptionButton visibility='visible' onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(false);
            setLogInShow(false);
            setSignInShow(true);
            setAddAlbumShow(false);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(false);
            }}>SignIn</StyledOptionButton>
          <StyledOptionButton visibility={loggedVisibility} onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(false);
            setLogInShow(false);
            setSignInShow(false);
            setAddAlbumShow(true);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(false);
            }}>New Album</StyledOptionButton>
          <StyledOptionButton visibility={loggedVisibility}  onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(false);
            setLogInShow(false);
            setSignInShow(false);
            setAddAlbumShow(false);
            setAddtoCollectionShow(true);
            setDeleteFromCollectionShow(false);
            }}>Add to collection</StyledOptionButton>
          <StyledOptionButton visibility={loggedVisibility}  onClick={()=>{
            setAlbumsShow(false);
            setSearchUserShow(false);
            setLogInShow(false);
            setSignInShow(false);
            setAddAlbumShow(false);
            setAddtoCollectionShow(false);
            setDeleteFromCollectionShow(true);
            }}>Delete from collection</StyledOptionButton>
        </OptionsContainer>
        {AlbumsShow && <Albums />}
        {SearchUserShow && <UsersSearch/>}
        {LogInShow && <LogIn changeUser={setUsername} changePass={setPassword} changeVisibility={setVisibility}/>}
        {SignInShow && <SignIn/>}
        {AddAlbumShow && <NewAlbum user={username} pass={password}/>}
        {AddtoCollectionShow && <AddToCollection user={username} pass={password}/>}
        {DeleteFromCollectionShow && <DeleteFromCollection user={username} pass={password}/>}
      </ApolloProvider>
    </Layout>
  )
}

export default App;