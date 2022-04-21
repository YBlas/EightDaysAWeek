import { Collection, MongoClient, Db } from "mongodb";

//Mediante esta función Array conectaremos a la base de datos mongo, puede cambiar el URL de esta función y en cada llamada a esta función el nombre de las colecciones para que funcione con su propia base de datos
export const connectMongo = async (): Promise<Db> => {
    const url = "mongodb+srv://Picard:engage@mongomake.3ta2r.mongodb.net/MongoMake?retryWrites=true&w=majority";
    const client = new MongoClient(url);
    const conexion = client.connect();
    conexion.then((elem)=>{
        console.log(`Conectado a Mongodb`)
    })
    const cole = await client.db("Vicio");
    return cole;
}

