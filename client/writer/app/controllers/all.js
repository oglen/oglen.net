/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'controllers/DashboardCtrl',
    'controllers/PostCtrl',
    'controllers/PostsCtrl',
    'controllers/TagCtrl',
    'controllers/TagsCtrl',
    'controllers/CommentCtrl',
    'controllers/CommentsCtrl',
    'controllers/UserCtrl',
    'controllers/UsersCtrl',
    'controllers/RoleCtrl',
    'controllers/RolesCtrl',
    'controllers/SettingCtrl',
    'controllers/SettingsCtrl',
    'angular'
], function (config, DashboardCtrl, PostCtrl, PostsCtrl, TagCtrl, TagsCtrl, CommentCtrl, CommentsCtrl, UserCtrl, UsersCtrl, RoleCtrl, RolesCtrl, SettingCtrl, SettingsCtrl) {

    var controllers = angular.module(config.name + '.controllers', [])
        .controller('DashboardCtrl', DashboardCtrl)
        .controller('PostCtrl', PostCtrl)
        .controller('PostsCtrl', PostsCtrl)
        .controller('TagCtrl', TagCtrl)
        .controller('TagsCtrl', TagsCtrl)
        .controller('CommentCtrl', CommentsCtrl)
        .controller('CommentsCtrl', CommentsCtrl)
        .controller('UserCtrl', UserCtrl)
        .controller('UsersCtrl', UsersCtrl)
        .controller('RoleCtrl', RoleCtrl)
        .controller('RolesCtrl', RolesCtrl)
        .controller('SettingCtrl', SettingCtrl)
        .controller('SettingsCtrl', SettingsCtrl);

    return controllers;
});