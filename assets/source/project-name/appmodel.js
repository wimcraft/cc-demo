"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppModel {
    static get instance() {
        if (AppModel._instance == null)
            AppModel._instance = new AppModel();
        return AppModel._instance;
    }
}
AppModel._instance = null;
exports.default = AppModel;
