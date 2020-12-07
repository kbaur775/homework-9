var inquirer = require('inquirer');
var fs = require('fs');

var counter = 0;

// array of questions for user
const questions = [
  {
    name: "title",
    message: "What is the title?"
  },
  {
    name: "description",
    message: "What is the description?"
  },
  {
    name: "installation",
    message: "How to install?"
  },
  {
    name: "usage",
    message: "How to use?"
  },
  {
    name: "contributors",
    message: "Who are contributors?"
  },
  {
    name: "license",
    type: "list",
    message: "Which license do you want to use?",
    choices: ["No License", "Baur License"]
  },
  {
    name: "username",
    message: "What's your Github username?",
  },
  {
    name: "email",
    message: "What's your email?",
  },
];

// function to write README file
function writeToFile(fileName, answers) {
  var readme = "";
  readme += "# " + answers["title"] + "\n"
  readme += "### " + "Description" + "\n"
  readme += answers["description"] + "\n"

  readme += "### Table of Contents" + "\n"
  readme += "[Installation](#install)" + "\n"
  readme += "[Usage](#usage)" + "\n"
  readme += "[Contributors](#contributors)" + "\n"
  readme += "[License](#license)" + "\n"
  readme += "[QUestions](#questions)" + "\n"

  readme += "### Installation<a name='install'></a>" + "\n"
  readme += answers["installation"] + "\n"
  readme += "### Usage<a name='usage'></a>" + "\n"
  readme += answers["usage"] + "\n"
  readme += "### Contributors<a name='contributors'></a>" + "\n"
  readme += answers["contributors"] + "\n"
  readme += "### License<a id='License'></a>" + "\n"
  readme += answers["license"] == "Baur License" ? "Baur License \#" + counter++ : "Open License";
  readme += "\n";
  readme += "### Questions?<a name='questions'></a>" + "\n"
  readme += "Github: @" + answers["username"] + "\n"
  readme += "Email: " + answers["email"] + "\n"

  fs.writeFile("./" + fileName, readme, function (err) {
    if (err) return console.log(err);
  })
}

// function to initialize program
function init() {
  inquirer
      .prompt(questions)
      .then(answers => {
          writeToFile("README.MD", answers);
      })
      .catch(error => {
        console.log(error)
      });
}

// function call to initialize program
init();
