"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gamestate_1 = require("./gamestate");
const gameoverstate_1 = require("./gameoverstate");
const stoneAnimation_1 = require("../components/stoneAnimation");
class GamePlayState extends gamestate_1.default {
    onStart(args) {
        super.onStart(args);
        this.finishAt = new Date().getTime() + 1000 * 15;
        this.stonePool = new cc.NodePool();
        this.timerId = setInterval(() => {
            if (this.view.warrior) {
                this.view.warrior.getComponent(cc.Animation).play('throw');
            }
        }, 5 * 1000);
        this.view.warrior.getComponent(cc.Animation).on('finished', this.animateStoneThrowing.bind(this), this.view.warrior);
        this.view.warrior.getComponent(cc.Animation).play('throw');
        this.schedule(this.onGameUpdate, 1);
    }
    animateStoneThrowing() {
        if (this.view) {
            const stone = cc.instantiate(this.view.stonePrefab);
            this.view.node.addChild(stone);
            new stoneAnimation_1.default(stone).start().then(() => this.stonePool.put(stone));
            this.view.warrior.getComponent(cc.Animation).play('idle');
        }
    }
    onGameUpdate() {
        let timeLeft = this.finishAt - new Date().getTime();
        this.model.score += 100;
        this.model.setChanged();
        if (timeLeft > 0) {
            this.view.lbStatus.string = "GAME WILL BE FINISHED IN :" + Math.ceil(timeLeft / 1000) + " SEC";
        }
        else {
            this.view.warrior.getComponent(cc.Animation).off('finished', this.animateStoneThrowing.bind(this), this.view.warrior);
            clearInterval(this.timerId);
            this.unscheduleAllCallbacks();
            this.controller.stateMachine.applyState(gameoverstate_1.default);
        }
    }
}
exports.default = GamePlayState;
