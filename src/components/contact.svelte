<script>
	import hs from '$lib/images/hs2.jpg';
	import linkedIn from '$lib/images/LinkedIn-Logos/LI-In-Bug.png';
	import gitHub from '$lib/images/GitHubMark/GitHub-Mark-64px.png';
</script>

<div id="Contact" class="contact-container">
	<h2 class="section-header">Contact</h2>
	<div class="line-break" />
	<div class="contact-list-container">
		<ul class="contact-list-top">
			<li>
				<a
					href="https://www.linkedin.com/in/david-d-b36589190/"
					target="_blank"
					alt="linkedin link"
				>
					<img src={linkedIn} alt={'linkedIn logo'} class="logo" />
				</a>
			</li>
			<li>
				<img src={hs} alt="headshot" class="contact-headshot" />
			</li>
			<li>
				<a href="https://github.com/chimichanga-dd" target="_blank" alt="github link">
					<img src={gitHub} alt={'gitHub logo'} class="logo" />
				</a>
			</li>
		</ul>
		<ul class="contact-list-bottom">
			<li class="contact-email">
				<a href="mailto:me@daviddixon.io" target="_blank" alt="email address" rel="noopener">
					me@daviddixon.io
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="css">
	.contact-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section-header {
		font-size: 30px;
		color: #1c0533a3;
		margin: 70px 0 10px;
	}

	.line-break {
		margin: 0;
		width: 50vw;
		max-width: 600px;
		height: 3px;
		background-color: #6f67744a;
	}

	.contact-list-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.contact-list-top {
		display: flex;
		align-items: center;
	}

	.contact-list-top > li {
		padding: 10px 20px;
	}

	.contact-headshot {
		width: 150px;
		height: 150px;
		border-radius: 100%;
	}

	.contact-email > a {
		color: black;
		text-decoration: none;
	}

	.logo {
		width: 64px;
	}

	@media only screen and (max-width: 475px) {
		.contact-headshot {
			width: 100px;
			height: 100px;
		}

		.contact-list-top > li {
			padding: 10px;
		}

		.logo {
			width: 40px;
		}
	}
</style>
