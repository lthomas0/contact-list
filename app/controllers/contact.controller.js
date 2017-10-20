const responses = require('../model/responses');
const path = require('path');
const apiPrefix = '/api/contacts';
const contactModel = require('../model/contact');
const contactsService = require('../service/contacts.service')({
    modelService: contactModel
});

module.exports = contactsController


function contactsController() {
    return {
        getcontact: getcontact,
        getAll: getAll,
        getOneById: getOneById,
        insert: insert,
        updateById: updateById,
        updatecontact: updatecontact,
        removeById: removeById,

    };

    function getcontact(req, res) {
        if (req.isAuthenticated()) {
            res.json(req.contact);
        } else {
            return res.send(false)
        }
    }


//     function googleRedirect(req, res) {
//         const responseModel = new responses.SuccessResponse()
//         if (req.contact._doc.local.role === "Admin") {
//             res.redirect('/admin');
//         } else {
//             res.redirect('/')
//         }

//     }

    function getcontactRole(req, res, next) {
        return contactsService.getcontactRole(req, res, next);
    }

    function getAll(req, res) {
        contactsService
            .getAll()
            .then(contacts => {
                const responseModel = new responses.ItemResponse();
                responseModel.items = contacts;
                res.json(responseModel);
            })
            .catch(err => {
                res.status(400).send(new responses.ErrorResponse(err));
            });
    }

    function getOneById(req, res) {
        let queryCondition = {
            _id: req.params.id
        };

        contactsService
            .getOne(queryCondition)
            .then(contact => {
                const responseModel = new responses.ItemResponse();
                responseModel.item = contact;
                res.json(responseModel);
            })
            .catch(err => {
                return res.status(400).send(new responses.ErrorResponse(err));
            })
    }

    function insert(req, res) {
        let document = req.body;
        let contact = new contactModel(document);

        contact.validate(err => {
            if (err) {
                return res.status(400).send(new responses.ErrorResponse(err))
            } else {
                contactsService
                    .insert(req.body)
                    .then(contact => {
                        const responseModel = new responses.ItemResponse();
                        responseModel.item = contact;
                        res
                            .status(200)
                            .location(path.join(apiPrefix, contact._id.toString()))
                            .json(responseModel);
                    })
                    .catch(err => {
                        return res.status(400).send(new responses.ErrorResponse(err));
                    });
            }
        })
    }

    function updateById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        let document = req.body;
        let contact = new contactModel(document);


        contact.validate(err => {
            if (err) {
                return res.status(400).send(new responses.ErrorResponse(err))
            } else {
                contactsService.updateOne(queryCondition, document)
                    .then(contact => {
                        const responseModel = new responses.ItemResponse();
                        responseModel.item = contact;
                        res.status(200)
                            .json(responseModel);
                    })
                    .catch(err => {
                        return res.status(500).send(new responses.ErrorResponse(err.stack));
                    })
            }
        })
    }

    function updatecontact(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        let document = req.body;
        
        let contact = new contactModel(document);

        contact.validate(err => {
            if (err) {
                return res.status(400).send(new responses.ErrorResponse(err))
            } else {
                contactsService.updateOne(queryCondition, document)
                    .then(contact => {
                        const responseModel = new responses.ItemResponse();
                        responseModel.item = contact;
                        res.status(200)
                            .json(responseModel);
                    })
                    .catch(err => {
                        return res.status(500).send(new responses.ErrorResponse(err.stack));
                    })
            }
        })
    }

    function removeById(req, res) {
        let queryCondition = {
            _id: req.params.id
        };
        contactsService
            .removeOne(queryCondition)
            .then(contact => {
                const responseModel = new responses.ItemResponse();
                responseModel.item = contact;
                res.json(responseModel);
            })
            .catch(err => {
                return res.status(500).send(new responses.ErrorResponse(err));
            });
    }
}
