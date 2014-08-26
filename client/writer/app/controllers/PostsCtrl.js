/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$route',
        '$routeParams',
        '$location',
        'Posts',
        function ($rootScope, $scope, $route, $routeParams, $location, Posts) {

            $rootScope.$watch('settings', function (settings) {
                if (settings) {
                    var skip = $scope.skip = $routeParams.skip || 0,
                        limit = $scope.limit = settings['page_size'] || 10,
                        size = settings['pager_size'] || 5;

                    skip === 0 && $location.path('/posts/0', false);

                    Posts.count.get(function (res) {
                        $scope.pager = $rootScope.pager(res.count, skip, limit, size);
                    });

                    $scope.posts = Posts.query({skip: skip, limit: limit});
                }
            });
        }];
});