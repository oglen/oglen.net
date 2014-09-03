/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'angular-resource'
], function () {
    'use strict';

    return ['resource', function (resource) {

        var Comments = resource('/rest/comments/:skip/:limit');
        Comments.count = resource('/rest/comments/count');

        return Comments;
    }];
});