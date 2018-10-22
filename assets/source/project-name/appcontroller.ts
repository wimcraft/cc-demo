
const {ccclass} = cc._decorator;

@ccclass
export default class AppController extends cc.Component {

    static instance:AppController

    onLoad()
    {
        AppController.instance = this;

        cc.game.addPersistRootNode(this.node);
    }
}
