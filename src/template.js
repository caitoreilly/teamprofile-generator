//different functions for building cards depending on employee type
function buildManager(manager) {
  return `
  <div class="mb-3 col-12 col-md-6 col-lg-4">
  <div class="employee-card border border-dark">
    <div class="card-header bg-secondary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
  </div>
  </div>
    `;
}

function buildEngineer(engineer) {
  return `
  <div class="mb-3 col-12 col-md-6 col-lg-4">
  <div class="employee-card border border-dark">
    <div class="card-header bg-secondary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>GitHub: <a href="https://www.github.com/${engineer.github}">${
    engineer.github
  }</a></p>
    </div>
  </div>
  </div>
  `;
}

function buildIntern(intern) {
  return `
  <div class="mb-3 col-12 col-md-6 col-lg-4">
  <div class="employee-card border border-dark">
    <div class="card-header bg-secondary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.school}</p>
    </div>
  </div>
  </div>
  `;
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
    <link rel="stylesheet" href="style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header class="title-bar jumbotron bg-info text-white">
      <h1 class="top text-center">My Team</h1>
    </header>

    <main class="container">
      <section class="row">
       ${buildTeam(data)}
      </div>    
      </section>
    </main>
  </body>
</html>`;
}

module.exports = generatePage;
