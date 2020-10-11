//Generates team
const generateTeam = team => {
    
    //Generated the Manager on HTML
    const generateManager = manager => {
        console.log(this)
        return `

        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
                <div class="card-body text-success">
                    <h2 class="card-title">${manager.getName()}</h2>
                        <h3 class="card-text">${manager.getTitle()}</h3>
                </div>   
            </div>     
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${manager.getId()}</li>
                <li class="list-group-item">Employee Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Employee Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    `};

    //Generates the Engineer HTML
    const generateEngineer = engineer => {
        return `
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
                <div class="card-body text-success">
                    <h2 class="card-title">${engineer.getName()}</h2>
                        <h3 class="card-text">${engineer.getTitle()}</h3>
                </div>   
            </div>     
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
                <li class="list-group-item">Employee Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Employee GitHub: <a href="https://github.com/${engineer.getGithub()}" target-"_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    `};

    //Generates the Employee HTML
    const generateIntern = intern => {
        return `
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Header</div>
                <div class="card-body text-success">
                    <h2 class="card-title">${intern.getName()}</h2>
                        <h3 class="card-text">${intern.getTitle()}</h3>
                </div>   
            </div>     
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Employee ID: ${intern.getId()}</li>
                <li class="list-group-item">Employee Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">Employee School: ${intern.getSchool()}</li>
            </ul>
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
                <div class="team-card col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>

    </body>
    
`}