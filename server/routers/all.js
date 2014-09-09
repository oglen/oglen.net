/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    'config', // Project configuration.
    'express',
    'express-jwt', // Middleware that validates JsonWebTokens and set req.user.
    'server/utilities/routerProvider',
    'server/routers/authorization',
    'server/routers/register',
    'server/routers/post',
    'server/routers/posts',
    'server/routers/postsCount',
    'server/routers/draft',
    'server/routers/drafts',
    'server/routers/draftsCount',
    'server/routers/tag',
    'server/routers/tags',
    'server/routers/tagsCount',
    'server/routers/comment',
    'server/routers/comments',
    'server/routers/commentsCount',
    'server/routers/user',
    'server/routers/users',
    'server/routers/usersCount',
    'server/routers/visitor',
    'server/routers/visitors',
    'server/routers/visitorsCount',
    'server/routers/role',
    'server/routers/roles',
    'server/routers/rolesCount',
    'server/routers/setting',
    'server/routers/settings',
    'server/routers/settingsCount'
], function (config, express, expressJwt, routerProvider, authorization, register, post, posts, postsCount, draft, drafts, draftsCount, tag, tags, tagsCount, comment, comments, commentsCount, user, users, usersCount, visitor, visitors, visitorsCount, role, roles, rolesCount, setting, settings, settingsCount) {
    'use strict';

    var expressRouter = express.Router();
    var options = {
        secret: config.jwt.secret,
        issuer: config.jwt.issuer
    };

    routerProvider(expressRouter)
        .all(function (router, route) {
            var delay = config.delay;
            if (delay) {
                router
                    .all(function (req, res, next) {
                        setTimeout(function () {
                            next();
                        }, delay());
                    });
            }
        })
        .all(function (router, route) {
            if (route.requireJwt) {
                router
                    .all(function (req, res, next) {
                        options.audience = config.jwt.audience(req);
                        next();
                    })
                    .all(expressJwt(options))
                    .all(function (err, req, res, next) {
                        if (err) {
                            res.status(err.status).send({
                                code: err.code,
                                msg: err.message
                            });
                        }
                    })
                    .all(function (req, res, next) {
                        if (req.user.role) {
                            next();
                        } else {
                            if (route.visitorAllow.indexOf(req.method.toLowerCase()) === -1) {
                                res.status(401).send(config.ERR_MSG.permissionDenied);
                            } else {
                                next();
                            }
                        }
                    });
            }
        })
        .when('/authorization', {
            action: authorization,
            requireJwt: false
        })
        .when('/register', {
            action: register,
            requireJwt: false
        })
        .when('/post/:id?', {
            action: post,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/posts/count', {
            action: postsCount,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/posts/:skip?/:limit?', {
            action: posts,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/draft/:id?', {
            action: draft,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/drafts/:postId/count', {
            action: draftsCount,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/drafts/:postId', {
            action: drafts,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/tag/:id?', {
            action: tag,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/tags/count', {
            action: tagsCount,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/tags/:skip?/:limit?', {
            action: tags,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/comment/:id?', {
            action: comment,
            requireJwt: true,
            visitorAllow: ['get', 'post', 'put', 'delete']
        })
        .when('/comments/count', {
            action: commentsCount,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/comments/:skip?/:limit?', {
            action: comments,
            requireJwt: true,
            visitorAllow: ['get']
        })
        .when('/user/:id?', {
            action: user,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/users/count', {
            action: usersCount,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/users/:skip?/:limit?', {
            action: users,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/role/:id?', {
            action: role,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/roles/Count', {
            action: rolesCount,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/roles/:skip?/:limit?', {
            action: roles,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/setting/:id?', {
            action: setting,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/settings/count', {
            action: settingsCount,
            requireJwt: true,
            visitorAllow: []
        })
        .when('/settings/:skip?/:limit?', {
            action: settings,
            requireJwt: true,
            visitorAllow: []
        });

    return expressRouter;
});