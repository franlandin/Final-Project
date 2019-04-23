const path = require('path');
const Token = require('../auth/Token');
const express = require('express');
const controller = require('../controllers/petsController');

const router = express.Router();

router.get('/', Token.verifyParam, controller.getAvailablePets);
router.get('/add-pets', Token.verifyParam, controller.getAddPets);
router.post('/add-pets/', Token.verifyParam, controller.postAddPet);
router.get('/edit-pet/:petId/', Token.verifyParam, controller.getEditPet);
router.post('/edit-pet/:petId/', Token.verifyParam, controller.postEditPet);
router.post('/edit-pet/:petId/delete/', Token.verifyParam, controller.postDeletePet);

router.get('/rent-pet/:petId/', Token.verifyParam, controller.getRentPet);
router.post('/rent-pet/:petId/', Token.verifyParam, controller.postRentPet);


module.exports = router;
