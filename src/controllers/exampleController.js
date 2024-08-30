/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/

/**
 * A sample controller to demonstrate how to write controllers
 *
 * @param {*} req Request object 
 * @param {*} res Response object
 * @param {*} next Next function
 * @returns 
 */
export const getData = async (req, res, next) => {
    try {
        
        // Sample data
        const data = {
            name: `Akshay L Aradhya`,
            github: `https://github.com/DollarAkshay`,
        }

        res.status(200)
            .json(data);
    } catch (error) {
        return next(error);
    }
};