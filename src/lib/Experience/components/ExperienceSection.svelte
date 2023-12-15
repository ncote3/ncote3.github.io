<script lang="ts">
	import RightSectionHeader from '$lib/RightSectionHeader.svelte';
	import EmployerCollection from '../subcomponents/EmployerCollection.svelte';
	import type { IEmployerCollection } from '../../../types/experience';

	const jobs: IEmployerCollection[] = [
		{
			Biomeme: [
				{
					position: 'Software Engineer II',
					tenure: 'Sept 2022 - Present (9 months)',
					location: 'Philadelphia, PA',
					descriptionPoints: [
						'Updated a React Native application originally for research use to be used in a clinical FDA regulated setting with the Biomeme XCEL test.',
						'Implemented initial release of One Health Labs Patient Portal using cutting-edge React stack.',
						'Collaborated with UI/UX designers and Product Manager to assess technical feasibility of mobile and desktop mockups.',
						'Organized product designs into components for component-driven development, creating diagrams and Jira tickets.',
						'Mentored and assisted entry-level software engineers in team acclimation and workflow.',
						'Developed internal tools to automate and streamline workflows, including user-centered system for creating customer and experimental ISP/PCR assays.',
						'Maintained 100% unit test coverage and complete end-to-end testing for all development efforts.'
					]
				},
				{
					position: 'Software Engineer',
					tenure: 'Nov 2020 - Sep 2022 (1 year 11 months)',
					location: 'Philadelphia, PA',
					descriptionPoints: [
						'Collaborated remotely using Kanban workflow to enhance multiple React applications for accurate interpretation of PCR results in research and rapid clinical testing.',
						'Contributed to feature development and revisions of a React Native mobile app interfacing with real-time PCR machines, Android ecosystem, and backend API.',
						'Built and maintained a Serverless NodeJS backend to facilitate integration between four applications and a SQL database.'
					]
				}
			]
		},
		{
			Nuix: [
				{
					position: 'Software Engineer Co-Op',
					tenure: 'Apr 2019 - Sep 2019 (6 months)',
					location: 'Conshohocken, PA',
					descriptionPoints: [
						'Developed dynamic, verifiable forms and graph-based interfaces in collaboration with front-end mentor and UX designer.',
						'Researched and developed new components for React component library using Storybook.JS for consistent design across product line.',
						'Taught React and Redux to co-op colleagues, sharing best practices and modern JavaScript.'
					]
				},
				{
					position: 'Web Developer Co-Op → Contractor',
					tenure: 'Apr 2018 - Dec 2018 (6 months & 4 months)',
					location: 'Conshohocken, PA',
					descriptionPoints: [
						"Developed event website for Nuix's User Exchange 2018, coordinating with Design and Marketing teams to incorporate interactive elements for easy information retrieval.",
						"Recreated Nuix blog to meet Marketing team's requirements, coordinating with external contractor and utilizing Drupal for optimal project completion.",
						'Collaborated with Design, UI, and UX teams to design Nuix websites aligning with current trends and ensuring accessibility for diverse user base.',
						'Built Interactive Brand Center using React and Keystone.JS to streamline asset transfer from Graphic Design to Marketing team.'
					]
				}
			]
		}
	];
</script>

<div class="ExperienceSection">
	<RightSectionHeader label="Experience" />
	<div class="content">
		{#each jobs as collection}
			<EmployerCollection {collection} />
		{/each}
	</div>
</div>

<style>
	.ExperienceSection {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
