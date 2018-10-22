"use strict";
/*
 * Copyright (C) Melior Games, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Melior Games Team <info@meliorgames.com>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("./command");
class StateMachine {
    constructor(container) {
        this._commands = [];
        this._state = null;
        this._container = container;
    }
    on(eventName, handler, target) {
        this._container.on(eventName, handler, target);
    }
    off(eventName, handler, target) {
        this._container.off(eventName, handler, target);
    }
    changeState(stateType, args) {
        let prevState = this._state;
        this._state = null;
        if (prevState !== null) {
            prevState.finishCommand(true);
        }
        this._state = this.createState(stateType, args);
        this._container.emit('state-changed', this._state);
        return this._state.promise;
    }
    applyState(stateType, args = []) {
        return this.changeState(stateType, args);
    }
    createState(stateType, args) {
        let result = this._container.addComponent(stateType);
        result.args = args;
        return result;
    }
    execute(type, args = []) {
        return command_1.default.executeOn(type, this._container, args, this._state);
    }
}
exports.default = StateMachine;
