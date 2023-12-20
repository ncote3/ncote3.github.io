<script>
	import LeftSectionHeader from '$lib/LeftSectionHeader.svelte';
	import SkillSubSection from '$lib/Skills/subcomponents/SkillSubSection.svelte';

	const skills = {
		frontEnd: [
			'React',
			'Redux',
			'Redux-Saga',
			'React Native',
			'Webpack',
			'Vite',
			'Sass',
			'Bootstrap',
			'Cypress',
			'Yarn',
			'Jest',
			'React Testing Library',
			'Vitest',
			'Redux Toolkit',
			'React-Router',
			'Svelte'
		],
		backend: ['Node', 'Express.JS'],
		database: ['SQL', 'MongoDB', 'MariaDB', 'SQLite'],
		languages: ['Typescript', 'Javascript ES6', 'Python', 'C++', 'C#', 'HTML & CSS', 'Bash'],
		devOps: ['CircleCi', 'Heroku', 'Serverless', 'AWS Lambda', 'AWS Cloudwatch', 'Git'],
		uiUx: [
			'Storybook',
			'Figma',
			'Balsamiq',
			'Adobe Illustrator & Photoshop',
			'User-Centered Design & Research',
			'Component Driven Design'
		]
	};
</script>

<div class="SkillSection">
	<LeftSectionHeader label="Developer Skills" />
	<div class="content">
		<SkillSubSection label="Front-End Tech" skills={skills.frontEnd} />
		<SkillSubSection label="Back-End Tech" skills={skills.backend} />
		<SkillSubSection label="Database Tech" skills={skills.database} />
		<SkillSubSection label="Languages" skills={skills.languages} />
		<SkillSubSection label="Developer Operations" skills={skills.devOps} />
		<SkillSubSection label="UI/UX Design" skills={skills.uiUx} />
	</div>
</div>

<style>
	.SkillSection {
		display: flex;
		row-gap: 0.5em;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
