"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const splashview_1 = require("./splashview");
const { ccclass, property } = cc._decorator;
let SplashController = class SplashController extends cc.Component {
    constructor() {
        super(...arguments);
        this.view = null;
        this.loaded = 0;
    }
    start() {
        this.schedule(this.onUpdateProgress, 0.01);
    }
    onUpdateProgress() {
        this.loaded++;
        this.view.lbStatus.string = "LOADING... " + this.loaded + "%";
        if (this.loaded == 100) {
            this.unscheduleAllCallbacks();
            cc.director.loadScene('game');
        }
    }
};
__decorate([
    property(splashview_1.default)
], SplashController.prototype, "view", void 0);
SplashController = __decorate([
    ccclass
], SplashController);
exports.default = SplashController;
