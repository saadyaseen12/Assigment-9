var softwareCompany = {
    
    name: "Saad Khan",
    founder: "Microsoft",
    yearFounded: 2021,
    products: ["whatsapp", "Visual Studio Code", "Azure"]
  };
  
  
  console.log("The name of the software company is " + softwareCompany.name);
  console.log("The founder of the software company is " + softwareCompany.founder); 
  console.log("The software company was founded in " + softwareCompany.yearFounded); 
  console.log("The software company has " + softwareCompany.products.length + " products"); 
  console.log("The first product of the software company is " + softwareCompany.products[0]); 


  var car = {
    
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    
    drive: function() {
      
      console.log("The car is being driven");
    }
  };
  

  car.drive(); 