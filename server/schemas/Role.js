/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId,
        Now = Date.now,

        RoleSchema = new Schema({
            name: {
                type: String,
                unique: true,
                index: true,
                required: true
            },
            privilege: Array,
            note: String
        });

    return RoleSchema;
});