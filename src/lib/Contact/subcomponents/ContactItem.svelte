<script lang="ts">
	export let service: string;
	export let contact: string;
</script>

<div>
	<span>{service}:</span>
	<p>{contact}</p>
</div>

<style>
	div {
		display: flex;
		gap: 1pt;
		font-family: 'proxima-nova', sans-serif;
	}

	span {
		font-size: 11pt;
		font-weight: 500;
	}

	p {
		margin: 0;
		font-size: 11pt;
		font-weight: 400;
	}
</style>
