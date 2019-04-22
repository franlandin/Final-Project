// const activityService = require('../services/activityService');

const findByUsername = (req, res) =>{
    const usrname = req.params.username;
    console.log("searching: "+ usrname);
    activityService.findByUsername(usrname)
        .then(result => {res.send(result)})
        .catch(err => {res.send({message: {"error" :true, "detail": err}}) });

}

const findAll = (req, res) =>{
    activityService.findAll()
        .then(result => {res.send(result)})
        .catch(err => {res.send({message: {"error" :true, "detail": err}})  });

}

const insertActivity = (req, res) =>{
    const usrname = req.params.username;
    activityService.insertActivity(usrname)
        .then(result => {res.send(result)})
        .catch(err => {res.send({message: {"error" :true, "detail": err}}) });

}
// const countActivity = (req, res) =>{
//     activityService.countActivity()
//         .then(result => {res.send(result)})
//         .catch(err => {res.send({message: {"error" :true, "detail": err}}) });

// }

module.exports = {
    findByUsername,
    findAll, 
    insertActivity,
    // countActivity
}