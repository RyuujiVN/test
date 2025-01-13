import { MongoClient, ServerApiVersion } from "mongodb";

let databaseInstance = null;

const mongoClientInstance = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const connectDatabase = async () => {
    await mongoClientInstance.connect();

    databaseInstance = mongoClientInstance.db(process.env.DATABASE_NAME)
}

export const closeDatabase = async () => {
    await mongoClientInstance.close();
}

export const getDatabase = () => {
    if (!databaseInstance)
        throw new Error("Must connect to database first!");
    else
        return databaseInstance;
}