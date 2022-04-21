import { gql } from "@apollo/client";

export const GET_ALBUMS = gql`
    query GetAlbums {
        getAlbums {
            name
            img
            tracks
            mixes
            year
        }
    }
`

export const GET_USERS = gql`
    query GetUsers($user: String!) {
        getUsers(user: $user) {
            _id
            pass
            user
            collection {
                _id
                name
                img
                tracks
                mixes
                year
            }
        }
    }
`

export const LOG_IN = gql`
    query LogIn($user: String!, $pass: String!) {
        LogIn(user: $user, pass: $pass) {
            _id
            user
            pass
  }
}
`

export const CREATE_USER = gql`
mutation SignIn($user: String!, $pass: String!) {
  SignIn(user: $user, pass: $pass) {
    user
    pass
    _id
  }
}
`

export const ADD_ALBUM = gql`
mutation AddAlbum($name: String!, $img: String!, $year: Int!, $tracks: [String], $mixes: [String], $user: String, $pass: String) {
  addAlbum(name: $name, img: $img, year: $year, tracks: $tracks, mixes: $mixes, user: $user, pass: $pass) {
    name
    img
    tracks
    mixes
    year
  }
}
`

export const ADD_TO_COLLECTION = gql`
mutation AddtoCollection($user: String!, $pass: String!, $name: String!) {
  addtoCollection(user: $user, pass: $pass, name: $name) {
    _id
    user
    pass
    collection {
      name
    }
  }
}
`

export const DELETE_FROM_COLLECTION = gql`
    mutation DeletefromCollection($user: String!, $name: String!, $pass: String!) {
  deletefromCollection(user: $user, name: $name, pass: $pass) {
    _id
    user
    pass
    collection {
      name
    }
  }
}
`