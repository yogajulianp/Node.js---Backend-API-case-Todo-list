var express = require('express');
var router = express.Router();

const TodosController = require('../controllers/todosController');

router.get('/', TodosController.getAll);
router.get('/:id', TodosController.getById);
router.post('/', TodosController.postCreate);
router.patch('/:id',TodosController.patchUpdate);
router.delete('/:id',TodosController.delete);

module.exports = router;