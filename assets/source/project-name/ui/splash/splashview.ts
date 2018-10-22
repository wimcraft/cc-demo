const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashView extends cc.Component {

    @property(cc.Label)
    lbStatus: cc.Label = null;

}
