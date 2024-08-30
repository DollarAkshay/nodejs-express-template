/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟


*/

import express from "express";
import { getData } from "../controllers/exampleController.js";

const router = express.Router();

router.route(`/data`).all(getData);

export default router;