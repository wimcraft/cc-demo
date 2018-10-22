import GameView from "./gameview";
import GameModel from "./gamemodel";
import StateMachine from "../../../meliorgames/statemachine";
import GamePlayState from "./states/gameplaystate";
import AppController from "../../appcontroller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameController extends cc.Component
{
    @property(GameView)
    view:GameView = null

    model:GameModel = null

    stateMachine:StateMachine

    start()
    {
        if(AppController.instance == null)
        {
            cc.director.loadScene('splash');
            return;
        }

        this.model = new GameModel();

        cc.log(JSON.stringify(this.model));

        this.view.applyModel(this.model);

        this.stateMachine = new StateMachine(this.node);
        this.stateMachine.applyState(GamePlayState);
    }

    onReplay()
    {
        this.stateMachine.applyState(GamePlayState);
    }
}
