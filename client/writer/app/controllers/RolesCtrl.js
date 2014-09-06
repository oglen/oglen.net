/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'Role',
        'Roles',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Role, Roles, pager, AUTH_EVENTS) {

            if ($rootScope.isLogin) {
                $rootScope.$watch('settings', function (settings) {
                    if (settings) {
                        $scope.refresh = function () {
                            Roles.count.get(function (res) {
                                $scope.count = res.count;
                            });
                            $scope.roles = Roles.query({
                                skip: $scope.skip,
                                limit: $scope.limit
                            });
                        };

                        $scope.delete = function (roleId) {
                            Role.delete({
                                id: roleId
                            }, function (res) {
                                $scope.refresh();
                            });
                        };

                        $scope.skip = $routeParams.skip;
                        $scope.limit = $routeParams.limit;
                        $scope.refresh();
                    }
                });
            }
        }];
});