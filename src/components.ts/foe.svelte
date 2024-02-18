<script lang="ts">
	import type { FoeModel } from "../model/foe.model";
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    export let foe: FoeModel;

    const currentCharge = tweened(foe.currentCharge, {
        duration: 1000,
        easing: cubicOut
    });

    $: currentCharge.set(foe.currentCharge);

</script>

<div class="p-4 bg-white rounded-lg shadow-lg">
    <h1>{foe.name}</h1>
    <p>HP: {foe.currentHP}</p>
    <p>Charge: {foe.currentCharge}/{foe.maxCharge}</p>
    <progress class="progress w-56" value="{$currentCharge}" max="{foe.maxCharge}"></progress>
</div>
{foe.currentCharge}/{foe.maxCharge}