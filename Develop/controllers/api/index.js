const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const apiRoutes = require('./apiRoutes');
const blogRoutes = require('./blogRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/createAccount', accountRoutes);
router.use('/api', apiRoutes)
router.use('/blog', blogRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/', homeRoutes)
router.use('/login', loginRoutes)

router.use('*', (req,res)=>{
    res.redirect('/')

})

module.exports = router;