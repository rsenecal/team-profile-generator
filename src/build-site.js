const generateTeam =(team) => {
    console.log(team)
    const html = [];
const managerCard = manager => {
console.log(manager);
let managerCardHtml = `
<div class="card" style="width: 18rem;>
    <div class="card-header">
    <ul>
    ${manager.name}
    ${manager.email}
    ${manager.id}
    ${manager.officeNumber}
    </ul>
</div>
`; 
html.push(managerCardHtml)
}
const internCard = intern => {
console.log(intern);
let internCardHtml = `
<div class="card" style="width: 18rem;>
    <div class="card-header">
    <ul>
    ${intern.name}
    ${intern.email}
    ${intern.id}
    ${manager.school}
    </ul>
</div>
`; 
html.push(internCardHtml)
    }


const engineerCard = engineer => {
console.log(engineer);
let engineerCardHtml = `
<div class="card" style="width: 18rem;>
    <div class="card-header">
    <ul>
    ${intern.name}
    ${intern.email}
    ${intern.id}
    ${manager.school}
    </ul>
</div>
`; 
html.push(enginnerCardHtml)
    }

for (let i= 0; i< team.length; i++) {
    if(team[i].getRole() === "Manager") {
        managerCardHtml(team[i]);
    }

    if(team[i].getRole() === "Engineer") {
        engineerCardHtml(team[i]);
    }
    if(team[i].getRole() === "intern") {
        internCardHtml(team[i]);
    }
}
return html.join('')
}
module.exports = team => {
    return 
    `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Team Generator</title>
    </head>
    <body>
    `
}