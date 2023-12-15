<script lang="ts">
	import RightSectionHeader from '$lib/RightSectionHeader.svelte';
	import type { IProjectItem } from '../../../types/projects';
	import ProjectItem from '../subcomponents/ProjectItem.svelte';

	const githubLink = 'github.com/ncote3/';

	const collection: IProjectItem[] = [
		{
			title: 'canvass-foresight',
			developmentPeriod: 'Apr 2022',
			url: `${githubLink}canvass-foresight`,
			description: [
				"Developed a powerful data annotation tool designed to enhance organizers' canvassing efforts. The tool empowers organizers to efficiently process extensive sets of potential addresses by providing them with the ability to evaluate an address before deploying personnel to the location. Leveraging a comprehensive collection of pre-fetched streetview images, the platform allows organizers to seamlessly review, label, and provide comments on these images."
			]
		},
		{
			title: 'Philly-Landlord-Spotter',
			developmentPeriod: 'Jun 2020',
			url: `${githubLink}philly-landlord-spotter`,
			description: [
				'Built using React.JS, Node.JS (Express API), and Python. It utilizes Philadelphia Property Assessment data to create a tenant-centered tool for information discovery.'
			]
		},
		{
			title: 'Canvassing Web App',
			developmentPeriod: 'Jan 2020',
			url: `Private Repository`,
			description: [
				'Constructed a canvassing web app using Django and GIS data to optimize the efforts of area tenant advocacy organizations while soliciting canvassers for functionality requirements.'
			]
		}
	];
</script>

<div class="ProjectsSection">
	<RightSectionHeader label="Projects" />
	<div class="content">
		<div class="ProjectCollection">
			{#each collection as item}
				<ProjectItem {item} />
			{/each}
		</div>
	</div>
</div>

<style>
	.ProjectsSection {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.ProjectCollection {
		display: flex;
		flex-direction: column;
	}
</style>
