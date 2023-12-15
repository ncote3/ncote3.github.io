<script lang="ts">
	import ExperienceItem from '$lib/Experience/subcomponents/ExperienceItem.svelte';
	import type { IEmployerCollection } from '../../../types/experience';

	export let collection: IEmployerCollection;

	const [employer] = Object.keys(collection);
</script>

<div class="EmployerCollection">
	{#if employer}
		<h4>{employer}</h4>
		<div class="content">
			{#each collection[employer] as item}
				<ExperienceItem {item} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.EmployerCollection {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		gap: 0.25em;
		flex-direction: column;
		padding-left: 0.5em;
	}

	h4 {
		margin: 0;
		font-size: 16pt;
		font-family: 'brandon-grotesque', sans-serif;
		font-weight: 500;
	}
</style>
