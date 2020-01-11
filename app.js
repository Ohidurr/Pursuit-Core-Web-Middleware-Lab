const express = require('express')
const cors = require('cors')

 const port = 3000;

 
const app = express()
 app.use(cors())
 const animalArray = ['Lion','Zebra','Monkey','dinosaur','fish']

 const isAnimal = (req, res, next) => {
     let animal = req.params.id 
    
         if(!animalArray.includes(animal)){
             console.log("false");
             
         } else{
             console.log("true");
             
         }
     
    next()
}


 app.get('/animal/:id',isAnimal,(req,res) => {
     res.json({
        animalArray
     })
 })
app.listen(port, () => {
    console.log("you are on port: ", port);
    
})