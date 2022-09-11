//Export the Intern class

const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() { return "Intern"}   //is this correct?
    getSchool() { return this.scholl}
}


module.exports = Intern