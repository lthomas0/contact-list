module.exports = contactsService

function contactsService(options) {
    let Contact

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }

    Contact = options.modelService

    return {
        getAll: getAll,
        getOne: getOne,
        insert: insert,
        updateOne: updateOne,
        removeOne: removeOne
    }

    function getAll() {
        return Contact.find()
    }

    function getOne(queryCondition) {
        return Contact.findOne(queryCondition)
    }

    function insert(document) {
        let contact = new Contact(document)
        return contact.save()
    }

    function updateOne(queryCondition, doc) {
        return Contact.findOneAndUpdate(queryCondition, doc, {
            new: true
        })
    }

    function removeOne(queryCondition) {
        return Contact.findOneAndRemove(queryCondition)
    }
}
