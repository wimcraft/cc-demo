"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let GameView = class GameView extends cc.Component {
    constructor() {
        super(...arguments);
        this.lbScore = null;
        this.lbStatus = null;
    }
    applyModel(model) {
        model.addObserver(this);
        this.onObjectChanged(model);
    }
    onObjectChanged(object) {
        this.lbScore.string = object.score.toString();
    }
};
__decorate([
    property(cc.Label)
], GameView.prototype, "lbScore", void 0);
__decorate([
    property(cc.Label)
], GameView.prototype, "lbStatus", void 0);
GameView = __decorate([
    ccclass
], GameView);
exports.default = GameView;
