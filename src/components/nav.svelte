<script>
	function handleAnchorClick(event) {
		event.preventDefault();
		const link = event.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		});
	}

	const sections = ['About', 'Projects', 'Contact'];
</script>

<nav class="nav-bar">
	<ul class="nav-bar-link-container">
		{#each sections as section}
			<li>
				<a class="nav-bar-link" href="#{section}" on:click={handleAnchorClick}>{section}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="css">
	.nav-bar {
		margin-top: 30px;
		width: 100%;
		max-width: 900px;
	}

	.nav-bar-link-container {
		display: flex;
		justify-content: flex-end;
		font-size: 20px;
	}

	.nav-bar-link-container > li {
		margin-left: 30px;
	}

	.nav-bar-link {
		text-decoration: none;
		color: black;
	}

	.nav-bar-link:hover {
		cursor: pointer;
	}
	.nav-bar-link:active {
		color: gray;
	}

	@media only screen and (max-width: 550px) {
		.nav-bar-link-container {
			justify-content: center;
		}

		.nav-bar-link-container > li:first-of-type {
			margin: 0;
		}
	}
</style>
