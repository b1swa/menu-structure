//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    "merchantID": String,
    "currency": Object,
    "sections": [{ type: ObjectId, ref: 'sectionModel' }]
});

var sectionSchema = new Schema({
        "id": String,
        "name": String,
        "serviceHours": {
          "mon": Object,
          "tue": Object,
          "wed": Object,
          "thu": Object,
          "fri": Object,
          "sat": Object,
          "sun": Object
        },
        "categories": [{ type: ObjectId, ref: 'categoriesModel' }]
     
});

var categoriesSchema = new Schema({
    "id": String,
    "name": String,
    "availableStatus": String,
    "items": [{ type: ObjectId, ref: 'itemModel' }]
});

var itemSchema = new Schema({
    "id": String,
    "name": String,
    "availableStatus": String,
    "description": String,
    "price": Int,
    "photos": Array,
    "specialType": String,
    "modifierGroups": [{ type: ObjectId, ref: 'modifierGroupsModel' }]
});

var modifierGroupsSchema = new Schema({
    "id": String,
    "name": String,
    "availableStatus": String,
    "selectionRangeMin": Int,
    "selectionRangeMax": Int,
    "modifiers": [{ type: ObjectId, ref: 'modifiersModel' }]
});

var modifiersSchema = new Schema({
        "id": String,
        "name": String,
        "availableStatus": String,
        "price": Int
});

var menuModel = mongoose.model('menuModel', menuSchema );
var sectionModel = mongoose.model('sectionModel', sectionSchema);
var categoriesModel = mongoose.model('categoriesModel', categoriesSchema);
var itemModel = mongoose.model('itemModel', itemSchema);
var modifierGroupsModel = mongoose.model('modifierGroupsModel', modifierGroupsSchema);
var modifiersModel = mongoose.model('modifiersModel', modifiersSchema);

module.exports.Menu = menuModel;
module.exports.Section = sectionModel;
module.exports.Categories = categoriesModel;
module.exports.Item = itemModel;
module.exports.ModifierGroups = modifierGroupsModel;
module.exports.Modifiers = modifiersModel;
