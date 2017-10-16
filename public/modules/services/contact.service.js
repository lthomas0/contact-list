(function() {
    'use strict'

    angular.module('sabio.services')
        .factory('contactService', ContactServiceFactory)

    ContactServiceFactory.$inject = ['$http', '$q']

    function ContactServiceFactory($http, $q) {
        return {
            getAll: getAll,
            getById: getById,
            insert: insert,
            update: update,
            remove: remove
        }

        function getAll() {
            return $http.get('/api/contacts')
                .then(xhrSuccess)
                .catch(onError)
        }

        function getById(id, onSuccess, onError) {
            return $http.get(`/api/contacts/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function insert(contactData, onSuccess, onError) {
            return $http.post('/api/contacts', contactData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(contactData, onSuccess, onError) {
            return $http.put(`/api/contacts/${contactData._id}`, contactData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function remove(id, onSuccess, onError) {
            return $http.delete(`/api/contacts/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function xhrSuccess(response) {
            return response.data
        }

        function onError(error) {
            console.log(error.data);
            return $q.reject(error.data)
        }
    }
})()
