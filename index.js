import express from 'express';
import bodyParser from "body-parser";
import exitHook from 'async-exit-hook';
import 'dotenv/config';

import route from "./api/v1/routes/route.js";
import { connectDatabase, getDatabase, closeDatabase } from './config/database.js';

const startServer = async () => {
    const app = express();
    const port = 3000;

    // parse application/json
    app.use(bodyParser.json());

    // Connect database
    connectDatabase();

    route(app);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });

    // Close database when error
    exitHook(() => {
        console.log('App exit!');
        closeDatabase();
    });

}

// IIFE
(async () => {
    try {
        await connectDatabase();
        console.log("Connect to MongoDB Cloud Atlas!");

        // Khởi động server
        startServer();
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
})()

// connectDatabase()
//     .then(() => console.log("Connect to MongoDB Cloud Atlas!"))
//     .then(() => startServer())
//     .catch(error => {
//         console.error(error);
//         process.exit(0);
//     })