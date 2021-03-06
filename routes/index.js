const router = require('express').Router();
const userRouter = require('./userRouter');
const donationRouter = require('./donationRouter');


router.use('/users', userRouter);
router.use('/', donationRouter)
module.exports = router;