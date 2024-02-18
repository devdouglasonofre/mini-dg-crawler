<script lang="ts">
    import Player from "./player.svelte";
    import Foe from "./foe.svelte";
    import type { BattleModel } from "../model/battle.model";

    export let battle;    
</script>

<h1>Battle</h1>
<Player player={$battle.player}></Player>
<Foe foe={$battle.foe}></Foe>
```