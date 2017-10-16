(function () {
    "use strict";

    angular.module("sabio.crud", ["ui.router"]).config(RouteConfig);

    RouteConfig.$inject = ["$stateProvider"];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state("app.contact", {
                url: "/contact",
                abstract: true
            })
            .state("app.contact.list", {
                url: "/list",
                views: {
                    "content@app": {
                        templateUrl: "/public/modules/contact-list/contact-list.html",
                        controller: "contactController as contactsCtrl",
                    }
                }
            })
            .state("app.contact.edit", {
                url: "/edit/:id",
                views: {
                    "content@app": {
                        templateUrl: "/public/modules/contact-list/contact-list-edit.html",
                        controller: "contactEditController as contactsCtrl"
                    }
                }

            })
        function getAllContacts(contactService) {
            debugger;
            return contactService
                .getAll()
                .then(data => {
                    return data.items;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
})();