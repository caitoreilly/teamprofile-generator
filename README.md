# teamprofile-generator

## Description 

---

This Team Profile Generator is a Node.js command-line application that dynamically generates an HTML file of cards for each employee and the employee's information based on what the user inputs. After a user enters responses for a series of questions about their team, the user can find their generated HTML file in the dist directory. For further information, please visit my GitHub Repository [here]().

## Table of Contents 

---

- [Installation](#installation)
- [Usage](#usage)
- [Demonstration](#demonstration)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

---

Please follow the steps outlined below to install this application and get the development environment up and running on your local device:

1. Before you begin, ensure that you have Node.js installed on your local machine. Follow the instructions listed [here](https://nodejs.org/en/download/) to download and install Node.js.

2. In your terminal, use the command git clone and paste the link to this repository so that you can clone it to your local machine.

3. Then run the command "npm init -y" to install Node Package Manager.

4. Next run the command "npm i inquirer" to install Inquirer and its associated dependencies. 

5. Lastly, run the command "npm install jest –save-dev" which will add Jest to the devDependencies list to allow for testing.

## Usage 

---

Please follow the steps outlined below for how to use the command-line application once all of the necessary programs and npm packages are installed:

1. Prior to invoking the application, run "npm run test" in the command line to run tests for Employee.test.js, Engineer.test.js, Intern.test.js, and Manager.test.js.

2. To begin using the application, run "node index.js" in the command line. This will tell Node.js runtime to read the index.js file's code and execute it.

3. You will then go through and answer an array of questions by selecting different types of employees and typing in their information. Press enter after you input your response for each question to bring you to the next question in the terminal. If you do not answer a required question, you will be prompted to do so before you can move on to the next question.

4. Once you have gone through all of the questions, your answers will be saved and this data will be used to to generate your individualized team.html file via the writeFile function.

5. You can find your newly generated team.HTML file in the dist folder of the repository in VS Code. You can open it up to view it and you can right click to open it in your browser. You will see all of your responses in each of the cards on the page. You can click on the email addresses to send an email to that employee and you can click on the GitHub usernames to look at that employee's GitHub account.

## Demonstration 

---

You can view this [video tutorial](https://drive.google.com/file/d/1V_o0iosXwMqvvPjbB_QJIT750rasnAmt/view?usp=sharing) which demonstrates how to use the Team Profile Generator command-line application step by step.

## Contributing 

---

Caitlin O'Reilly is the primary contributor of this Team Profile Generator. If you are interested in contributing to this project, you are welcome to fork it.

- Please see the Questions section for Caitlin O'Reilly's contact information.

## Questions 

---

If you have any questions about this project, please feel free to contact me directly via email at coreilly29@gmail.com.
You can also view my additional projects at https://github.com/caitoreilly.
