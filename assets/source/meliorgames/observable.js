"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
    constructor() {
        this.observers = [];
    }
    setChanged() {
        for (let i = 0; i < this.observers.length; i++)
            this.observers[i].onObjectChanged(this);
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index != -1)
            this.observers.splice(index, 1);
    }
}
exports.default = Observable;
