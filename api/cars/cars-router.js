const express = require('express')

const Car = require('./cars-model') 

const router = express.Router()

const{
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require('./cars-middleware')

router.get('/',  async (req, res, next)=>{
    try{
        const cars =await Car.getAll()
        res.json(cars)
    }catch(error){
        next(error)
    }
})

router.get('/:id', checkCarId, async (req, res, next)=>{
    try{
        res.json(req.car)
    }catch (error){
        next(error)
    }
})

router.post('/',checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next)=>{
    try{
        const car = await Car.create(req.body)
        res.json(car)
    }catch (error){
        next(error)
    }
})
router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})
module.exports = router