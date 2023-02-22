const e = require('express');
const db = require('../models');
const Todos = db.todos;

class TodosController {
    static async getAll(req, res, next) {
        await Todos.findAll()
            .then(data => {
                if (data) {
                    res.status(200).json({
                        info: "find all todo succes",
                        data: data
                    });
                } else {
                    res.status(404).json({
                        info: "data not found",

                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    info: err
                });
            });
    };

    static async getById(req, res, next) {
        var id = parseInt(req.params.id);
        await Todos.findByPk(id)
            .then(data => {
                if (data) {
                    res.status(200).json({
                        info: "find todo by id success",
                        data: data
                    })
                } else {
                    res.status(400).json({
                        info: "data not found",
                        data: data
                    })
                }
            })
            .catch(err => {
                res.status(400).json({
                    info: err
                });
            });
    };

    static async postCreate(req, res, next) {
        var model = {
            activity_group_id: req.body.activity_group_id, 
            title: req.body.title,
            is_active: req.body.is_active,
            priority: req.body.priority
        }
        await Todos.create(model)
            .then(data =>{
                res.status(200).json({
                    info: "create todo success",
                    data: model
                });
            })
            .catch(err => {
                res.status(400).json({
                    info: err
                });
            });
    };

    static async postUpadate(req, res, next) {
        const id = req.params.id;
        var model = {
            activity_group_id: req.body.activity_group_id, 
            title: req.body.title,
            is_active: req.body.is_active,
            priority: req.body.priority
        }
        await Todos.update(model, {
            where: {id : id}
        })
            .then(data => {
                res.status(200).json({
                    info: "update todo success",
                    data: model
                })
            })
            .catch(err => {
                res.status(400).json({
                    info: err
                });
            });
    };

    static async delete(req, res, next) {
        const id = req.params.id;
        await Todos.destroy({
            where: {id : id}
        })
            .then(data =>{
                res.status(200).json({
                    info: "delete todo success",
                    data: data
                });
            })
            .catch(err => {
                res.status(400).json({
                    info: err
                });
            });
    };
}