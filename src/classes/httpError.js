/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/

class HttpError extends Error {
    statusCode;

    constructor (statusCode, message) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        Error.captureStackTrace(this, HttpError);
        this.name = `HttpError`;
        this.statusCode = statusCode;
    }
}

export default HttpError;