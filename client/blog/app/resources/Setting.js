/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['$resource', function ($resource) {

        var Setting = $resource('../rest/setting/:id', null, {
            save: {method: 'POST'},
            update: { method: 'PUT' }
        });

        return Setting;
    }];
});