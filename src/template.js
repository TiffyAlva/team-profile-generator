function html(employeeArray){
    //console.log (employeeArray,"Template")
    let managerHTML = ""

    for(let employee of employeeArray){
        console.log('employee', employee.name)

        let data //array content

        data // insert values (name:  employee.name)

        switch (employee.getRole()) {
            case 'Manager':
                data //insert values (data, officeNumber, employee.officeNumber)
                break;
            case 'Engineer':
                data //insert values (data, github, employee.github)
                break;
            default:
                break;
        }


        return `
        <!DOCTYPE html>
        <html lang="en-US">
          <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width", initial-scale="1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/3340e9f285.js" crossorigin="anonymous"></script> 
            <title>My Team</title>
            <link rel="stylesheet" href="./assets/style.css">
          </head>
        
          <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron bg-success mb-5">
                        <h1 class="text-center text-white">My Team</h1>
                    </div>
                </div>
            </div>
             
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        <div class="card employee-card">
                            <div class="card-header bg-warning ">
                                <h2 class="card-title text-black">${data.name}</h2>
                              
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        
          </body>
        </html>
        `
        
    }
    
    for(let i=0; i<employeeArray.length; i++){
        
        
        return `
        <!DOCTYPE html>
        <html lang="en-US">
          <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width", initial-scale="1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/3340e9f285.js" crossorigin="anonymous"></script> 
            <title>My Team</title>
            <link rel="stylesheet" href="./assets/style.css">
          </head>
        
          <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron bg-success mb-5">
                        <h1 class="text-center text-white">My Team</h1>
                    </div>
                </div>
            </div>
             
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        <div class="card employee-card">
                            <div class="card-header bg-warning ">
                                <h2 class="card-title text-black">${employeeArray[i].name}</h2>
                                <h3 class="card-title text-black"><i class="fa-solid fa-mug-hot"></i>${employeeArray[i].getRole()}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <p class="list-group-item-success"><b>ID:</b>${employeeArray[i].id}</p>
                                    <p class="list-group-item-success"><b>Email:</b> <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
                                    <p class="list-group-item-success"><b>Office number:</b>${employeeArray[i].getRole() === 'Manager' ? 
                                    employeeArray[i].officeNumber
                                    : employeeArray[i].getRole() === 'Engineer' ?
                                    employeeArray[i].github
                                    : 
                                    employeeArray[i].school}</p>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
          </body>
        </html>`
    }
}

module.exports = html