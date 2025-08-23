import { MongoClient, ServerApiVersion } from 'mongodb'


export const collectionName = {
    PRODUCTS: "products",
    USERS: "users"
}

export default async function dbconnect(collectionName) {
    const uri =`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.dclhmji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    // return client.db(process.env.DBNAME).collection(collectionName)

    await client.connect(); // Ensure connected
    const db = client.db(process.env.DBNAME);

    return db.collection(collectionName);
}