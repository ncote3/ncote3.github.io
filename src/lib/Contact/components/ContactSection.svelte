<script lang="ts">
	import LeftSectionHeader from '$lib/LeftSectionHeader.svelte';
	import ContactItem from '$lib/Contact/subcomponents/ContactItem.svelte';

	export const contactInformation: {
		[key: string]: string;
	} = {
		Email: 'noah.cote3@gmail.com',
		Github: '/ncote3',
		Medium: '/noah.cote',
		Unsplash: '/@ncote3'
	};
</script>

<div class="ContactSection">
	<LeftSectionHeader label="Contact" />
	<div class="content">
		{#each Object.keys(contactInformation) as service}
			<ContactItem {service} contact={contactInformation[service]} />
		{/each}
	</div>
</div>

<style>
	.ContactSection {
		display: flex;
		row-gap: 0.5em;
		flex-direction: column;
	}

	.content {
		display: flex;
		flex-direction: column;
		line-height: 1;
	}
</style>
