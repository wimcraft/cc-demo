"use strict";
/*
 * Copyright (C) Melior Games, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Melior Games Team <info@meliorgames.com>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
class IdentityMap {
    constructor() {
        this.items = {};
    }
    register(item) {
        let key = this.getKey(item);
        let existing_item = this.items[key];
        if (existing_item) {
            cc.log("Found duplicate:" + key);
            cc.log(existing_item);
            this.merge(item, existing_item);
        }
        else {
            this.items[key] = item;
            existing_item = item;
        }
        return existing_item;
    }
}
exports.default = IdentityMap;
