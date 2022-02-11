const tascaModel = require("./models/tasca");
const respModel = require("./models/responsable");
const {response} = require("express");
module.exports = (app)=>{

    app.use(function(req, res, next) {  
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        next();
    });
    // ////////////////////////////////// tasques ////////////////////////////////////////////////////
    
    //Obtenir totes les tasques
    //GET al endpoint api/tasques
    app.get('/api/tasques', async (req, res) => {

        const tasques = await tascaModel.find({});
        try{
            res.status(200).json({tasques});
        }
        catch(error){
            res.status(500).send(error);
        }
    });

    //Afegir una tasca
    //POST al endpoint api/tasques/:id
    app.post('/api/tasques', async (req, res) => {
        const tasca = new tascaModel(req.body);
        try {
            await tasca.save(); 
            const tasques = await tascaModel.find({});
            res.status(200).send(tasques);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    //Elimina una tasca
    //DELETE al endpoint api/tasques/:id
    app.delete('/api/tasques/:id', async (req, res) => {

        const tasca = await tascaModel.deleteOne({codi: req.params.id});
        try {
            const tasques = await tascaModel.find({});
            res.status(200).send(tasques);
        } catch (error) {
            res.status(500).send(error);
        }
    });
    //Modificar una tasca
    //put al endpoint api/tasques/:id
    app.put('/api/tasques/:id', async (req, res) => {

        const tasca = await tascaModel.findOne({codi: req.params.id});
        try {
            tasca.estat = req.body.estat;
            await tasca.save();
            const tasques = await tascaModel.find({});
            res.status(200).send(tasques);
        } catch (error) {
            res.status(500).send(error);
        }
    });

// ////////////////////////////////// responsable ////////////////////////////////////////////////////
    
    //Obtenir tots els responsables
    //GET al endpoint api/responsable
    app.get('/api/responsables', async (req, res) => {

        const responsables = await respModel.find({});
        try{
            res.status(200).json({responsables});
        }
        catch(error){
            res.status(500).send(error);
        }
    });
    //Afegir un responsble
    //POST al endpoint /api/responsable
    app.post('/api/responsables', async (req, res) => {
        const resp = new respModel(req.body);
        try {
            await resp.save(); 
            const responsables = await respModel.find({});
            res.status(200).send(responsables);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    // //Elimina un responsable
    //DELETE al endpoint api/responsables/:id
    app.delete('/api/responsables/:id', async (req, res) => {

        const resp = await respModel.deleteOne({codi: req.params.id});
        try {
            const responsables = await respModel.find({});
            res.status(200).send(responsables);
        } catch (error) {
            res.status(500).send(error);
        }
    });
}