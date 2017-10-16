(function () {
    'use strict'

    angular.module('sabio.crud')
        .controller('contactController', ContactController)

    ContactController.$inject = ['$state', 'contactService']

    function ContactController($state, contactService) {
        'use strict'
        debugger
        var $ctrl = this;
        $ctrl.contacts = contacts;
        $ctrl.service = contactService;
        $ctrl.tab = 1;
        $ctrl.selectedItem = null;
        $ctrl.updateArray = function (value) {
            var index = $ctrl.contacts.map(function (el) {
                return el._id;
            }).indexOf(value._id);
            $ctrl.contacts.splice(index, 1, value);
        }
        init();
        debugger;
        $ctrl.$onInit = () => {
            debugger;
            contactService.getAll()
                .then(onGetSuccess)
                .catch(onError)
        }

            // function getAllContacts(contactService) {
            //     debugger;
            //     return contactService
            //         .getAll()
            //         .then(data => {
            //             return data.items;
            //         })
            //         .catch(error => {
            //             console.log(error);
            //         });
            // }
        }
})();
//create an init function - (green project for samples)
//call the contact service getAll from inside the oninit 
//on success of the getAll, set the response data into vm property ($ctrl)