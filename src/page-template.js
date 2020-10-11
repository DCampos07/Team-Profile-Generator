//Generates team
const generateTeam = team => {
    
    //Generates the Manager HTML
    const generateManager = manager => {
        console.log(this)
        return `
        <div class="card border-success mb-3 manager">
            <div class ="card-body text-success">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-text">${manager.getTitle()}</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${manager.getName()}'s ID: ${manager.getId()}</li>
                    <li class="list-group-item">${manager.getName()}'s Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">${manager.getName()}'s Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `};

    //Generates the Engineer HTML
    const generateEngineer = engineer => {
        return `
        <div class="card border-success mb-3 engineer">
            <div class ="card-body text-success">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-text">${engineer.getTitle()}</h3>       
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${engineer.getName()}'s ID: ${engineer.getId()}</li>
                    <li class="list-group-item">${engineer.getName()}'s Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">${engineer.getName()}'s GitHub: <a href="https://github.com/${engineer.getGithub()}" target-"_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    `};

    //Generates the Intern HTML
    const generateIntern = intern => {
        return `
        <div class="card border-success mb-3 intern">
            <div class ="card-body text-success">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-text">${intern.getTitle()}</h3>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${intern.getName()}'s ID: ${intern.getId()}</li>
                    <li class="list-group-item">${intern.getName()}'s Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">${intern.getName()}'s School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
`};

    const html = [];
    html.push(team
        .filter(employee => employee.getTitle() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getTitle() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getTitle() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    console.log(html)
        return html.join("");
}

//HTML page funtion
module.exports = team => {
    return `
    <!DOCTYPE html>
        <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Amazing Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                    ${generateTeam(team)}
            </div>
        </div>

    </body>
    
`}