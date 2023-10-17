//console only version of the program

import inquirer from "inquirer";
console.log("Hello, world!");
inquirer.prompt([{
    name: "name",
    message: "What is your name?",
}])
.then((answers) => {
    const myName = answers.name;
    console.log("It is good to meet you " + myName);

    setTimeout(function(){

        console.log("The length of your name is:");
        console.log(myName.length);

        setTimeout(function(){

            inquirer.prompt([{
                name: "age",
                message: "What is your age?",
            }])
            .then((answers) => {
                const myAge = answers.age;

                setTimeout(function(){
                    console.log("You will be " + (parseInt(myAge)+1) + " in a year.");
                }, 750);
            });
        }, 750);

    }, 750);
    
});

