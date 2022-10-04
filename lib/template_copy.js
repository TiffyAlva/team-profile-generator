const path = require ("path");
const fs= require('fs')

function addValue(template, valueName, value){
    let reg = new RegExp(`{{${valueName}}}`, 'g')
    return template.replace(reg, value)
}

function renderTeam(members){
    let outputHTML = "";
    for (let member of members){
        const outputPath = path.resolve(__dirname, "../templates", `${member.getRole().toLowerCase()}.html`)
        let data = fs.readFileSync(outputPath, 'utf8')
        data = addValue(data, 'name', member.getName())
        data = addValue(data, 'id', member.getId())
        data = addValue(data, 'email', member.getEmail())
        data = addValue(data, 'role', member.getRole())
        switch (member.getRole()) {
            case 'Engineer':
                data = addValue(data, 'github', member.getGithub())
                break;
            case 'Manager':
                data = addValue(data, 'officeNumber', member.getOfficeNumber())
                break;
            case 'Intern':
                data = addValue(data, 'school', member.getSchool())
                break;
            default:
                break;
        }
        outputHTML += data
    }

    const templatePath = path.resolve(__dirname, "../templates/main.html");
    let mainData = fs.readFileSync(templatePath, "utf8")

    return addValue(mainData, 'team', outputHTML)

}

module.exports = renderTeam