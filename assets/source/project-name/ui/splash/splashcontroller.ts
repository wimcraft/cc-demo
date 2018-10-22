import SplashView from "./splashview";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashController extends cc.Component {

    @property(SplashView)
    view: SplashView = null;

    loaded:number = 0;

    start ()
    {
        this.schedule(this.onUpdateProgress,0.01);
    }

    onUpdateProgress()
    {
        this.loaded++;

        this.view.lbStatus.string = "LOADING... " + this.loaded + "%";

        if(this.loaded == 100)
        {
            this.unscheduleAllCallbacks();

            cc.director.loadScene('game');
        }
    }

}
