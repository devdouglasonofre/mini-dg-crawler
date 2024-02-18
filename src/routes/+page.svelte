<script>
	import Battle from '../components.ts/battle.svelte';

	import { game } from '$lib/index';
    import { writable } from 'svelte/store';
    import { FoeModel } from '../model/foe.model';
    import { PlayerModel, PlayerAction } from '../model/player.model';

    const player = new PlayerModel('Douglas', 100, PlayerAction.ATTACK);
    const foe = new FoeModel(0, 'Dummy', 100, 0, 1000, [1000]);

    const battle = writable($game.startBattle(player, foe));

    let interval = setInterval(() => {
        $game.update();
        battle.set($game.getBattle());
    }, 1000/60);
</script>

<h1>Battle</h1>
{$battle.foe.currentCharge}/{$battle.foe.maxCharge}

<Battle {battle}></Battle>
