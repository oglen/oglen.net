/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$resource',
        'encrypt',
        function ($resource, encrypt) {
            return function (url) {
                return  $resource(url, {
//                    tickle: encrypt.randomBytes(8)
                }, {
                    'get': {method: 'GET'},
                    'save': {method: 'POST'},
                    'update': {method: 'PUT'},
                    'query': {method: 'GET', isArray: true},
                    'remove': {method: 'DELETE'},
                    'delete': {method: 'DELETE'}
                });
            };
        }];
});