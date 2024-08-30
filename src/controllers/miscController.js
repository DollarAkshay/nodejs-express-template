/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/


/**
 * Display the developer information
 * @param {*} req Request object
 * @param {*} res Response object
 */
export const developer = (req, res) => {

    const data = {
        message: `These API's were designed and developed by Akshay L Aradhya`,
        developers: [
            {
                name: `Akshay L Aradhya`,
                github: `https://github.com/DollarAkshay`,
                linkedin: `https://www.linkedin.com/in/dollarakshay/`
            }
        ]
    };

    res.status(200).json(data);   
};