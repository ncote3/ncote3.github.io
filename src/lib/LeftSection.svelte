<script>
	import NameHero from '$lib/Name.svelte';
	import ContactSection from '$lib/Contact/components/ContactSection.svelte';
	import EducationSection from '$lib/EducationSection.svelte';
	import SkillSection from '$lib/Skills/components/SkillSection.svelte';
</script>

<div>
	<NameHero />
	<ContactSection />
	<SkillSection />
	<EducationSection />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1em;
		background-color: #861e1b;
		padding: 1em;
		color: white;
	}
</style>
