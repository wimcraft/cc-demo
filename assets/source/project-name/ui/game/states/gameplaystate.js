"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamestate_1 = require("./gamestate");
const gameoverstate_1 = require("./gameoverstate");
class GamePlayState extends gamestate_1.default {
    onStart(args) {
        super.onStart(args);
        this.finishAt = new Date().getTime() + 1000 * 5;
        this.schedule(this.onGameUpdate, 1);
    }
    onGameUpdate() {
        let timeLeft = this.finishAt - new Date().getTime();
        this.model.score += 100;
        this.model.setChanged();
        if (timeLeft > 0) {
            this.view.lbStatus.string = "GAME WILL BE FINISHED IN :" + Math.ceil(timeLeft / 1000) + " SEC";
        }
        else {
            this.unscheduleAllCallbacks();
            this.controller.stateMachine.applyState(gameoverstate_1.default);
        }
    }
}
exports.default = GamePlayState;
