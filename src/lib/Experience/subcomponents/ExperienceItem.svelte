<script lang="ts">
	import type { IExperienceItem } from '../../../types/experience';

	export let item: IExperienceItem;
</script>

<div>
	<h4>{item.position}</h4>
	<p>{item.tenure} | {item.location}</p>
	<ul>
		{#each item.descriptionPoints as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 0.25em;
		overflow: auto;
	}

	h4,
	ul,
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

	ul {
		padding-inline-start: 1em;
	}

	li {
		font-size: 11pt;
		font-family: 'proxima-nova', sans-serif;
		font-weight: 400;
	}
</style>
