#! /usr/bin/env node 
//this line is called SHEBANG it tells Os to run this file with node.js
import inquirer from "inquirer"
const answers : {
    sentence : string
} = await inquirer.prompt
(
    [
        {
        name :"sentence",
        type :"input",
        message :"Enter Your Sentence To Count Words:"
        }
    ]
)
const words = answers.sentence.trim().split(" ") //trim  we remove whitespaces 
console.log(words) //to print array of words whish we get by split
console.log(`Word Count of your sentence is ${words.length}`)