import { FoeModel } from "./foe.model";
import { PhaseModel } from "./phase.model";
import { PlayerModel } from "./player.model";


export class BattleModel extends PhaseModel {
    player: PlayerModel;
    foe: FoeModel;

    constructor(player: PlayerModel, foe: FoeModel) {
        super();
        this.player = player;
        this.foe = foe;
    }

    init() {
        console.log('Battle init');
    }

    update() {
        console.log('Battle update');
        this.foe.incrementCharge();
    }
}