import { FC, ReactNode } from "react";

export type StyledOptionButtonProps = {
    visibility: string;
}

export type GqlAlbums = {
    getAlbums : Array<{name:string,img:string,tracks:string[],mixes:string[],year:number}>
}

export type GqlUsers = {
    getUsers : Array<{_id:string,pass:string,user:string,collection:Array<{name:string, img:string}>}>
}

export type LogInProps = {
    changeUser:(user:string) => void;
    changePass:(pass:string) => void;
    changeVisibility:(visibility:string) => void;
}

export type LogInGql = {
    LogIn:{
        user: string;
        pass: string;
    }
}

export type AlbumGql = {
    addAlbum : {name:string,img:string,tracks:string[],mixes:string[],year:number}
}

export type NewAlbumProps = {
    user: string;
    pass: string;
}

export type AddToCollectionProps = {
    user: string;
    pass: string;
}

export type AddToCollectionGql = {
    addtoCollection : {
        _id: string;
        user: string;
        pass: string;
        collection: Array<{
            name: string;
            img: string;
            tracks: string[];
            mixes: string[];
            year: number;
        }>
    }
}