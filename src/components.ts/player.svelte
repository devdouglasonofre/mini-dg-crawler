<script lang="ts">
	import type { PlayerModel } from "../model/player.model";
    export let player: PlayerModel;
</script>

<div>
    <h1>{player.name}</h1>
    <p>HP: {player.currentHP}</p>
    <p>Action: {player.currentAction}</p>
</div>