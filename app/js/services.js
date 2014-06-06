'use strict';

/* Services */

var services = angular.module('myApp.services', ['ngResource']).value('version', '0.1');

var baseUrl = 'http://localhost\\:9292/api/v1';

services.factory('PhoneBooksFactory', function ($resource) {
    return $resource(baseUrl + '/phone_books', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('PhoneBookFactory', function ($resource) {
    return $resource(baseUrl + '/phone_books/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
