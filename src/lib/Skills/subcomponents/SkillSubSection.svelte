<script lang="ts">
	import SkillSubSectionHeader from '$lib/Skills/subcomponents/SkillSubSectionHeader.svelte';

	export let label: string;
	export let skills: string[] = [];
</script>

<div>
	<SkillSubSectionHeader {label} />
	<p>{skills.join(' | ')}</p>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	p {
		margin: 0;
		font-size: 11pt;
		padding: 1px;
		font-family: 'proxima-nova', sans-serif;
		font-weight: 400;
		line-height: 1;
	}
</style>
