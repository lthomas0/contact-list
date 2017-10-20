(function () {
    'use strict'

    angular.module('sabio.crud')
        .controller('contactController', ContactController)

    ContactController.$inject = ['$state', 'contactService']

    function ContactController($state, contactService) {
        'use strict'
        var $ctrl = this;
        // $ctrl.contacts = contacts;
        $ctrl.service = contactService;
        $ctrl.tab = 1;
        $ctrl.contacts = [];
        $ctrl.selectedItem = null;
        $ctrl.updateArray = function (value) {
            var index = $ctrl.contacts.map(function (el) {
                return el._id;
            }).indexOf(value._id);
            $ctrl.contacts.splice(index, 1, value);
        }
        // init();
        
        $ctrl.$onInit = () => {
            
            contactService.getAll()
                .then(onGetSuccess)
                .catch(onError)
        }

        function onGetSuccess(response) {
            $ctrl.contacts = response.items;
            console.log(response.items)
        }


        function onError() {
            console.log(`Error: ${data.errors}`)
        }
    
        $ctrl.remove=(id)=> {
            alert("Delete contact?");
            contactService.remove(id)
                .then(_onDeleteSuccess)
                .catch(_onError)
        }

        function _onDeleteSuccess(data) {
            let index = $ctrl.contacts.map(function(arrayItem) { return arrayItem._id; }).indexOf(data.item._id);
            $ctrl.contacts.splice(index, 1)
        }

        function _onError(error) {
            console.log(error)
        }
        
        function update() {
            console.log("The update function is firing");
            contactService.update($ctrl.contactData)
                .then(_onUpdateSuccess)
                .catch(_onError)
        }

        function _onUpdateSuccess(data) {
            console.log("update function is working");
            $ctrl.contactData = null
            if (data) {
                $ctrl.contacts.push(data)
            }
        }
        
        }
})();
