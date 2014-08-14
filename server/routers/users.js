/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {

    var usersRouter = function (router, logger) {

        router
            .route('/users')
            .get(function (req, res, next) {

                User
                    .find()
                    .populate({
                        path: 'role',
                        select: '_id name'
                    })
                    .exec(function (err, docs) {

                        if (err) {

                            logger.error(err);
                            res.status(500).json({status: 'failure'});

                        } else {

                            res.json(docs);
                        }
                    });
            });
    };

    return usersRouter;
});