import { Collection } from "mongodb";


export const Mutation = {
    addAlbum: async (parent: any, args: { user: string, pass: string, name: string, img: string, tracks: [string], mixes: [string], year: number }, context: { Albums: Collection, Users: Collection }) => {

        const user = await context.Users.findOne({ user: args.user, pass: args.pass });
        if (user) {
            const exist = await context.Albums.findOne({ name: args.name });

            if (!exist) {
                const { name, img, tracks, mixes, year } = args;
                const newAlbum = { name, img, tracks, mixes, year };
                await context.Albums.insertOne(newAlbum);
                const album = await context.Albums.findOne({ name: newAlbum.name });
                return album;
            } else {
                throw new Error("Album already exists");
            }
        } else {
            throw new Error("Not logged In");
        }
    },

    SignIn: async (parent: any, args: { user: string, pass: string }, context: { Users: Collection }) => {
        const user = await context.Users.findOne({ user: args.user });
        if (!user) {
            const { user, pass } = args;
            const newUser = { user, pass };
            await context.Users.insertOne(newUser);
            const User = await context.Users.findOne({ user: newUser.user });
            return User;
        } else {
            throw new Error("User already exists");
        }
    },

    addtoCollection: async (parent: any, args: { user: string, pass: string, name: string }, context: { Users: Collection, Albums: Collection }) => {
        const user = await context.Users.findOne({ user: args.user, pass: args.pass });
        if (user) {
            const exist = await context.Albums.findOne({ name: args.name });
            if (exist) {
                if (!user.collection) {
                    user.collection = [];
                }
                if (!user.collection.includes(exist.name)) {
                    user.collection.push(args.name);
                    await context.Users.updateOne({ user: user.user }, { $set: { collection: user.collection } });
                    const User = await context.Users.findOne({ user: user.user });
                    return User;
                } else {
                    throw new Error("Album already in collection");
                }
            } else {
                throw new Error("Album doesn't exist");
            }
        } else {
            throw new Error("Not logged In");
        }
    },

    deletefromCollection: async (parent: any, args: { user: string, pass: string, name: string }, context: { Users: Collection, Albums: Collection }) => {
        const user = await context.Users.findOne({ user: args.user, pass: args.pass });
        if (user) {
            const exist = await context.Albums.findOne({ name: args.name });
            if (exist) {
                if (user.collection) {
                    const index = user.collection.indexOf(args.name);
                    if (index > -1) {
                        user.collection.splice(index, 1);
                        await context.Users.updateOne({ user: user.user }, { $set: { collection: user.collection } });
                        const User = await context.Users.findOne({ user: user.user });
                        return User;
                    } else {
                        throw new Error("Album doesn't exist in collection");
                    }
                } else {
                    throw new Error("User doesn't have any collection");
                }
            } else {
                throw new Error("Album doesn't exist");
            }
        } else {
            throw new Error("Not logged In");
        }
    }
}