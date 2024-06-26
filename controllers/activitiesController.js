const db = require('../models');
const Activities = db.activities;
const Todos = db.todos;

class ActivitiesController {
    // static async getAll(req, res, next) {
    //     await Activities.findAll()
    //         .then(data => {
    //             if(data) {
    //                 res.status(200).json({
    //                      status: "Success",
    //                     info:"find all activites succes",
    //                     data: data
                 
    //                 });
    //             } else {
    //                 res.status(404).json({
    //                     info: "data not found"
    //                 });
    //             }  
    //         })
    //         .catch(err => {
    //             res.status(400).json({
    //                 info: err.message
    //             });
    //         });
    // };

    static async getAllIncludeTodos(req, res, next) {
        await Activities.findAll({inclued: Todos})
            .then(data => {
                if(data) {
                    res.status(200).json({
                        status: "Success",
                        info:"find all activites succes",
                        data: data
                 
                    });
                } else {
                    res.status(404).json({
                        status: "Not Found",
                        message: "data Activity not found",
                    });
                }  
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };

    static async getByIdIncludeTodo(req, res, next) {
        var id = parseInt(req.params.id);
        const getTodos = await Todos.findAll({
            where: {
                activity_group_id : id
            }
        });
        
        await Activities.findByPk(id)
            .then(data => {
                if(data) {
                    res.status(200).json({
                        status: "Success",
                        message: "sucessfully found",
                        data : data,
                        todos: getTodos
                    })
                } else {
                    res.status(404).json({
                        status: "Not Found",
                        info:  "Activity with ID " + id + " Not Found",
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message,
                });
            });
    };

    static async postCreate(req, res, next) {
        var model ={
            title : req.body.title,
            email : req.body.email,
        }
        await Activities.create(model)
            .then(data => {
                res.status(200).json({
                    status: "Success",
                    message: "activity sucessfully created",
                    data: model
                });
            })
            .catch(err => {
                res.status(400).json({
                    status : "error creating",
                    message: err.message
                });
            });
    };

    static async pacthUpdate(req, res, next) {
        const id = parseInt(req.params.id);
        var model ={
            title : req.body.title,
        }
        await Activities.update(model,{
            where: {id : id}
        })
            .then(data => {
                res.status(200).json({
                    status: "Success",
                    message: "activity update success",
                    data: model
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };

    static async delete(req, res, next) {
        const id = parseInt(req.params.id);
        await Activities.destroy({
            where: {id : id}
        })
            .then(data =>{
                if(data > 0) {
                    res.status(200).json({
                        status: "Success",
                        message: "delete activity success",
                        data: data
                    });
                }else {
                    res.status(404).json({
                        status: "Not Found",
                        info:  "Activity with ID " + id + " Not Found",
                    })
                }
                
            })
            .catch(err => {
                res.status(400).json({
                    info: "Error",
                    message: err.message
                });
            });
    };

}

module.exports = ActivitiesController