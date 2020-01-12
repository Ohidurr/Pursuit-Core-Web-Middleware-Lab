const express = require('express')
const cors = require('cors')

 const port = 3000;

 
const app = express()
 app.use(cors())
 
 const animalArray = ['lion','zebra','monkey','dinosaur','fish','cat','lizard']

 let randomNum
 let arr =[]
 const generateSpread = (req, res, next) => {
    let query = req.query
    let ceil = query.ceil
    let floor = query.floor
    randomNum = (Math.floor(Math.random()*(ceil-floor)+(floor)))
     next()
     
    }
    
    const isAnimal = (req, res, next) => {
        let animal = req.params.id 
        
        if(!animalArray.includes(animal)){
            res.json({
                status: "failed",
                message: "false"
            })
            
        } else{
            res.json({
                status: "success",
                message: "true"
            })
            
        }
        
        next()
    }

 app.get('/animal/:id',isAnimal,(req,res) => {
     res.json({
        animalArray
     })
 })

 app.get('/random', generateSpread,(req,res) => {
    let query = req.query
    let ceil = parseInt(query.ceil)
    let floor = parseInt(query.floor)
    console.log(query)

     res.json({status: "Success",
            range: [floor,ceil],
            random_num: randomNum })
     
 })

app.listen(port, () => {
    console.log("you are on port: ", port);
    
})