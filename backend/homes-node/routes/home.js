const express = require('express');
const homeController = require('./../controllers/homeController');
const appConfig = require('./../config/appConfig');

console.log('homeController');

let setRouter =(app)=>{
    let baseUrl = appConfig.apiVersion+'/homes';
    console.log('homeController.getAllHomes');
    app.get(baseUrl+'/all', homeController.getAllHomes);
    app.post(baseUrl+'/create', homeController.createHome);
    app.post(baseUrl+'/:homeId/delete', homeController.deleteHome);
    app.put(baseUrl+'/:homeId/edit', homeController.editHome);
    app.get(baseUrl+'/:homeId/viewHomeById', homeController.viewHomeById);
   // http://localhost:3000/api/v1/homes/iH64wPFVG/viewHomeById%7D
}

module.exports = {
    setRouter : setRouter
}