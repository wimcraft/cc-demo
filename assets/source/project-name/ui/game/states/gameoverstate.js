"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamestate_1 = require("./gamestate");
class GameOverState extends gamestate_1.default {
    onStart(args) {
        super.onStart(args);
        this.view.lbStatus.string = "GAME IS OVER";
        this.view.getComponent(cc.Animation).play('gameover').wrapMode = cc.WrapMode.Normal;
        this.view.warrior.getComponent(cc.Animation).play('idle');
    }
    onReleaseResources() {
        this.view.getComponent(cc.Animation).play('gameover').wrapMode = cc.WrapMode.Reverse;
    }
}
exports.default = GameOverState;
