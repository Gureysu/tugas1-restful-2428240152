const express = require('express');
const router = express.Router();
const parawisataControllers = require('../controllers/parawisataControllers');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', parawisataControllers.getAll);
router.get('/:id', parawisataControllers.getById);
router.post('/', cekApiKey, parawisataControllers.create);
router.put('/:id', cekApiKey, parawisataControllers.update);
router.delete('/:id', cekApiKey, parawisataControllers.remove);

module.exports = router;