const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const HomeModel = mongoose.model('Home')

let getAllHomes=(req, res)=>{
    console.log("getAllHomes .... ");
    
    HomeModel.find()
        .select('-_v-_id')
        .lean()
        .exec((err, result)=>{
            if(err){ res.send(err)}
            else if (result===undefined || result ===null || result===''){
                res.send("No Home found")
            } else {
                res.send(result);
            }
        });
};

let createHome=(req, res)=>{
    console.log("Request body params " + JSON.stringify(req.body));
    let newHome = new HomeModel({
        id:shortid.generate(),
        city:req.body.city,
        type:req.body.type,
        size:req.body.size,
        developer:req.body.developer,
        price:req.body.price,
        status:req.body.status
    })   
    
    newHome.save((err, result)=>{
        if(err){ console.log("Hello ji"); console.log(err);}
        else{console.log("Success to hui"); res.send(result)}
    })    
}

let deleteHome=(req, res)=>{
    console.log(req.params.homeId);
    HomeModel.remove({'id':req.params.homeId}, (err, result)=>{
        if(err){ console.log(err)}
        else if(result==undefined || result==null || result==' '){
            console.log('Home not found')
        } else {
            res.send(result)
        }
    })
}

let viewHomeById=(req, res)=>{
    HomeModel.findOne({'id':req.params.homeId}, (err, result)=>{
        if(err){console.log(err)}
        else if (result==undefined || result==null || result==''){
            console.log(result)
        } else {
            res.send(result)
        }
    })
}

let editHome=(req, res)=>{
    let options = req.body;
    HomeModel.update({'id':req.params.homeId}, options , {multi:true}).exec((err, result)=>{
        if(err){
            res.send(err);
        } else if(result=='undefined' || result=='' || result==null){
            res.send("No such record of home exists");
        } else{
            res.send(result);
        }
    })
}

module.exports = {
    createHome,
    getAllHomes,
    deleteHome,
    viewHomeById,
    editHome
}