<script>
	import Nav from './nav.svelte';
	import Welcome from './welcome.svelte';
	import About from './about.svelte';
	import Projects from './projects.svelte';
	import Contact from './contact.svelte';
</script>

<div class="portfolio">
	<Nav />
	<Welcome />
	<About />
	<Projects />
	<Contact />
</div>

<style lang="css">
	.portfolio {
		max-width: 900px;
		padding: 20px;
		margin: 0 auto;
	}
</style>
