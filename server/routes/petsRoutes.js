const path = require('path');
const Token = require('../auth/Token');
const express = require('express');
const controller = require('../controllers/petsController');

const router = express.Router();

router.get('/', Token.verifyParam, controller.getAvailablePets);
router.get('/add-pets/token/:token', Token.verifyParam, controller.getAddPets);
router.post('/add-pets/token/:token', Token.verifyParam, controller.postAddPet);
router.get('/edit-pet/:petId/token/:token', Token.verifyParam, controller.getEditPet);
router.post('/edit-pet/:petId/token/:token', Token.verifyParam, controller.postEditPet);
router.post('/edit-pet/:petId/delete/token/:token', Token.verifyParam, controller.postDeletePet);

router.get('/rent-pet/:petId/token/:token', Token.verifyParam, controller.getRentPet);
router.post('/rent-pet/:petId/token/:token', Token.verifyParam, controller.postRentPet);


module.exports = router;
