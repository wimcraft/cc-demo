export default class StoneAnimation
{
    _node;
    constructor(node) {
        this._node = node;
    }

    public start() {
        return new Promise( (resolve, reject) => {
            const actionTo = cc.jumpTo(2, cc.v2(cc.winSize.width  * 1.7, this._node.y ), -650, 1);
            this._node.runAction(cc.sequence(actionTo, cc.callFunc(() => resolve())));
        })
    }

}
