<script lang="ts">
	import type { IProjectItem } from '../../../types/projects';

	export let item: IProjectItem;
</script>

<div>
	<h4>{item.title}</h4>
	<p>{item.developmentPeriod} | {item.url}</p>
	{#each item.description as descParagraph}
		<p class="Description">{descParagraph}</p>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}

	h4,
	p {
		margin: 0;
	}

	h4 {
		font-size: 14pt;
		font-family: 'brandon-grotesque', sans-serif;
		font-weight: 500;
	}

	p {
		font-size: 10pt;
		font-family: 'proxima-nova', sans-serif;
		font-weight: 400;
	}

	.Description {
		font-size: 11pt;
		font-family: 'proxima-nova', sans-serif;
		font-weight: 400;
	}
</style>
