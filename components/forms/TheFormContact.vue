<template>
	<div class="c-formcontact">
  		<div class="container">
  		  	<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<label>{{ $t("page_contact.label_object") }}</label>
  		  	  	  		<input v-model="input_object" type="text" name="object" placeholder="" />
					</div>
					<div class="offset-lg-1 col-lg-9">
  		  	  	  		<label>{{ $t("page_contact.label_name") }}<span>*</span></label>
  		  	  	  		<input v-model="input_name" type="text" name="name" placeholder="" required />
					</div>
					<div class="col-lg-9">
  		  	  	  		<label>{{ $t("page_contact.label_company") }}</label>
  		  	  	  		<input v-model="input_company" type="text" name="company" placeholder="" />
					</div>
					<div class="offset-lg-1 col-lg-9">
						<div class="c-formcontact__field">
  		  	  	  			<label>{{ $t("page_contact.label_mail") }} <span>*</span></label>
  		  	  	  			<input v-model="input_mail" type="email" name="mail" placeholder="" required @change="checkInputEmail($event)" />
							<div class="c-formcontact__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
					</div>
					<div class="col-lg-9">
  		  	  	  		<label>{{ $t("page_contact.label_phone") }}</label>
  		  	  	  		<input v-model="input_phone" type="text" name="phone" placeholder="" />
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<label>{{ $t("page_contact.label_message") }}  <span>* {{ $t("page_contact.label_message_max") }}</span></label>
  		  	  	  		<textarea v-model="input_message" name="message" maxlength="1500"></textarea>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcontact__checkbox">
  		  	  	  			<input v-model="input_rgpd" id="rgpd" type="checkbox" name="name" placeholder="" required />
							<label for="rgpd" name="rgpd" class="--checkbox" v-if="this.$i18n.locale == 'fr'">
								En cochant cette case, j’affirme avoir pris connaissance de la <a href="/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.
							</label>
							<label for="rgpd" name="rgpd" class="--checkbox" v-else>
								En cochant cette case, j’affirme avoir pris connaissance de la <a href="/en/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.
							</label>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<button class="c-formcontact__submit --bordered disabled" type="submit" ref="submit">
							<span class="c-formcontact__submit__text">{{ $t("page_contact.label_submit") }}</span>
						</button>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcontact__mandatory-text">{{ $t("page_contact.label_mandatory") }}</div>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
		<shape-ellipse class="c-formcontact__ellipse" :size="302" />
	</div>
</template>

<script>
	import ShapeEllipse from '@/components/ui/ShapeEllipse';

  	export default {
      	name: 'theFormContact',
		components: { ShapeEllipse },
		data () {
			return {
				input_object: '',
				input_name: '',
				input_company: '',
				input_object: '',
				input_mail: '',
				input_phone: '',
				input_message: '',
				input_rgpd: false,
			}
		},
		async mounted() {
  			try {
  			  await this.$recaptcha.init()
  			} catch (e) {
  			  console.error(e);
  			}
		},
		methods: {
			checkInputEmail($event) {
				const value = $event.target.value
				if (/^[\w-!#$%&'*+/=?^_`{|}~\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
					$event.target.closest('.c-formcontact__field').classList.remove('error')
					this.input_mail = value
					this.isFormSubmittable()
    			} else {
					$event.target.closest('.c-formcontact__field').classList.add('error')
    			}

				
			},
			isFormSubmittable() {
				if(this.input_mail) {
					console.log('submittable')
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					console.log('not submittable')
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
			async handleSubmit() {
				console.log('handleSubmit')

				try {

					await this.$axios.post('/api/requests', {
						"subject": this.input_object,
    					"email": this.input_mail,
						"phoneNumber": this.input_phone,
						"company": this.input_company,
    					"name": this.input_name,
    					"captcha": await this.$recaptcha.execute('login'),
    					"message": this.input_mail,
    					"gdpr": this.input_rgpd
  					})
					.then(function (response) {
  						console.log(response);
  					})
  					.catch(function (error) {
  						console.log(error);
  					});

					await this.$recaptcha.reset()

					this.$router.push({path: `${this.currentLang}/contact/confirm`}) 
 			 	} catch (error) {
 			 	  	console.log('error:', error)
 			 	}
			}
		},
		beforeDestroy() {
  			this.$recaptcha.destroy()
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
	.c-formcontact {
		position: relative;
		padding-top: 48px;
		background-color: $white;
		overflow-x: hidden;

		.c-formcontact__ellipse {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(50%, -50%);

			@include media-breakpoint-down(md) {
				display: none;
			}
		}

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

			&.--checkbox {
				font-size: .75rem;
				line-height: 1.5rem;
				text-transform: none;
				letter-spacing: 0;
				cursor: pointer;
			}
		}

		input[type="email"],
		input[type="text"] {
			border: 1px solid $grey;
			border-radius: 40px;
			height: 50px;
			width: 100%;
			margin-bottom: 32px;
			padding-left: 20px;
		}

		.c-formcontact__checkbox {
			input {
				display: none;
			}

			label {
        	    cursor: pointer;
        	    padding-left: 5px;
        	    margin-left: 12px;
        	    font-size: .75rem;
        	    line-height: .75rem;

				a {
					color: $orange;
				}

        	    &::before {
        	        content: '';
        	        position: absolute;
        	        left: 15px;
        	        top: calc(50% - 1px);
        	        border: 1px solid $orange;
        	        height: 12px;
        	        width: 12px;
        	        border-radius: 4px;
        	        background-color: $white;
        	        transform: translate(0, -50%);
        	    }
        	}

			input:checked + label::before {
        	    content: '.';
        	    color: $orange;
        	    background-color: $white;
        	}

        	input:checked + label::after {
        	    content: '✔';
        	    color: $orange;
        	    position: absolute;
				left: 18px;
   				top: 10px;
        	    font-size: 8px;
			}
		}                           

		textarea {
			display: block;
			border: 1px solid $grey;
			border-radius: 40px;
			width: 100%;
			height: 320px;
			margin-bottom: 32px;
			padding-top: 20px;
			padding-left: 20px;
		}

		[type="submit"] {
			position: relative;
       		background: $gradientOrange;
       		padding: 24px 40px;
       		border-radius: 100px;
       		text-align: center;
			cursor: pointer;
			margin-top: 40px;
			margin-bottom: 16px;
			border: 1px solid $orange;

			span {
				text-transform: uppercase;
				color: $white;
			}

			&:hover {
            	background: $white;
            	span {
                	color: $orange;
            	}
        	}
		}

		.c-formcontact__mandatory-text {
			font-size: .75rem;
			color: $black;
			display: block;
			padding-bottom: 50px;
		}

		.c-formcontact__field {
			margin-bottom: 32px;

        	&.error {
				input[type="email"] {
        	        border-color: red;
        	        color: red;
        	    }

        	    .c-formcontact__field__error {
        	        display: block;
        	        color: red;
					text-align: right;
					font-size: 12px;
					margin-top: -32px;
        	    }
        	}
    	}

		.c-formcontact__submit {
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

			&.disabled {
                filter: grayscale(1);
                pointer-events: none;
            }

       		&.--bordered {
       		    border: 1px solid $orange;
       		}

        	.c-formcontact__submit__text {
        	    font-weight: 700;
        	    font-size: 0.675rem;
        	    text-transform: uppercase;
        	    letter-spacing: 4px;
        	    color: $white;

        	    transition: .2s ease-out;
        	}

        	&:hover {
        	    background: $white;
        	    .c-formcontact__submit__text {
        	        color: $orange;
        	    }
        	}
		}
	}
</style>
