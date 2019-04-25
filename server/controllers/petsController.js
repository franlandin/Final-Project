const Pet = require('../models/petModel');



exports.getAvailablePets = (req, res, next) => {
    Pet.fetchAvailable()    
    .then((rows) => {
      rows = {
        a:rows
      }; 
      res.send(rows.a[0]);
      
    })
    .catch(err => console.log(err));
};

exports.postAddPet = (req, res, next) => {
  const name = req.body.name;
  const refugee = req.body.refugee;
  const city = req.body.city;
  const available = req.body.available;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const pet = new Pet(null, name, refugee, city, available, price, imageUrl, null, description);
  const token = req.params.token;
  pet
    .save()
    .then(() => {
      res.redirect(`/pets/token/${token}`);
    })
    .catch(err => console.log(err));
};


  

exports.getAddPets = (req, res, next) => {
  res.send({
  });
};


  exports.getEditPet = (req, res, next) => {
    const petId = req.params.petId;
    console.log("hola");
    Pet.findById(petId)    
    .then(([row]) => {
      console.log("hola");
      res.send( {
        pet : row[0]
      }) 
      console.log(row[0])    
    })
    .catch(err => console.log(err));
  }

  exports.postEditPet = (req, res, next) => {
    console.log(req.body);
    const id = req.params.petId;
    const name = req.body.name;
    const refugee = req.body.refugee;
    const city = req.body.city;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    // console.log(id);
    console.log(name, refugee, city, price, imageUrl, description, id);
    Pet.updatePet(name, refugee, city, price, imageUrl, description, id)
    .then(() => {
      console.log("ok");
      res.send("todo ok");
    })
    .catch(err => console.log(err));
  };

  exports.postDeletePet = (req, res, next) => {
    const id = req.params.petId;
    Pet.deleteById(id)
    .then(() => {
      res.send("hecho");
    })
    .catch(err => console.log(err));
  };

  exports.postRentPet = (req, res, next) => {
    const id = req.params.petId;
    console.log(id);
    Pet.rentPet(id)
    .then(() => {
      res.send('hecho');
    })
    .catch(err => console.log(err));
  };
  exports.getRentPet = (req, res, next) => {
    const petId = req.body.petId;
    Pet.findById(petId)
    .then(([row]) => {
      res.send( {
        pet : row[0]
      })     
    })
    .catch(err => console.log(err));
  }
