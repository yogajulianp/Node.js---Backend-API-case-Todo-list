const db = require('../models');
const Todos = db.todos;

class TodosController {
    static async getAll(req, res, next) {
        await Todos.findAll()
            .then(data => {
                if (data) {
                    res.status(200).json({
                        status: "Success",
                        message: "find all todo success",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        status: "Not Found",
                        message: "data todo not found",

                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };

    static async getById(req, res, next) {
        var id = parseInt(req.params.id);
        await Todos.findByPk(id)
            .then(data => {
                if (data) {
                    res.status(200).json({
                        status: "Success",
                        message: "find todo by id success",
                        data: data
                    })
                } else {
                    res.status(400).json({
                        status: "Not Found",
                        message: "Todo with ID " + id + " Not Found",
                       
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };

    static async postCreate(req, res, next) {
        var model = {
            title: req.body.title,
            activity_group_id: req.body.activity_group_id, 
            is_active: req.body.is_active,
            priority: req.body.priority
        }
        await Todos.create(model)
            .then(data =>{
                res.status(200).json({
                    status: "Success",
                    message: "create todo success",
                    data: model
                });
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };

    static async patchUpdate(req, res, next) {
        const id = req.params.id;
        var model = {
            title: req.body.title,
            priority: req.body.priority,
            is_active: req.body.is_active,
            status : req.body.status
        }
        await Todos.update(model, {
            where: {id : id}
        })
            .then(data => {
                res.status(200).json({
                    status: "Success",
                    message: "update todo success",
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
        const id = req.params.id;
        await Todos.destroy({
            where: {id : id}
        })
            .then(data =>{
                if(data > 0) {
                    res.status(200).json({
                        status: "Success",
                        message: "delete todo success",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        status: "Not Found",
                        message:  "Todo with ID " + id + " Not Found",
                    })
                }
               
            })
            .catch(err => {
                res.status(400).json({
                    status: "Error",
                    message: err.message
                });
            });
    };
};

module.exports = TodosController