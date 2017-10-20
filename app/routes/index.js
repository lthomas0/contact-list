const path = require('path');
const router = require("express").Router();
const contactRoutes = require("./contacts.routes");

router.use("/api/contact", contactRoutes);



router.use("/api/*", function(req, res, next) {
    res.sendStatus(404);
});

// router.use(sitesRoutes);
router.use('*', (req, res, next) => {
    res.sendFile('public/index.html', {
        root: path.join(__dirname, '../..')
    })})

// router.use(function(err, req, res, next) {
//     // If the error object doesn't exists
//     if (!err) {
//         return next();
//     }

//     // Log it
//     console.error(err.stack);

//     // Redirect to error page
//     res.sendStatus(500);
// });

module.exports = router;
