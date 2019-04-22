const Pet = require('../models/petModel');



exports.getAvailablePets = (req, res, next) => {
    Pet.fetchAvailable()    
    .then((rows) => {
      
      console.log(rows);
      res.send(rows);
      
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
  console.log("hola");
  pet
    .save()
    .then(() => {
      res.redirect(`/pets/token/${token}`);
    })
    .catch(err => console.log(err));
};


  

exports.getAddPets = (req, res, next) => {
  const token = req.params.token;
  res.render('pets/add-pets', {
    token,
    pageTitle: 'Add Pet',
  });
};


  exports.getEditPet = (req, res, next) => {
    const petId = req.params.petId;
    const token = req.params.token;
    console.log("hola");
    Pet.findById(petId)    
    .then(([row]) => {
      console.log("hola");
      res.render('pets/edit-pet', {
        token,
        pageTitle: 'Edita tu mascota',
        pet : row[0]
      })     
    })
    .catch(err => console.log(err));
  }

  exports.postEditPet = (req, res, next) => {
    const id = req.params.petId;
    const name = req.body.name;
    const refugee = req.body.refugee;
    const city = req.body.city;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const token = req.params.token;
    console.log(name, refugee, city, price, imageUrl, description, id);
    Pet.updatePet(name, refugee, city, price, imageUrl, description, id)
    .then(() => {
      console.log("ok");
      res.redirect(`/pets/token/${token}`);
    })
    .catch(err => console.log(err));
  };

  exports.postDeletePet = (req, res, next) => {
    const id = req.params.petId;
    const token = req.params.token;
    Pet.deleteById(id)
    .then(() => {
      res.redirect(`/pets/token/${token}`);
    })
    .catch(err => console.log(err));
  };

  exports.postRentPet = (req, res, next) => {
    const id = req.params.petId;
    const token = req.params.token;
    console.log(id);
    const interval = req.body.interval;
    console.log(interval);
    Pet.rentPet(interval, id)
    .then(() => {
      res.redirect(`/pets/token/${token}`);
    })
    .catch(err => console.log(err));
  };
  exports.getRentPet = (req, res, next) => {
    const petId = req.params.petId;
    const token = req.params.token;
    Pet.findById(petId)
    .then(([row]) => {
      res.render('pets/rent-pet', {
        token,
        pageTitle: 'Alquila la mascota',
        pet : row[0]
      })     
    })
    .catch(err => console.log(err));
  }
