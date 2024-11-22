import 'dotenv/config'

import fastifySession from '@fastify/session';
import ConnectMongoDBSession from 'connect-mongodb-session';
import { Admin } from '../models/index.js';

const MongoDBStore = ConnectMongoDBSession(fastifySession)

export const sessionStore = new MongoDBStore({
    uri : process.env.MONGO_URL,
    collection:'sessions'
})

sessionStore.on('error', (error)=>{
    console.log("Session Store Error", error);
});

export const authenticate = async (email,password)=>{
    if(email=='poudelphoto99@gmail.com' && password == '34522484'){
        return Promise.resolve({email:email,password:password});

    }
    else {
        return  null;
    }
};

export const PORT = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;
