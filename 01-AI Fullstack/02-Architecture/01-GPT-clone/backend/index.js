import 'dotenv/config';

import express from 'express';
import db from './db/db.config.js';


const app = express();




async function startServer(){
    try {
        const connection=await db.getConnection();
        connection.release();
    

        app.listen(3000, err => {
            if (err) {
                throw err;
            }

            console.log("server is running on port http://localhost:3000");
        });
    } catch (err) {
        console.error('error starting server: ', err);
    }
}

startServer();


