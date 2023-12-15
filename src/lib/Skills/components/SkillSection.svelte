<script>
	import LeftSectionHeader from '$lib/LeftSectionHeader.svelte';
	import SkillSubSection from '$lib/Skills/subcomponents/SkillSubSection.svelte';
</script>

<div class="SkillSection">
	<LeftSectionHeader label="Developer Skills" />
	<div class="content">
		<SkillSubSection
			label="Front-End Tech"
			skills={[
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
				'Redux Toolkit',
				'React-Router'
			]}
		/>
		<SkillSubSection label="Back-End Tech" skills={['Node', 'Express.JS']} />
		<SkillSubSection label="Database Tech" skills={['SQL', 'MongoDB', 'MariaDB', 'SQLite']} />
		<SkillSubSection
			label="Languages"
			skills={['Typescript', 'Javascript ES6', 'Python', 'C++', 'C#', 'HTML & CSS', 'Bash']}
		/>
		<SkillSubSection
			label="Developer Operations"
			skills={['CircleCi', 'Heroku', 'Serverless', 'AWS Lambda', 'AWS Cloudwatch', 'Git']}
		/>
		<SkillSubSection
			label="UI/UX Design"
			skills={[
				'Storybook',
				'Figma',
				'Balsamiq',
				'Adobe Illustrator & Photoshop',
				'User-Centered Design & Research',
				'Component Driven Design'
			]}
		/>
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
