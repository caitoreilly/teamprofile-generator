//different functions for building cards depending on employee type
function buildManager(manager) {
  return `
  <div class="employee-card">
    <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${manager.getId()}</p>
        <p>Email: ${manager.getEmail()}</p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
  </div>
    `;
}

function buildEngineer(engineer) {
  return `
  <div class="employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${engineer.getId()}</p>
        <p>Email: ${engineer.getEmail()}</p>
        <p>Office Number: ${engineer.github}</p>
    </div>
  </div>
  `;
}

function buildIntern(intern) {
  return `<h2>${intern.getName()}</h2>`;
}

// function that takes in all of the employees created by the user
function buildTeam(team) {
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => buildManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => buildEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => buildIntern(intern))
      .join("")
  );
  return html.join("");
}

//create function to generate page for html file
//create a div which will house all your cards
//a string literal passing in a function ${buildTeam(team)}
function generatePage(data) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class="title-bar">
      <h1 class="top">Team Profile Generator</h1>
    </header>

    <main class="container">
      <section class="row">
      <div class="row col-12 d-flex justify-content-center>
       ${buildTeam(data)}
      </div>    
      </section>
    </main>
  </body>
</html>`;
}

module.exports = generatePage;
