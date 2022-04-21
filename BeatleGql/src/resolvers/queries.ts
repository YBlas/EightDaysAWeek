import { Collection } from "mongodb";


export const Query = {
    test: () => { return "Esto funciona!!" },

    getAlbums: async (parent: any, args: any, context: { Albums: Collection }) => {
        const albums = await context.Albums.find().toArray();
        return albums;
    },

    LogIn: async (parent: any, args: { user: string, pass: string }, context: { Users: Collection }) => {
        const user = await context.Users.findOne({ user: args.user, pass: args.pass });
        if (user) {
            return user;
        } else {
            throw new Error("Not registered");
        }
    },

    getUsers: async (parent: any, args: { user: string }, context: { Users: Collection }) => {
        const user = args.user;
        const users = await context.Users.find({ user: { $regex: user } }).toArray();
        return users;
    },

    getUserAlbums: async (parent: any, args: { user: string }, context: { Users: Collection, Albums: Collection }) => {
        const user = await context.Users.findOne({ user: args.user });
        if (user) {
            if (user.collection) {
                const albums = await Promise.all(user.collection.map(async (elem: any) => {
                    const album = await context.Albums.findOne({ name: elem });
                    return album;
                }));
                return albums;
            } else {
                return [];
            }
        } else {
            throw new Error("There's no user with that name");
        }
    }
}

//Mira ese bonito encadenado Valero

export const User = {
    collection: async (parent: { collection: string[] }, args: any, context: { Albums: Collection }) => {
        if (parent.collection) {
            const albums = await Promise.all(parent.collection.map(async (elem) => {
                const album = await context.Albums.findOne({ name: elem });
                return album;
            }))
            return albums;
        } else {
            return [];
        }
    }
}