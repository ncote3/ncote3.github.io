<script>
	import LeftSection from '$lib/LeftSection.svelte';
	import RightSection from '$lib/RightSection.svelte';
</script>

<div>
	<LeftSection />
	<RightSection />
</div>

<style>
	@page {
		size: letter portrait;
		margin: 20%;
	}

	div {
		display: flex;
	}
</style>
