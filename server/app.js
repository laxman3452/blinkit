import 'dotenv/config'
import fastify from 'fastify';
import mongoose from 'mongoose';
import { PORT } from './src/config/config.js';
// import { connectDB } from './src/config/connect';
import {admin,buildAdminRouter} from "./src/config/setup.js";

const connectDB = async(url)=>{
    mongoose.connect(url)
 .then(() => console.log('Connected to MongoDB successfully!'))
 .catch((err) => console.error('Failed to connect to MongoDB:', err));

}

const start = async()=>{
   


    const app = fastify()
    await buildAdminRouter(app)
    await connectDB(process.env.MONGO_URL);





    app.listen({port:PORT || 3000, host:'0.0.0.0'}, (err,addr)=>{
        if(err){
            console.log(err)

        }
        else {
            console.log(`Blinkit-Server Started on http://localhost:${PORT}${admin.options.rootPath}`)
        }
    } );

}
start();