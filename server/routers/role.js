/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {

    var roleRouter = function (router, util) {
        router
            .route('/role/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Role
                    .findById(id)
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var role = new Role(req.body);

                role.save(function (err, product, numberAffected) {
                    util.suit(err, function () {
                        res.json(role);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Role.update({_id: form._id}, {
                    name: form.name,
                    privilege: form.privilege,
                    note: form.note
                }, function (err, numberAffected, raw) {
                    util.suit(err, function () {
                        res.json(form);
                    });
                });
            });
    };

    return roleRouter;
});

