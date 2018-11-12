const router = require('express').Router();

router.get('/', (req, res) => res.json({ text: 'Successfully hit API root' }));

module.exports = router;
module.exports.API_ROOT_PATH = '/api';
