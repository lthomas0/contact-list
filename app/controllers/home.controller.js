// const passport = require('passport')
// const responses = require('../models/responses');
// const path = require('path');
// const apiPrefix = '/api/contacts';
// const contactModel = require('../models/contact');
// const logModel = require('../models/log');
// const contactsService = require('../services/contacts.service')({
//     modelService: contactModel
// });
// const logService = require('../services/log.service')({
//     modelService: logModel
// });
// const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
// const googleCallback = passport.authenticate('google', { failureRedirect: '/login-fail' })

// module.exports = contactsController


// function contactsController() {
//     return {
//         getcontact: getcontact,
//         getAll: getAll,
//         getOneById: getOneById,
//         insert: insert,
//         updateById: updateById,
//         updatecontact: updatecontact,
//         removeById: removeById,

//     };

//     function getcontact(req, res) {
//         if (req.isAuthenticated()) {
//             res.json(req.contact);
//         } else {
//             return res.send(false)
//         }
//     }


//     function googleRedirect(req, res) {
//         const responseModel = new responses.SuccessResponse()
//         if (req.contact._doc.local.role === "Admin") {
//             res.redirect('/admin');
//         } else {
//             res.redirect('/')
//         }

//     }

//     // function getcontactRole(req, res, next) {
//     //     return contactsService.getcontactRole(req, res, next);
//     // }

//     // function getAll(req, res) {
//     //     contactsService
//     //         .getAll()
//     //         .then(contacts => {
//     //             const responseModel = new responses.ItemResponse();
//     //             responseModel.items = contacts;
//     //             res.json(responseModel);
//     //         })
//     //         .catch(err => {
//     //             res.status(400).send(new responses.ErrorResponse(err));
//     //         });
//     // }

//     // function getOneById(req, res) {
//     //     let queryCondition = {
//     //         _id: req.params.id
//     //     };

//     //     contactsService
//     //         .getOne(queryCondition)
//     //         .then(contact => {
//     //             const responseModel = new responses.ItemResponse();
//     //             responseModel.item = contact;
//     //             res.json(responseModel);
//     //         })
//     //         .catch(err => {
//     //             return res.status(400).send(new responses.ErrorResponse(err));
//     //         })
//     // }

//     // function insert(req, res) {
//     //     let document = req.body;
//     //     let contact = new contactModel(document);

//     //     contact.validate(err => {
//     //         if (err) {
//     //             return res.status(400).send(new responses.ErrorResponse(err))
//     //         } else {
//     //             contactsService
//     //                 .insert(req.body)
//     //                 .then(contact => {
//     //                     const responseModel = new responses.ItemResponse();
//     //                     responseModel.item = contact;
//     //                     res
//     //                         .status(200)
//     //                         .location(path.join(apiPrefix, contact._id.toString()))
//     //                         .json(responseModel);
//     //                 })
//     //                 .catch(err => {
//     //                     return res.status(400).send(new responses.ErrorResponse(err));
//     //                 });
//     //         }
//     //     })
//     // }

//     // function updateById(req, res) {
//     //     let queryCondition = {
//     //         _id: req.params.id
//     //     }
//     //     let document = {
//     //         $set: {
//     //             "local.email": req.body.local.email,
//     //             "local.role": req.body.local.role
//     //         },
//     //         "disabled": req.body.disabled

//     //     };
//     //     let contact = new contactModel(document);


//     //     contact.validate(err => {
//     //         if (err) {
//     //             return res.status(400).send(new responses.ErrorResponse(err))
//     //         } else {
//     //             contactsService.updateOne(queryCondition, document)
//     //                 .then(contact => {
//     //                     const responseModel = new responses.ItemResponse();
//     //                     responseModel.item = contact;
//     //                     res.status(200)
//     //                         .json(responseModel);
//     //                 })
//     //                 .catch(err => {
//     //                     return res.status(500).send(new responses.ErrorResponse(err.stack));
//     //                 })
//     //         }
//     //     })
//     // }

//     // function updatecontact(req, res) {
//     //     let queryCondition = {
//     //         _id: req.params.id
//     //     }
//     //     let document = {
//     //         $set: {
//     //             "local.email": req.body.local.email,
//     //             "local.name": req.body.local.name,
//     //             "isSubscribedToEmail": req.body.isSubscribedToEmail
//     //         }
//     //         // "isSubscribedToEmail": req.body.isSubscribedToEmail
//     //     }
//     //     let contact = new contactModel(document);

//     //     contact.validate(err => {
//     //         if (err) {
//     //             return res.status(400).send(new responses.ErrorResponse(err))
//     //         } else {
//     //             contactsService.updateOne(queryCondition, document)
//     //                 .then(contact => {
//     //                     const responseModel = new responses.ItemResponse();
//     //                     responseModel.item = contact;
//     //                     res.status(200)
//     //                         .json(responseModel);
//     //                 })
//     //                 .catch(err => {
//     //                     return res.status(500).send(new responses.ErrorResponse(err.stack));
//     //                 })
//     //         }
//     //     })
//     // }

//     // function removeById(req, res) {
//     //     let queryCondition = {
//     //         _id: req.params.id
//     //     };
//     //     contactsService
//     //         .removeOne(queryCondition)
//     //         .then(contact => {
//     //             const responseModel = new responses.ItemResponse();
//     //             responseModel.item = contact;
//     //             res.json(responseModel);
//     //         })
//     //         .catch(err => {
//     //             return res.status(500).send(new responses.ErrorResponse(err));
//     //         });
//     // }

//     // function register(req, res, next) {
//     //     // put inside contact.service
//     //     passport.authenticate('local-signup', registerDone)(req, res, next)

//     //     function registerDone(err, contact, info) {
//     //         if (err) return next(err)

//     //         // Generate a JSON response reflecting authentication status
//     //         if (!contact) {
//     //             const errorResponseModel = new responses.ErrorResponse(`registration failed: ${info.reason}`)
//     //             errorResponseModel.alert.message = `registration failed: ${info.reason}`

//     //             return res.json(errorResponseModel)
//     //         }

//     //         // ***********************************************************************
//     //         // "Note that when using a custom callback, it becomes the application's
//     //         // responsibility to establish a session (by calling req.login()) and send
//     //         // a response."
//     //         // Source: http://passportjs.org/docs
//     //         // ***********************************************************************
//     //         req.login(contact, loginErr => {
//     //             if (loginErr) return next(loginErr)

//     //             const responseModel = new responses.SuccessResponse()
//     //             responseModel.alert.message = 'Registration succeeded'
//     //             return res.json(responseModel)
//     //         })
// //     //     }
// //     }

// //     function login(req, res, next) {
// //         passport.authenticate('local-login', loginDone)(req, res, next)

// //         function loginDone(err, contact, info) {
// //             if (err) return next(err)

// //             // Generate a JSON response reflecting authentication status
// //             if (!contact) {
// //                 const errorMessage = `Authentication failed: ${info.reason}`
// //                 const errorResponseModel = new responses.ErrorResponse(errorMessage)
// //                 errorResponseModel.alert.message = errorMessage

// //                 return res.status(400).json(errorResponseModel)
// //             }

// //             // ***********************************************************************
// //             // "Note that when using a custom callback, it becomes the application's
// //             // responsibility to establish a session (by calling req.login()) and send
// //             // a response."
// //             // Source: http://passportjs.org/docs
// //             // ***********************************************************************
// //             req.login(contact, loginErr => {
// //                 if (loginErr) return next(loginErr)


// //                 const responseModel = new responses.SuccessResponse()
// //                 req.contact.local.password = null;
// //                 responseModel.contact = req.contact;
// //                 responseModel.alert.message = 'Authentication succeeded'
// //                 activityObject = {
// //                     loginType: "local",
// //                     email: responseModel.contact._doc.local.email
// //                 }
// //                 logService
// //                     .contactLoggedIn(responseModel.contact._doc, activityObject)
// //                     .then(log => {})
// //                     .catch(err => {
// //                         return
// //                         // res.status(400).send(new responses.ErrorResponse(err));
// //                     });
// //                 return res.json(responseModel)

// //             })
// //         }
// //     }

// //     function logout(req, res) {
// //         req.logout();
// //         res.cookie('connect.sid', '', { expires: new Date() });
// //         req.session.destroy(function(err) {
// //             res.status(200);
// //             const responseModel = new responses.SuccessResponse()
// //             responseModel.contact = req.contact;
// //             responseModel.alert.message = 'Logout succeeded'
// //             return res.json(responseModel);
// //         })
// //     }

// // }
