/*
 * Copyright (C) Melior Games, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Melior Games Team <info@meliorgames.com>
 *
 */

export default class Command extends cc.Component
{
    args:Array<any> = []
    _isRunning:boolean = true
    _isStarted:boolean = false
    _resourcesReleased:boolean = false
    _resolve:any = null
    _reject:any = null
    promise:any = null
    commands:Array<any> = []
    destroyHandler:any = null

    constructor()
    {
        super();

        const self = this;

        this.args = [];

        this.promise = new Promise(function ( resolve, reject )
            {
                self._resolve = resolve;
                self._reject = reject;
            }
        );
    }

    start ()
    {
        if(this._isRunning)
        {
            this._isStarted = true;

            this.onStart(this.args);
        }
    }

    onStart(args:Array<any>)
    {

    }

    update(dt)
    {
        if(this._isRunning)
            this.onUpdate(dt);
    }

    onUpdate(dt)
    {

    }

    static executeOn(type,target,args,state = null)
    {
        const command = target.addComponent(type);

        command.args = args;

        if(state)
        {
            state.commands.push(command)

            command.destroyHandler = state;
        }

        return command;
    }

    onCommandDestroy(command)
    {
        this.commands.splice(this.commands.indexOf(command),1);
    }

    finishCommand(success = true)
    {
        if(this._isRunning)
        {
            this._isRunning = false;
            this.onFinishCommand(success);

            this.destroy();
        }
    }

    onFinishCommand(success)
    {
        let maxCalls = this.commands.length;

        while(this.commands.length > 0)
        {
            maxCalls--;

            this.commands[0].finishCommand(success);

            if(maxCalls === 0)
                break;
        }

        if(this.commands.length !== 0)
        {
            cc.log("State does not finished all commands");
        }

        if(success)
            this._resolve(this);
        else
            this._reject(this);
    }

    onReleaseResources()
    {

    }

    onDestroy()
    {
        const commandName =  (this.constructor ? this.constructor.name : typeof(this));

        cc.log("Command " + commandName + " destroyed");

        if(!this._resourcesReleased && this._isStarted)
        {
            if(this.destroyHandler)
                this.destroyHandler.onCommandDestroy(this);

            try
            {
                this.onReleaseResources();
            }
            catch(e)
            {
                cc.log("Error during release command resources " + e.toString());
            }

            this._resourcesReleased = true;
        }
        else
            cc.warn("Resource release for command " +commandName+ " skipped, started:" + this._isStarted + ", released:" + this._resourcesReleased);
    }

    terminate()
    {
        this.finishCommand(false);
    }
}