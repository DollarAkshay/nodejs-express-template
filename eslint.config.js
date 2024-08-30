import globals from "globals";
import js from "@eslint/js";
import jsdoc from 'eslint-plugin-jsdoc';
import json from "eslint-plugin-json";


export default [
    // Javascript
    js.configs.recommended,
    jsdoc.configs[`flat/recommended`],
    {
        ignores: [`node_modules/`],
        languageOptions: {
            ecmaVersion: `2024`,
            globals: globals.node
        },
        plugins: {
            js,
            jsdoc,
        },
        rules: {
            "brace-style": [`error`, `stroustrup`],
            "indent": [`error`, 4],
            "no-var": `error`,
            "no-unused-vars": `warn`,
            "quotes": [`warn`, `backtick`],
            "semi": [`error`, `always`],

            'jsdoc/require-description': `warn`
        }
    },


    // JSON
    json.configs.recommended,
    {
        files: [`*.json`],
        plugins: {
            json,
        },
        rules: {
            // Add Rules Here
        }
    }

];