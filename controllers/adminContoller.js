const {Router} = require('express');
const router = Router();
const Resident = require('../models/resident')
const Activity = require('../models/activity')

router.get("/admin", async (req, res) => {
    res.render("admin", {
        title: "Admin"
    })
})
 

router.post("/submitResident", async (req, res) => {
    try {
        const {initialen, afdeling, kamernummer, actief, plattegrond} = req.body;
        console.log(initialen, plattegrond)
        const resident = new Resident({
            initialen, afdeling, kamernummer, actief, plattegrond
        })
        await resident.save()
        console.log("Resident added")
    } catch (err) {
        console.log(err)
    }
});

router.post("/submitActivity", async (req, res) => {
    try {
        const {title, date, time, location} = req.body;
        console.log(title, date)
        const activity = new Activity({
            title, date, time, location
        })
        await activity.save()
        console.log("activity added")
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;