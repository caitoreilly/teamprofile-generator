//create function to generate page for html file
//!doctype
//create a div which will house all your cards
//a string literal passing in a function ${buildTeam(team)}

function buildManager(manager) {
  return `<h2>${manager.getName()}</h2>`;
}

function buildEngineer(engineer) {
  return `<h2>${engineer.getName()}</h2>`;
}

function buildIntern(intern) {
  return `<h2>${intern.getName()}</h2>`;
}

//different functions for building cards depending on employee type
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
    ${buildTeam(data)}
              
      </section>
    </main>
  </body>
</html>`;
}

module.exports = generatePage;

// <div class="col-2">
//         <div class="card">
//     </div>
//     <div class="col-10 d-flex flex-column">
//         <div class="p-2"></div>
