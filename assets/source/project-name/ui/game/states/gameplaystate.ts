import GameState from "./gamestate";
import GameOverState from "./gameoverstate";

export default class GamePlayState extends GameState
{
    finishAt:number;

   onStart(args:Array<any>)
   {
       super.onStart(args);

       this.finishAt = new Date().getTime() + 1000 * 5;

       this.schedule(this.onGameUpdate, 1);
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
           this.unscheduleAllCallbacks();

           this.controller.stateMachine.applyState(GameOverState);
       }
   }
}
