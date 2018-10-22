/*
 * Copyright (C) Melior Games, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Melior Games Team <info@meliorgames.com>
 *
 */
export interface Observer
{
    onObjectChanged(model:Observable);
}

export default class Observable
{
    private observers:Array<Observer> = [];

    setChanged ()
    {
        for(let i = 0; i < this.observers.length; i++)
            this.observers[i].onObjectChanged(this);
    }

    addObserver(observer:Observer)
    {
        this.observers.push(observer)
    }

    removeObserver(observer:Observer)
    {
        let index = this.observers.indexOf(observer);

        if(index != -1)
            this.observers.splice(index,1);
    }
}

