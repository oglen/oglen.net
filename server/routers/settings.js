/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {
    'use strict';

    var settingsRouter = function (router, util) {
        router
            .route('/settings/count')
            .get(function (req, res, next) {

                Setting
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json({count: docs});
                        });
                    });
            });

        router
            .route('/settings')
            .get(function (req, res, next) {

                Setting
                    .find(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            });
    };

    return settingsRouter;
});