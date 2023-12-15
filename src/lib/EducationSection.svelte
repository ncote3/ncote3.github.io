<script>
	import LeftSectionHeader from '$lib/LeftSectionHeader.svelte';
</script>

<div class="EducationSection">
	<LeftSectionHeader label="Education" />
	<div class="content">
		<p class="educationName">Drexel University</p>
		<p>B.S. in Software Engineering</p>
		<p>Philadelphia, Pennsylvania</p>
		<p>September 2016 - June 2020</p>
		<p>Completed 4 of 5 years, left due to COVID-19 related hardship</p>
	</div>
</div>

<style>
	.EducationSection {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
	}

	p {
		margin: 0;
		font-size: 11pt;
		font-family: 'proxima-nova', sans-serif;
		font-weight: 400;
	}

	.content {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}

	.educationName {
		font-size: 14pt;
		font-family: 'brandon-grotesque', sans-serif;
		font-weight: 500;
	}
</style>
