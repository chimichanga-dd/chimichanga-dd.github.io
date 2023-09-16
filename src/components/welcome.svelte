<div class="welcome">
	<div class="name">
		<span class="first-name">
			<span class="blinker">></span> David
		</span>
		<span class="last-name">
			Dixon <span class="blinker"> {`<`} </span>
		</span>
	</div>
	<div id="About" class="mini-about">
		Former information systems analyst turned software developer creating projects with Ruby, Rails,
		React and much more.
	</div>
</div>

<style lang="css">
	.welcome {
		margin-top: 100px;
	}

	.name {
		color: #66457b;
		font-size: 70px;
		font-weight: 900;
	}

	.mini-about {
		width: 100%;
		max-width: 600px;
		font-size: 20px;
		margin: 60px 0 40px;
		color: #492b5f;
	}

	.blinker {
		animation: blinker 2s linear infinite;
	}

	@keyframes blinker {
		from {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@media only screen and (max-width: 490px) {
		.welcome {
			margin-top: 75px;
		}

		.name {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.first-name {
			margin-right: 50px;
		}

		.last-name {
			margin-left: 45px;
		}

		.mini-about {
			text-align: center;
		}
	}
</style>
