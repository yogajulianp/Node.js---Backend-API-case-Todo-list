const db = require('../models');
const Activities = db.activity;

class ActivitiesController {
    static async getAll(req, res, next) {
        await Activities.findAll()
            .then(data => {
                if(data) {
                    res.status(200).json({
                        info:"find all activites succes",
                        data: data
                 
                    });
                } else {
                    res.status(404).json({
                        info: "data not found"
                    });
                }  
            })
            .catch(err => {
                res.status(400).json({
                    info: err.message
                });
            });
    };

    static async getById(req, res, next) {
        var id = parseInt(req.params.id);
        await Activities.findByPk(id)
            .then(data => {
                if(data) {
                    res.status(200).json({
                        info:
                    })
                }
            })
    }
}
