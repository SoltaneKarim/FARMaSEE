const express = require("express")
const app = express()
const port = 5000
// const db = require("./database/config.js")
const bodyParser = require("body-parser")
const cors = require ("cors")

///////////////////////////////
//this is mongo db 
const connectDatabase = require('../server/mongodb/config');
const userRoutes = require('../server/mongodb/Routes/userRoutes');

app.use(express.json());
connectDatabase(); // Call the database connection function

app.use('/chat', userRoutes);

///////////////////////////////
const { getAllAnimals, addAnimal, updateAnimal, deleteAnimal, getAllTrees, addTree, updateTree,getTreesBySpecificId, deleteTree, getAllResources, addResource, updateResource, deleteResource, getAllWallets, addWallet, updateWallet, deleteWallet, getAllUsers, addUser, updateUser, deleteUser, getAllCommerces, addCommerce, updateCommerce, deleteCommerce, getAllPrices, addPrice, updatePrice, deletePrice, getAllDiseases, addDisease, updateDisease, deleteDisease, getAllGroups, addGroup, updateGroup, deleteGroup, getAllPerte, addPerte, updatePerte, deletePerte, getAllDoctors, addDoctor, updateDoctor, deleteDoctor, getAllWorkers, addWorker, updateWorker, deleteWorker, getAllHistory, addHistory, updateHistory, deleteHistory,deleteBySpecificId ,getBySpecificId,getAnimalsBySpecificId} = require("./database/index.js")

app.use(cors())
app.use(bodyParser.json());


app.get("/", (req,res) => {
    console.log("hello from the server")
    res.send('err')
})

app.get("/animal", getAllAnimals)
app.post("/animal", addAnimal)
app.put("/animal/:id", updateAnimal)
app.delete("/animal/:id", deleteAnimal)
app.get("/animal/one/:specificId", getAnimalsBySpecificId)

app.get("/tree", getAllTrees)
app.post("/tree", addTree)
app.put("/tree/:id", updateTree)
app.delete("/tree/:id", deleteTree)
app.get("/tree/one/:specificId",getTreesBySpecificId)

app.get("/resource", getAllResources)
app.post("/resource", addResource)
app.put("/resource/:id", updateResource)
app.delete("/resource/:id", deleteResource)

app.get("/wallet", getAllWallets)
app.post("/wallet", addWallet)
app.put("/wallet/:id", updateWallet)
app.delete("/wallet/:id", deleteWallet)

app.get("/user", getAllUsers)
app.post("/user", addUser)
app.put("/user/:id", updateUser)
app.delete("/user/:id", deleteUser)

app.get("/commerce", getAllCommerces)
app.post("/commerce", addCommerce)
app.put("/commerce/:id", updateCommerce)
app.delete("/commerce/:id", deleteCommerce)

app.get("/group", getAllGroups)
app.post("/group", addGroup)
app.put("/group/:id", updateGroup)
app.delete("/group/:id", deleteGroup)
app.get("/group/one/:specificId",getBySpecificId)
app.delete("/group/one/:specificId/:id",deleteBySpecificId)

app.get("/price", getAllPrices)
app.post("/price", addPrice)
app.put("/price/:id", updatePrice)
app.delete("/price/:id", deletePrice)

app.get("/disease", getAllDiseases)
app.post("/disease", addDisease)
app.put("/disease/:id", updateDisease)
app.delete("/disease/:id", deleteDisease)

app.get("/history", getAllHistory)
app.post("/history", addHistory)
app.put("/history/:id", updateHistory)
app.delete("/history/:id", deleteHistory)

app.get("/doctor", getAllDoctors)
app.post("/doctor", addDoctor)
app.put("/doctor/:id", updateDoctor)
app.delete("/doctor/:id", deleteDoctor)

app.get("/worker", getAllWorkers)
app.post("/worker", addWorker)
app.put("/worker/:id", updateWorker)
app.delete("/worker/:id", deleteWorker)

app.get("/perte", getAllPerte)
app.post("/perte", addPerte)
app.put("/perte/:id", updatePerte)
app.delete("/perte/:id", deletePerte)


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

