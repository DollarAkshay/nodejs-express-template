/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/


import HttpError from "../classes/httpError.js";
import globals from "globals";

// Middleware to handle 404 errors
export const notFound = (req, res) => {
    res.status(404)
        .json({
            success: false,
            message: `Not Found - ${req.originalUrl}`
        });
};

// Middleware to handle all errors
export const errorHandler = (error, req, res) => {
    if (globals.NODE_ENV === `development`) {
        console.error(``);
        console.error(`--------------------------------------  STACK TRACE  -----------------------------------------------`);
        console.error(error.stack);
        console.error(`----------------------------------------------------------------------------------------------------`);
    }

    // Check if error type is HttpError and set its status code
    if (error instanceof HttpError) {
        res.status(error.statusCode);
    }
    else {
        res.status(500);
    }

    res.json({
        success: false,
        message: error.message
    });
};