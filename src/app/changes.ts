import { WorldState } from './worldstate';
import { Injectable } from '@angular/core';

@Injectable()
export class Changes {

  static c: Changes;
  public actions = new Object();

  static getInstance(): Changes {
    if (this.c === undefined || this.c === null) {
      const changes = new Changes();
      this.c = changes;
      return changes;
    } else {
      return this.c;
    }
  }

  static visualizeMoneyWPrefix(cost, defaultPrefix): string {
    let suffix = '';

    const prefix = (cost < 0) ? '-$' : defaultPrefix + '$');
    cost = Math.abs(cost);
    if (cost >= 1000000000000) {
      suffix = ' T';
      cost = cost / 1000000000000;
    } else if (cost >= 1000000000) {
      suffix = ' Bn';
      cost = cost / 1000000000;
    } else if (cost >= 1000000) {
      suffix = ' Mln';
      cost = cost / 1000000;
    } else if (cost >= 100000) {
      suffix = ' K';
      cost = cost / 100000;
    }

    return prefix + Math.abs(cost).toFixed(2) + suffix;
  }

  static visualizeMoney(cost): string {
    return Changes.visualizeMoneyWPrefix(cost, '');
  }

  addAction(id: string, change: any) {
    if (this.actions === undefined || this.actions === null) {
      this.actions = new Object();
    }

    if ('removed' === change && !(this.actions[id] === undefined || this.actions[id] === null)) {
      delete this.actions[id];
    } else {
      this.actions[id] = change;
    }
  }

  onEndTurn() {
    this.applyChanges();
    WorldState.getInstance().endTurn();
  }

  private applyChanges() {
    for (const actionKey in this.actions) {
      if (this.actions.hasOwnProperty(actionKey)) {
        const currentAction = this.actions[actionKey];
        const myCountry = WorldState.getInstance().myCountry;

        if ('removed' === currentAction) {
          // cancel policy from world state (current country)
          delete myCountry.policies[actionKey];
        } else {
          // apply policy to world state (current country)
          myCountry.policies[actionKey] = currentAction;
        }

        // console.log(currentAction);
      }
    }
    this.actions = new Object();
  }
}
