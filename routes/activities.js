var express = require('express');
var router = express.Router();

const ActivitiesController = require('../controllers/activitiesController');

router.get('/', ActivitiesController.getAll);
router.get('/:id', ActivitiesController.getByIdIncludeTodo);
router.post('/', ActivitiesController.postCreate);
router.patch('/id', ActivitiesController.pacthUpdate);
router.delete('/id', ActivitiesController.delete);

module.exports = router;
