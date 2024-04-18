#! /usr/bin/env  node

import inquirer from "inquirer"

const answers: {
    Sentence : string
} = await inquirer.prompt([
    {
        name:"Sentence",
        type: "input",
        message: "Enter your sentence to count the word",

    }
])

const words  = answers.Sentence.trim().split(" ");

//print the array of words to the console

console.log(words);

const myName = "               Zarmain Ahmed      "

console.log(`Your sentence word count is , ${words.length}`);