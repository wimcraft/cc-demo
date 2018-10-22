import Command from "../../../../meliorgames/command";
import GameController from "../gamecontroller";
import GameView from "../gameview";
import GameModel from "../gamemodel";

export default class GameState extends Command
{
    controller:GameController
    view:GameView
    model:GameModel

    onStart (args:Array<any>)
    {
        this.controller = this.node.getComponent(GameController);
        this.view = this.controller.view;
        this.model = this.controller.model;
    }
}
