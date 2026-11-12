import 'dotenv/config';

import express from 'express';
import db from './db/db.config.js';
import  {errorHandler} from './src/middleware/errorHandler.js';
import mainRouter from './src/api/main.routes.js';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
    }));

app.use(express.json());
app.use('/api', mainRouter);
//final middleware for error handeling
app.use(errorHandler);
async function startServer(){
    try {
        const connection=await db.getConnection();
        connection.release();
    console.log('db connected')

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


