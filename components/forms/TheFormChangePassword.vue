<template>
	<div class="c-formchangepassword">
  		<div class="container">
			<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-9">
						<div class="c-formchangepassword__intro">
							Veuillez saisir votre nouveau mot de passe ci-dessous.
						</div>

						<div ref="error_password" class="c-formchangepassword__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_password')}} <span>*</span></label>
  		  	  	  			<input v-model="input_password" type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" @change="checkInputPasswordMatch()" />
							<div class="c-formchangepassword__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>

						<div ref="error_password_confirm" class="c-formchangepassword__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_password_confirm')}} <span>*</span></label>
  		  	  	  			<input v-model="input_password_confirm" type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" @keyup="checkInputPasswordMatch()" />
							<div class="c-formchangepassword__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
						
						<button class="c-formchangepassword__submit --bordered disabled" type="submit" ref="submit">
							<span class="c-formchangepassword__submit__text">Réinitialiser le mot de passe</span>
						</button>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
	</div>
</template>

<script>
  	export default {
      	name: 'theFormChangePassword',
		data: function () {
			return {
				login_type: this.$route.query.type,
				input_password : '',
				input_password_confirm: '',
			}
		},
		methods: {
			async handleSubmit() {
				console.log('handleSubmit', this.$route.query.token)
				console.log('handleSubmit test', this.$route.query.type)

				


		


				if(this.login_type === 't') {
					await this.$axios.post(`/api/t/reset`, {
                    	"password": this.input_password,
						"passwordConfirmation": this.input_password_confirm,
						"token": this.$route.query.token,
                	})
                	.then((response) => {
                	    console.log('response', response)
                	    this.$router.push(`${this.currentLang}/change-password/confirm?type="t"`)
  					})
				} else if (this.login_type === 'c') {
					await this.$axios.post(`/api/c/reset`, {
                    	"password": this.input_password,
						"passwordConfirmation": this.input_password_confirm,
						"token": this.$route.query.token,
                	})
                	.then((response) => {
                	    console.log('response', response)
                	    this.$router.push(`${this.currentLang}/change-password/confirm?type="c"`)
  					})
				}
			},
			checkInputPasswordMatch() {
				if(this.input_password && this.input_password_confirm) {
					if((this.input_password == this.input_password_confirm) && (this.input_password.length >= 8)) {
						this.$refs.error_password.classList.remove('error')
						this.$refs.error_password_confirm.classList.remove('error')
					} else {
						this.$refs.error_password.classList.add('error')
						this.$refs.error_password_confirm.classList.add('error')
					}
				} else {
					this.$refs.error_password.classList.remove('error')
					this.$refs.error_password_confirm.classList.remove('error')
				}

				this.isFormSubmittable()
			},
			isFormSubmittable() {
				if(this.input_password && this.input_password_confirm && (this.input_password == this.input_password_confirm)) {
					console.log('submittable')
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					console.log('not submittable')
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
		},
		computed: {
            currentLang () {
                return this.$i18n.locale == 'en' ? '/' + this.$i18n.locale : ''
            },
		}
	}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
	.c-formchangepassword {
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
			display: block

			a,
			span {
				color: $orange;
			}

			a {
				text-decoration: underline;
			}
		}

		input[type="password"],
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

		.c-formchangepassword__submit {
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

			&.disabled {
                filter: grayscale(1);
                pointer-events: none;
            }

        	.c-formchangepassword__submit__text {
        	    font-weight: 700;
        	    font-size: 0.675rem;
        	    text-transform: uppercase;
        	    letter-spacing: 4px;
        	    color: $white;

        	    transition: .2s ease-out;
        	}

        	&:hover {
        	    background: $white;
        	    .c-formchangepassword__submit__text {
        	        color: $orange;
        	    }
        	}
		}

		.c-formchangepassword__intro {
			color: $black;
			padding-bottom: 40px;
		}

		.c-formchangepassword__field__error {
			display: none;
		}

		.c-formchangepassword__field {
			margin-bottom: 32px;

        	&.error {
				input[type="password"] {
        	        border-color: red;
        	        color: red;
        	    }

        	    .c-formchangepassword__field__error {
        	        display: block;
        	        color: red;
        	    }
        	}
    	}
		
	}
</style>
