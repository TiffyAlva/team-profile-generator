//Export the Employee class

class Employee {
   constructor(name, id, email) {

    this.name = name;
    this.id = id;
    this.email = email;

   }

   getName() {
    return this.name;
   }

   getId() {
    return this.id;
   }

   getEmail(){
    return this.email;
   }

   getRole() {                  //Returns 'Employee'
    return this.title;
   }
}

module.exports = Employee;


   




   