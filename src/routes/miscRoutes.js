/*
 ▛                          ▜
                              
   Author : Akshay Aradhya    
   GitHub : DollarAkshay      
   Date   : 2024-08-30        
                              
 ▙                          ▟


*/

import express from "express";
import { developer } from "../controllers/miscController.js";

const router = express.Router();

router.route(`/`).all(developer);
router.route(`/developer`).all(developer);
export default router;