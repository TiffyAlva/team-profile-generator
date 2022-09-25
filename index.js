//Classes 
const inquirer = require ("inquirer")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const template = require("./src/template")
//Dependency
const fs = require("fs");



var employeeArray = []


function mainQuestions(){
    inquirer.prompt([{
        type: "list",
        name: "role",
        message: "Which role do you like to add?",
        choices: [
            "Manager", "Engineer", "Intern", "None"
        ] 
    }])
    
    .then((answers)=>{
        console.log(answers)
        if(answers.role == "Manager"){
            createManager()
            
        } 
        if(answers.role == "Engineer"){
            createEngineer()
            
        }
        if(answers.role == "Intern"){     
            createIntern()
        }
        if(answers.role == "None"){
            console.log(employeeArray)
            const result = template(employeeArray)
            console.log (result) 
            fs.writeFile("./output/team.html", result, function(){
                console.log("Team created!")
            })

        }
    })
}
            



//Manager
function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is the Manager's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What's the Manager's ID?"
        },

        {
            type:"input",
            name:"email",
            message:"What is the Manager's email?",
        },

        {
            type:"input",
            name:"officeNumber",
            message:"What's the Manager's office number?",
        },
    ])

    .then((answers)=>{
        console.log(answers)
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(newManager)
        employeeArray.push(newManager)
        mainQuestions()

    })
}

//Engineer
function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is the Engineer's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What's the Engineer's ID?"
        },

        {
            type:"input",
            name:"email",
            message:"What is the Engineer's email?",
        },

        {
            type:"input",
            name:"github",
            message:"What's the Engineer's GitHub?",
        },
    ])

    .then((answers)=>{
        console.log(answers)
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(newEngineer)
        employeeArray.push(newEngineer)
        mainQuestions()

    })
}

//Intern
function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "name", 
            message: "What is the Intern's name?"
        },

        {
            type: "input",
            name: "id",
            message: "What's the Intern's ID?"
        },

        {
            type:"input",
            name:"email",
            message:"What is the Intern's email?",
        },

        {
            type:"input",
            name:"github",
            message:"What's the Intern's school?",
        },
    ])

    .then((answers)=>{
        console.log(answers)
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        console.log(newIntern)
        employeeArray.push(newIntern)
        mainQuestions()

    })
}







mainQuestions();