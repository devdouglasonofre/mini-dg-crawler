export enum PlayerAction {
    ATTACK = 'attack',
    DODGE = 'dodge'
}

export class PlayerModel {
    name: string;
    currentHP: number;
    currentAction: PlayerAction;

    constructor(name: string, currentHP: number, currentAction: PlayerAction) {
        this.name = name;
        this.currentHP = currentHP;
        this.currentAction = currentAction;
    }

    setCurrentAction(action: PlayerAction): this {
        this.currentAction = action;
        return this;
    }
}