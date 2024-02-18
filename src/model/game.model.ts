import { BattleModel } from "./battle.model";
import { FoeModel } from "./foe.model";
import { PhaseModel } from "./phase.model";
import { PlayerModel } from "./player.model";


export class GameModel {
    phases: PhaseModel[] = [];

    init() {
        console.log('Game init');
    }

    startBattle(player: PlayerModel, foe: FoeModel): BattleModel {
        this.phases.push(new BattleModel(player, foe));
        return this.phases[this.phases.length - 1] as BattleModel;
    }

    getBattle(): BattleModel {
        return this.phases.find(phase => phase instanceof BattleModel) as BattleModel;
    }

    update() {
        this.phases.forEach(phase => phase.update());
    }
}