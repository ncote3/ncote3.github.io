<script>
	import ExperienceSection from '$lib/Experience/components/ExperienceSection.svelte';
	import ProjectsSection from '$lib/Projects/components/ProjectsSection.svelte';
</script>

<div class="PrintStyles">
	<ExperienceSection />
	<ProjectsSection />
	<div />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		padding: 1em;
		position: relative;
		gap: 1.5em;
	}
</style>
