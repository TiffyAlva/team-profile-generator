function html(employeeArray){
    return `<!DOCTYPE html>
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
            <h2 class="card-title text-black">${employeeArray[0].name}</h2>
            <h3 class="card-title text-black"><i class="fa-solid fa-mug-hot"></i> Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <p class="list-group-item-success"><b>ID:</b>${employeeArray[0].id}</p>
                <p class="list-group-item-success"><b>Email:</b> <a href="mailto:${employeeArray[0].email}">${employeeArray[0].email}</a></p>
                <p class="list-group-item-success"><b>Office number:</b>${employeeArray[0].officeNumber}</p>
            </ul>
        </div>
    </div>
    
    
    <div class="card employee-card">
        <div class="card-header bg-warning">
            <h2 class="card-title text-black">${employeeArray[1].name}</h2>
            <h3 class="card-title text-black"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <p class="list-group-item-success"><b>ID:</b>${employeeArray[1].id}</p>
                <p class="list-group-item-success"><b>Email:</b> <a href="mailto:${employeeArray[1].email}">${employeeArray[1].email}</a></p>
                <p class="list-group-item-success"><b>GitHub:</b> <a href="https://github.com/${employeeArray[1].github}" target="_blank" rel="noopener noreferrer">${employeeArray[1].github}</a></p>
            </ul>
        </div>
    </div>
    
    <div class="card employee-card">
        <div class="card-header bg-warning">
            <h2 class="card-title text-black">${employeeArray[2].name}</h2>
            <h3 class="card-title text-black"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <p class="list-group-item-success"><b>ID:</b>${employeeArray[2].id}</p>
                <p class="list-group-item-success"><b>Email:</b> <a href="mailto:${employeeArray[2].email} ">${employeeArray[2].email}</a></p>
                <p class="list-group-item-success"><b>GitHub:</b> <a href="https://github.com/${employeeArray[2].github}" target="_blank" rel="noopener noreferrer">Kalva3</a></p>
            </ul>
        </div>
    </div>
        
    
    <div class="card employee-card">
        <div class="card-header bg-warning">
            <h2 class="card-title text-black">${employeeArray[3].name}</h2>
            <h3 class="card-title text-black"><i class="fa-sharp fa-solid fa-graduation-cap"></i> Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <p class="list-group-item-success"><b>ID:</b>${employeeArray[3].id}</p>
                <p class="list-group-item-success"><b>Email:</b> <a href="mailto:${employeeArray[3].email}">${employeeArray[3].email}</a></p>
                <p class="list-group-item-success"><b>School:</b>${employeeArray[3].school}</p>
            </ul>
        </div>
    </div>
                </div>
            </div>
        </div>
    
    
        
          
    
    
    
      </body>
    </html>`
}

module.exports = html