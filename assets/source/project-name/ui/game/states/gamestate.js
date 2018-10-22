"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("../../../../meliorgames/command");
const gamecontroller_1 = require("../gamecontroller");
class GameState extends command_1.default {
    onStart(args) {
        this.controller = this.node.getComponent(gamecontroller_1.default);
        this.view = this.controller.view;
        this.model = this.controller.model;
    }
}
exports.default = GameState;
