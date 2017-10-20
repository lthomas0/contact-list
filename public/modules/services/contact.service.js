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
            return $http.get('/api/contact')
                .then(xhrSuccess)
                .catch(onError)
        }

        function getById(id, onSuccess, onError) {
            return $http.get(`/api/contact/${id}`)
                .then(xhrSuccess)
                .catch(onError)
        }

        function insert(contactData, onSuccess, onError) {
            return $http.post('/api/contact', contactData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function update(contactData, onSuccess, onError) {
            return $http.put(`/api/contact/${contactData._id}`, contactData)
                .then(xhrSuccess)
                .catch(onError)
        }

        function remove(id, onSuccess, onError) {
            return $http.delete(`/api/contact/${id}`)
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
