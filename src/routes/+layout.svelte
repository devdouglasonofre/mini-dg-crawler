<script>
// @ts-nocheck

	import '../app.css';
	import en from '$locales/en';
	
	
	import { addMessages, init } from 'svelte-intl-precompile';
	import { t } from 'svelte-intl-precompile'
	addMessages('en', en);
	init({
		initialLocale: 'en',
		fallbackLocale: 'en'
	});

	
</script>

<h1>{$t('BATTLE.ATTACK')}</h1>
<slot />
