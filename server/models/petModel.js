const db = require('../config/database');


module.exports = class Pet {
  constructor(id, name, refugee, city, available, price, imageUrl, date_added, description) {
    this.id = id;
    this.name = name;
    this.refugee = refugee;   
    this.city = city;
    this.available = available;    
    this.price = price;
    this.image_url = imageUrl;
    this.date_added = date_added;
    this.description = description;
    this.available_date = null;
  }

  save() {
    return db.execute(
      'INSERT INTO rent (pet_name, refugee, city, available, price, imageUrl, pet_description, available_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [this.name, this.refugee, this.city, this.available, this.price, this.image_url,  this.description, this.available_date]
    );
  }

  static deleteById(id) {
    return db.execute('DELETE FROM rent WHERE rent.rent_pet_id = ?', [id]);
  }

  static fetchAvailable() {
    return db.execute('SELECT * FROM rent WHERE available = 1');
  }

  static findById(id) {
    return db.execute('SELECT * FROM rent WHERE rent.rent_pet_id = ?', [id]);
  }

  static updatePet(name, refugee, city, price, image_url, description, id){
    return db.execute('UPDATE rent SET pet_name = ?, refugee = ?, city = ?, available = 1, price = ?, imageUrl = ?, available_date = NULL, pet_description = ? WHERE rent_pet_id = ?', [name, refugee, city, price, image_url, description, id])
  }
  static rentPet(id){
    return db.execute('UPDATE rent SET available = ? WHERE rent_pet_id = ?', [0, id])
  } 

};

 
