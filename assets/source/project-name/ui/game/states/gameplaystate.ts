import GameState from "./gamestate";
import GameOverState from "./gameoverstate";
import StoneAnimation from "../components/stoneAnimation";

export default class GamePlayState extends GameState
{
    finishAt:number;
    timerId:number;
    stonePool: cc.NodePool;

   onStart(args:Array<any>)
   {
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
            new StoneAnimation(stone).start().then(() => this.stonePool.put(stone));
            this.view.warrior.getComponent(cc.Animation).play('idle');
        }
    }

   onGameUpdate()
   {
       let timeLeft:number = this.finishAt - new Date().getTime();

       this.model.score += 100;
       this.model.setChanged();

       if(timeLeft > 0)
       {
           this.view.lbStatus.string = "GAME WILL BE FINISHED IN :" + Math.ceil(timeLeft / 1000 ) + " SEC";
       }
       else
       {
           this.view.warrior.getComponent(cc.Animation).off('finished',this.animateStoneThrowing.bind(this), this.view.warrior);
           clearInterval(this.timerId);
           this.unscheduleAllCallbacks();

           this.controller.stateMachine.applyState(GameOverState);
       }
   }
}
