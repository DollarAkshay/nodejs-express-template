/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/

import express from "express";
import cors from "cors";

import * as globals from "./config/globals.js";

// Import routes
import exampleRoutes from "./routes/exampleRoutes.js";
import miscRoutes from "./routes/miscRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
const BASE_ENDPOINT = `/api`;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(`/`, miscRoutes);
app.use(`${BASE_ENDPOINT}/example`, exampleRoutes);

app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(globals.PORT, () => {
    console.log(`Server running on port ${globals.PORT}`);
});

