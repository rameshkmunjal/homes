const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({    
    id:{type:String, unique:true},
    city:{type:String, default:''},
    type:{type:String, default:''}, //residential or commercial
    size:{type:String, default:''}, //in sq ft
    developer:{type:String, default:''}, //name of developer
    price:{type:String, default:''}, //in Rupee lacs
    status:{type:String, default:''} //ready to move , complete in 2020
});
//mongod.exe --dbpath  ..\test\mongodb\data
//making a copy of Schema
console.log("Registering schema");
mongoose.model('Home', HomeSchema);