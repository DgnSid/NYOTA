<template>
	<div class="c-formforgottenpassword">
  		<div class="container">
  		  	<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-9">
						<div class="c-formforgottenpassword__intro">
							Veuillez saisir votre adresse e-mail ci-dessous. Nous vous enverrons les instructions pour créer un nouveau mot de passe.
						</div>
						
						<label>{{$t('pageforgottenpassword.label_type')}} <span>*</span></label>
  		  	  	  		<select v-model="login_type" type="text" :name="$t('pageforgottenpassword.id_type')" required>
							<option v-for="(element, index) in $t('pageforgottenpassword.option_type')" :key="index" :value="element.value">
								{{ element.name }}
							</option>
						</select>

  		  	  	  		<label>Adresse e-mail  <span>*</span></label>
  		  	  	  		<input  v-model="login_mail" type="text" name="object" placeholder="" required />
						
						<button class="c-formforgottenpassword__submit --bordered" type="submit ">
							<span class="c-formforgottenpassword__submit__text">Réinitialiser le mot de passe</span>
						</button>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
	</div>
</template>

<script>
  	export default {
      	name: 'theFormForgottenPassword',
		data: function () {
			return {
				login_type: 'c',
				login_mail: ''
			}
		},
		methods: {
			async handleSubmit() {
				console.log('handleSubmit')

				await this.$axios.post(`/api/${this.login_type}/reset/ask`, {
					"email": this.login_mail,
				})
				.then(function (response) {
					console.log(response)
  				})

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
	.c-formforgottenpassword {
		position: relative;
		padding-top: 48px;
		background-color: $white;
		overflow-x: hidden;

		min-height: calc(100vh - 512px - 200px);

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

		input[type="text"] {
			border: 1px solid $grey;
			border-radius: 40px;
			height: 50px;
			width: 100%;
			margin-bottom: 32px;
			padding-left: 20px;
		}

		select {
        	border: 1px solid $orange;
        	border-radius: 40px;
        	color: $black;
        	width: 300px;
        	background-color: transparent;
        	padding: 20px 16px;
			margin-bottom: 32px;
        	display: block;

        	appearance: none;
        	background-image: url('/arrow-down.svg');
        	background-repeat: no-repeat;
        	background-position: calc(100% - 20px) center;
    	}

		.c-formforgottenpassword__submit {
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

        	.c-formforgottenpassword__submit__text {
        	    font-weight: 700;
        	    font-size: 0.675rem;
        	    text-transform: uppercase;
        	    letter-spacing: 4px;
        	    color: $white;

        	    transition: .2s ease-out;
        	}

        	&:hover {
        	    background: $white;
        	    .c-formforgottenpassword__submit__text {
        	        color: $orange;
        	    }
        	}
		}

		.c-formforgottenpassword__intro {
			color: $black;
			padding-bottom: 40px;
		}
		
	}
</style>
