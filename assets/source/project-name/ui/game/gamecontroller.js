"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameview_1 = require("./gameview");
const gamemodel_1 = require("./gamemodel");
const statemachine_1 = require("../../../meliorgames/statemachine");
const gameplaystate_1 = require("./states/gameplaystate");
const appcontroller_1 = require("../../appcontroller");
const { ccclass, property } = cc._decorator;
let GameController = class GameController extends cc.Component {
    constructor() {
        super(...arguments);
        this.view = null;
        this.model = null;
    }
    start() {
        if (appcontroller_1.default.instance == null) {
            cc.director.loadScene('splash');
            return;
        }
        this.model = new gamemodel_1.default();
        cc.log(JSON.stringify(this.model));
        this.view.applyModel(this.model);
        this.stateMachine = new statemachine_1.default(this.node);
        this.stateMachine.applyState(gameplaystate_1.default);
    }
    onReplay() {
        this.stateMachine.applyState(gameplaystate_1.default);
    }
};
__decorate([
    property(gameview_1.default)
], GameController.prototype, "view", void 0);
GameController = __decorate([
    ccclass
], GameController);
exports.default = GameController;
