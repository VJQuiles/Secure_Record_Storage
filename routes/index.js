const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error! Did you choose the right type of request? (Hint: GET v POST)</h1>');
});

module.exports = router;