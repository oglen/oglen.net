/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['resource', function (resource) {

        var Settings = resource('/rest/settings/:skip/:limit');
        Settings.count = resource('/rest/settings/count');

        return Settings;
    }];
});
