<script>
	import demo_1024 from '$lib/images/demo/1024_demo.jpg';
	import demo_emoji from '$lib/images/demo/emoji_demo.jpg';
	import demo_gpx from '$lib/images/demo/gpx_merge_n_plot_demo.jpg';
	import demo_lotg from '$lib/images/demo/lotg_demo.jpg';

	const projectList = [
		{
			name: 'GPX Merge n Plot',
			description: `It is a set of scripts that merges, overlays, and animates 
                    "unlimited" GPX activities. The result is an .MP4 showing 
                    efforts over time. I wanted to visualize 2 years of running 
                    in San Francisco, but was unable to find a tool that would do 
                    this. Other tools exist to handle "replays", but none work with 
                    more then a single GPX file. Built around the Strava bulk 
                    export, this script can ingest multiple files and multiple file 
                    types (.gpx, .fit, .tcx). A web app version is in the works.
    `,
			tech: ['Python3', 'MatPlotLib', '.gpx/.fit/.tcx'],
			links: {
				live: 'https://youtu.be/9nAHQXX2guE',
				source: 'https://github.com/chimichanga-dd/gpx_animation'
			},
			demo: demo_gpx
		},
		{
			name: 'Roll Emoji',
			description: `Roll Emoji is a web application featuring a rollable die and chat room. The application was created
                    to answer the question, "Who should handle deployment tasks?" The lowest roll "wins" the job. Teams no
                    longer need to switch between screen sharing, as the die will broadcast its result live. Reactions 
                    are shared by clicking on the various emojis, or by typing in the chat.`,
			tech: ['HTML5', 'CSS (SCSS)', 'Javascript (ES6)', 'React', 'Socket.io'],
			links: {
				live: 'https://roll-emoji.daviddixon.io/',
				source: 'https://github.com/chimichanga-dd/roll-emoji'
			},
			demo: demo_emoji
		},
		{
			name: 'Lord of the Gram',
			description: `Lord of the Gram is a clone of the popular social media app - InstaGram. 
                      It features accounts and posts made by fictional characters from the Lord
                      of the Rings book. Post your own content, follow other users, scroll through
                      your feed and like the posts you like!`,
			tech: [
				'Ruby',
				'Rails',
				'HTML5',
				'CSS (SASS)',
				'Javascript (ES6)',
				'React',
				'Redux',
				'PostgreSQL'
			],
			links: {
				live: 'https://lotg.daviddixon.io/',
				source: 'https://github.com/chimichanga-dd/LordOfTheGram'
			},
			demo: demo_lotg
		},
		{
			name: '1024',
			description: `1024 is a clone of a clone (2048) of a clone (1024) of a game (threes).
                      A player slides tiles using arrow keys, combining those that have the same value.
                      Create a "1024" and win the game before running out of space.`,
			tech: ['HTML5', 'CSS3', 'Javascript (ES6)', 'React'],
			links: {
				live: 'https://1024.daviddixon.io/',
				source: 'https://github.com/chimichanga-dd/1024'
			},
			demo: demo_1024
		}
	];
</script>

<div id="Projects" class="projects-container">
	<h2 class="section-header">Projects</h2>
	<div class="line-break" />
	{#each projectList as proj}
		<div class={`proj`} key={proj.name}>
			<div class="proj-pic">
				<img src={proj.demo} alt={`demo for ${proj.name}`} class="proj-demo" />
			</div>
			<h3 class={'proj-name'}>{proj.name}</h3>
			<div class={'proj-description'}>{proj.description}</div>
			<ul class={'proj-tech'}>
				{#each proj.tech as tech}
					<li class="tech-buttons">
						{tech}
					</li>
				{/each}
			</ul>
			<div class="proj-links">
				<a href={proj.links.live} target="_blank" class="live-link"> Demo </a>
				<a href={proj.links.source} target="_blank" class="source-link"> Source </a>
			</div>
		</div>
	{/each}
</div>

<style lang="css">
	.projects-container {
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

	.proj {
		display: grid;
		box-sizing: border-box;
		grid-template-areas:
			'pic title title title'
			'pic desc desc desc'
			'pic desc desc desc'
			'pic tech tech tech'
			'pic links links link';

		background: #e8e1ef45;
		border-radius: 5px;
		box-shadow: 0px 5px 15px 2px #88888845;

		margin-top: 30px;
		padding: 20px;
	}

	.proj-pic {
		grid-area: pic;
		margin-right: 20px;
	}

	.proj-demo {
		border: 1px solid gray;
		border-radius: 5px;

		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.proj-name {
		grid-area: title;
		font-size: 35px;
		color: #5a2790;
		margin: 0;
	}

	.proj-description {
		grid-area: desc;
		padding-top: 10px;
		margin-top: 15px;

		font-size: 18px;
		letter-spacing: 1px;
	}

	.proj-tech {
		grid-area: tech;
		display: flex;
		flex-wrap: wrap;
		margin-top: 5px;
	}

	.tech-buttons {
		border-left: 2px solid #9496e4;
		border-right: 2px solid #9496e4;
		border-radius: 5px;

		margin: 10px 10px 0 0;
		padding: 5px 10px;

		font-size: 14px;
		letter-spacing: 1px;
	}

	.proj-links {
		grid-area: links;
		padding-top: 10px;
		margin: 20px 0;
	}

	.proj-links > a {
		padding: 7px 20px;
		margin-right: 20px;

		background-color: #9396e4;
		border-radius: 5px;

		color: white;
		text-decoration: none;
	}

	.proj-links > a:hover {
		border: 1px solid #e2e2e2;
		padding: 6px 19px;
	}

	.proj-links > a:active {
		background-color: #b4b5e0;
	}

	.proj-links > a:last-child {
		background-color: #ffffff;
		color: #9296e4;
		box-shadow: 2px 3px 5px 1px #0000002b;
	}

	.proj-links > a:last-child:active {
		background-color: #f5f5f5;
	}

	/* sub 900 */
	@media only screen and (max-width: 800px) {
		.proj {
			grid-template-areas:
				'pic pic title title'
				'pic pic desc desc'
				'pic pic desc desc'
				'pic pic tech tech'
				'pic pic links link';
		}

		.proj-demo {
			min-width: 200px;
		}
	}

	/*sub 550 */
	@media only screen and (max-width: 550px) {
		.proj {
			grid-template-areas:
				'pic pic pic pic'
				'pic pic pic pic'
				'title title title title'
				'desc desc desc desc'
				'tech tech tech tech'
				'links links links links';
		}

		.proj-pic {
			margin-right: 0;
		}

		.proj-name {
			padding-top: 20px;
		}

		.proj-description .proj-tech {
			padding-top: 10px;
		}
	}
</style>
