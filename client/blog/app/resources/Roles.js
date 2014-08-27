/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Roles = $resource('../rest/roles/:skip/:limit', null, {

        });

        Roles.count = $resource('../rest/roles/count', null, {
            get: {method: 'GET'}
        });

        return Roles;
    }];
});