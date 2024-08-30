/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟
*/

// Load the server.config.json file
import serverConfig from "./server.config.json" with { type: "json" };

export const PORT = serverConfig.port;
export const NODE_ENV = serverConfig.node_env;