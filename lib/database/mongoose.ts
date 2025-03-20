import mongoose , {Mongoose} from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongooseCache: MongooseConnection | undefined;
}

let cached : MongooseConnection = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
    global.mongooseCache = cached;
}

export const connectToDatabase  = async ()=>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error("Missing MongoDB URL");

    cached.promise  = cached.promise || mongoose.connect(MONGODB_URL,{dbName:'imageX',bufferCommands:false})
    cached.conn=await cached.promise
    return cached.conn;
}