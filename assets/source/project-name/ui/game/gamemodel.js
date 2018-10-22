"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("../../../meliorgames/observable");
class GameModel extends observable_1.default {
    constructor() {
        super(...arguments);
        this.score = 0;
    }
}
exports.default = GameModel;
