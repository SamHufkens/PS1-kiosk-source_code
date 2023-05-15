const {Router} = require('express');
const router = Router();
const Resident = require('../models/resident')
const Activity = require('../models/activity')

router.get("/", async (req, res) => {
    const activity = await Activity.find().sort({createdAt: -1})
    res.render("home", {
        title: "WZC kiosk",
        activities: activity
    }) 
}); 

router.get("/search", async (req, res) => {
    const searchTerm = req.query.term;
    console.log(searchTerm)
    const residents = await Resident.find({initialen: {$regex: searchTerm, $options: 'i'}})
    
    res.json(residents)
})

router.get("/:id", async (req, res) => {
    const resident = await Resident.findById(req.params.id)
    console.log(resident)
    res.json(resident) 
})

  
module.exports = router;