<script>
	import { onMount } from 'svelte';

	import { typewriter } from '$lib/helpers/animations';

	let typeOccupation = false;
	let showOccupation = false;
	const colors = ['red', 'yellow', 'green'];

	onMount(() => (typeOccupation = true));
</script>

<div class="about-container">
	<div class="console-top">
		{#each colors as color}
			<div class="{color}-button fake-icon" />
		{/each}
	</div>
	<ul class="console-bottom">
		<li class="resume" key={'resume'}>
			<div class="resume input">
				<span class="arrow">></span>David.resume
			</div>
			<div class="resume output">
				<a href="/resume">Resume</a>
			</div>
		</li>

		<li class="education" key={'education'}>
			<div class="education input">
				<span class="arrow">></span>David.education
			</div>
			<div class="education output">
				[" B.A. Geography - University of California Los Angeles", "Self Study - App Academy Full
				Stack Bootcamp"]
			</div>
		</li>

		<li class="tech" key={'tech'}>
			<div class="tech input">
				<span class="arrow">></span>David.techStack
			</div>
			<div class="tech output">
				["HTML", "CSS", "Javascript", "Typescript", "React", "Redux", "Node", "PostgreSQL",
				"Docker", "AWS", "Python", "Ruby", "Rails", "GIS"]
			</div>
		</li>

		<li class="interests" key={'interests'}>
			<div class="interests input">
				<span class="arrow">></span>David.interests
			</div>
			<div class="interests output">
				["Skateboarding", "Rock Climbing", "League of Legends", "Running"]
			</div>
		</li>

		<li class="contact-info">
			<div class="contact-info input">
				<span class="arrow">></span>David.contactInfo
			</div>
			<div class="contact-info output">
				["
				<a href="mailto:me@daviddixon.io" target="_blank" alt="email address" rel="noopener">
					me@daviddixon.io
				</a>
				", "
				<a
					href="https://www.linkedin.com/in/david-d-b36589190/"
					target="_blank"
					alt="linkedin link"
					rel="noopener"
				>
					LinkedIn
				</a>
				", "
				<a
					href="https://github.com/chimichanga-dd"
					target="_blank"
					alt="github link"
					rel="noopener"
				>
					GitHub
				</a>
				"]
			</div>
		</li>
		<li class="occupation" key={'occupation'}>
			<div class="occupation input">
				<span class="arrow">></span><span>
					{#if typeOccupation}
						<span
							transition:typewriter={{ speed: 5 }}
							on:introend={() => {
								showOccupation = true;
								setTimeout(() => {
									typeOccupation = false;
									showOccupation = false;
								}, 3000);
							}}
							on:outroend={() => (typeOccupation = true)}>David.occupation</span
						>
					{/if}
				</span>
			</div>
			<div class:hidden={!showOccupation} class="occupation output">["Software Engineer"]</div>
		</li>
	</ul>
</div>

<style lang="css">
	.console-top {
		display: flex;
		align-items: center;
		height: 20px;
		background: lightgray;

		padding: 5px 0px 5px 10px;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
	}

	.fake-icon {
		height: 10px;
		width: 10px;
		border: 1px solid gray;
		border-radius: 50%;
		margin-left: 10px;
	}

	.red-button {
		background-color: #ee6b5b;
	}
	.yellow-button {
		background-color: #f8be48;
	}
	.green-button {
		background-color: #5fc352;
	}

	.console-bottom {
		background-color: #483f4e;
		padding: 20px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		box-shadow: 0px 5px 15px 2px #888888;

		letter-spacing: 2px;
	}

	.console-bottom li {
		color: #f9f9f9;
		margin-top: 30px;
	}

	.console-bottom li:first-of-type {
		margin-top: 15px;
	}
	.console-bottom li:last-of-type {
		margin-bottom: 15px;
		height: 40px;
	}

	.output {
		color: #ffcd64;
	}

	.output > a {
		text-decoration: none;
		color: #abb1ff;
	}
	.output > a:active {
		color: #a8dcdc;
	}

	.arrow {
		margin-right: 10px;
	}

	.hidden {
		visibility: hidden;
	}
</style>
