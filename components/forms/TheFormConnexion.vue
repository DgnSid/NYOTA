<template>
	<div class="c-formconnexion">
  		<div class="container">
  		  	<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-9">
  		  	  	  		<label>Adresse e-mail  <span>*</span></label>
  		  	  	  		<input type="text" name="object" placeholder="" required />
						
						<label>Mot de passe <span>*</span></label>
  		  	  	  		<input type="password" name="name" placeholder="" required />

						<div>
							<nuxt-link class="c-formconnexion__link" to="/forgotten-password">mot de passe oublié</nuxt-link>
						</div>

						<button class="c-formconnexion__submit --bordered" type="submit ">
							<span class="c-formconnexion__submit__text">Connexion</span>
						</button>

						<div class="c-formconnexion__mandatory-text">* champ obligatoire</div>

						<div class="c-formconnexion__register" >
							Vous n’avez pas de compte ? <nuxt-link to="/forgotten-password">Inscrivez-vous ici</nuxt-link>
						</div>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
	</div>
</template>

<script>
  	export default {
      	name: 'theFormConnexion',
		methods: {
			async handleSubmit() {
				console.log('handleSubmit')
			}
		},
	}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
	.c-formconnexion {
		position: relative;
		padding-top: 48px;
		background-color: $white;
		overflow-x: hidden;

		label {
			color: $black;
			text-transform: uppercase;
			font-size: 0.75rem;
			letter-spacing: 3px;
			margin-bottom: 10px;

			a,
			span {
				color: $orange;
			}

			a {
				text-decoration: underline;
			}
		}

		input[type="text"],
		input[type="password"] {
			border: 1px solid $grey;
			border-radius: 40px;
			height: 50px;
			width: 100%;
			margin-bottom: 32px;
			padding-left: 20px;
		}

		.c-formconnexion__mandatory-text {
			font-size: .75rem;
			color: $black;
			display: block;
			padding-bottom: 80px;
		}

		.c-formconnexion__link {
			font-size: 0.675rem;
			color: $orange;
			text-decoration: underline;
			margin-bottom: 40px;
		}

		.c-formconnexion__submit {
        	position: relative;
        	background: $gradientOrange;
        	padding: 24px 40px;
        	border-radius: 100px;
        	text-align: center;
			cursor: pointer;
			margin: 10px 0;

       		@include media-breakpoint-down(md) {
       		    margin-bottom: 10px;
       		}

       		&.--bordered {
       		    border: 1px solid $orange;
       		}

        	.c-formconnexion__submit__text {
        	    font-weight: 700;
        	    font-size: 0.675rem;
        	    text-transform: uppercase;
        	    letter-spacing: 4px;
        	    color: $white;

        	    transition: .2s ease-out;
        	}

        	&:hover {
        	    background: $white;
        	    .c-formconnexion__submit__text {
        	        color: $orange;
        	    }
        	}
		}

		.c-formconnexion__register {
			color: $black;
			padding-bottom: 40px;

			a {
				color: $orange;
				text-decoration: underline;
			}
		}
		
	}
</style>
