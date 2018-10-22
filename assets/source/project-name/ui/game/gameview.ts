import GameModel from "./gamemodel";
import {Observer} from "../../../meliorgames/observable";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameView extends cc.Component implements Observer
{
    @property(cc.Label)
    lbScore: cc.Label = null

    @property(cc.Label)
    lbStatus: cc.Label = null;

    applyModel(model:GameModel)
    {
        model.addObserver(this);

        this.onObjectChanged(model);
    }

    onObjectChanged(object:GameModel)
    {
        this.lbScore.string = object.score.toString();
    }
}
