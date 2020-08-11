const express = require('express');
const router = express.Router();

const toDoItem = require('../data-models/toDoItem');

router.get('/', async (req, res, next) => {
    try{
        const items = await toDoItem.find();
        res.json(items);
    } catch (error){
        console.log(error.name);
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try{
        const item = new toDoItem(req.body);
        const createdEntry = await item.save();

        res.json(createdEntry);
    } catch (error){
        console.log(error.name);
        if (error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});

router.get("/delete:id", async (req, res, next) => {
    console.log(req.body());    
    const item = await toDoItem.find({_id: req.body});
});

module.exports = router;