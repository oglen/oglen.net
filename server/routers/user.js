/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {

    var userRouter = function (router, logger) {
        router
            .route('/user')
            .post(function (req, res, next) {
                var user = new User(req.body);
                
                user.save(function (err, product, numberAffected) {
                    if (err) {
                        logger.error(err);
                        res.status(500).json({status: 'failure'});
                    } else {
                        res.json(user);
                    }
                });
            });
    };

    return userRouter;

});