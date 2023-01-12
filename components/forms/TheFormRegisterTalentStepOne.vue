<template>
	<div class="c-formregistertalent">
  		<div class="container">

  		  	  	<div class="row">
					<div class="offset-lg-7 col-lg-10">
						<h2 class="c-formregistertalent__title">
							{{ title }}
                            <sup>{{step_current_specific}}/{{step_current_total}}</sup>
                        </h2>
  		  	  	  		
						<div class="c-formregistertalent__field">
                        	<label>Nom  <span>*</span></label>
  		  	  	  			<input v-model="input_lastname" type="text" name="object" placeholder="" required @change="checkInputLastName($event)" />
							<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>

						<div class="c-formregistertalent__field">
                        	<label>Prénom <span>*</span></label>
  		  	  	  			<input  v-model="input_firstname" type="text" name="object" placeholder="" required @change="checkInputFirstName($event)" />
							<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>

						<div class="c-formregistertalent__field">
                        	<label>Genre <span>*</span></label>
							<div class="c-formregistertalent__field__radiolist" role="radiogroup">
								<div class="c-formregistertalent__field__radioelement">
									<input type="radio" id="1" name="drone" value="1" v-model="gender" role="radio" aria-checked="false"  aria-labelledby="label-1">
									<label id="label-1" for="1" tabindex="0">Homme</label>
								</div>
								<div class="c-formregistertalent__field__radioelement">
									<input type="radio" id="2" name="drone" value="2" v-model="gender" role="radio" aria-checked="false" aria-labelledby="label-2">
									<label id="label-2" for="2" tabindex="0">Femme</label>							
								</div>
								<div class="c-formregistertalent__field__radioelement">									
									<input type="radio" id="3" name="drone" value="3" v-model="gender" role="radio" aria-checked="false" aria-labelledby="label-3">
									<label id="label-3" for="3" tabindex="0">Autre</label>							
								</div>
							</div>
							<div class="c-formregistertalent__field__error ta-l">{{ $t('registerform.form.error_message') }}</div>
						</div>

						<div class="c-formregistertalent__mandatory">{{ $t('registerform.form.mandatory') }}</div>
					</div>
					<div class="offset-lg-8 col-lg-8">
                        <div class="c-formregistertalent__bottom">
							<nuxt-link :to="back_url" class="c-formregistertalent__bottom__back">
								<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76287 13.214C6.95814 13.4093 7.27472 13.4093 7.46998 13.214C7.66524 13.0188 7.66524 12.7022 7.46998 12.5069L2.46307 7.50002H15.5815C15.8577 7.50002 16.0815 7.27617 16.0815 7.00002C16.0815 6.72388 15.8577 6.50002 15.5815 6.50002H2.46307L7.46998 1.49311C7.66524 1.29785 7.66524 0.981267 7.46998 0.786005C7.27472 0.590743 6.95814 0.590743 6.76287 0.786005L0.902407 6.64647C0.80864 6.74024 0.75596 6.86742 0.75596 7.00002C0.75596 7.13263 0.80864 7.25981 0.902407 7.35358L0.902539 7.35371L6.76287 13.214Z" fill="url(#paint0_linear_2525_2170)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2525_2170" x1="16.0815" y1="0.639558" x2="-1.14079" y2="9.79092" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF7A00"/>
                                <stop offset="0.645833" stop-color="#FB9B11"/>
                                </linearGradient>
                                </defs>
                                </svg>
								<span>{{back_title}}</span>
							</nuxt-link>
						    <button ref="submit" class="c-formregistertalent__bottom__submit --bordered disabled" @click="handleSubmit()">
						    	<span class="c-formregistertalent__bottom__submit__text">{{submit_title}}</span>
						    </button>
                        </div>
					</div>
  		  	  	</div>


			<shape-ellipse class="c-formregistertalent__ellipse" :size="210" />
		</div>
	</div>
</template>

<script>
	import ShapeEllipse from '@/components/ui/ShapeEllipse';

  	
	export default {
      	name: 'FormRegisterTalentStepOne',
		components: { ShapeEllipse},
		data: () => {
			return {
				input_firstname: '',
				input_lastname: '',
				gender: '',
				is_form_submittable: false,
			}
		},
        props: {
            title: String,
			step_current_specific: Number,
			step_current_total: Number,
			back_title: String,
			back_url: String,
			submit_title: String,
			submit_url: String,
        },
		mounted() {
			this.input_lastname = this.$store.state.registertalent.inputLastName
			this.input_firstname = this.$store.state.registertalent.inputFirstName
			this.gender = this.$store.state.registertalent.inputGender
		},
		methods: {
			handleSubmit(){
				this.$store.commit('registertalent/mutateInputLastName', this.input_lastname)
				this.$store.commit('registertalent/mutateInputFirstName', this.input_firstname)
				this.$store.commit('registertalent/mutateInputGender', this.gender)
				this.$router.push({path: '/register/talent/steps/2/1'})
			},
			checkInputFirstName($event) {
				const value = $event.target.value
				if (/^[_A-z]*((-|'|\s)*[_A-z])*$/.test(value)) {
					$event.target.closest('.c-formregistertalent__field').classList.remove('error')
					this.input_firstname = value
    			} else {
					$event.target.closest('.c-formregistertalent__field').classList.add('error')
					this.input_firstname = ''
    			}

				this.isFormSubmittable()
			},
			checkInputLastName($event) {
				const value = $event.target.value
				if (/^[_A-z]*((-|'|\s)*[_A-z])*$/.test(value)) {
					$event.target.closest('.c-formregistertalent__field').classList.remove('error')
					this.input_lastname = value
    			} else {
					$event.target.closest('.c-formregistertalent__field').classList.add('error')
					this.input_lastname = ''
    			}

				this.isFormSubmittable()
			},
			isFormSubmittable() {
				if(this.gender && this.input_lastname && this.input_firstname) {
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			}
		},
		watch: {
   			gender() {
				
				this.isFormSubmittable()
   			},
		},
		computed: {
    		count () {
      			return this.$store.state.count
    		}
		}
	}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
	.c-formregistertalent {
		position: relative;
		padding-top: 60px;
		.c-formregistertalent__title {
			color: $black;
			font-size: 32px;
			font-weight: 200;
			font-family: $font-family-default;
			margin-bottom: 40px;
			text-align: center;

			sup {
				color: $orange;
			}
		}

		.c-formregistertalent__mandatory {
			color: $black;
			font-size: .75rem;
			margin-bottom: 42px;
		}

		.c-formregistertalent__field {
			margin-bottom: 32px;

			.c-formregistertalent__field__error {
				font-size: .625rem;
				text-align: right;
				display: none;
			}

			&.error {
				input[type="text"] {
					border-color: red;
					color: red;
				}

				.c-formregistertalent__field__error {
					display: block;
					color: red;
				}
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

		input[type="text"] {
			border: 1px solid rgba($dark-grey, .2);
			border-radius: 40px;
			height: 50px;
			width: 100%;
			padding-left: 20px;
		}


		.c-formregistertalent__field__radiolist {
			display: flex;
			align-items: center;
		}
		.c-formregistertalent__field__radioelement {
			display: flex;
			align-items: center;

			&:not(:last-child) {
				margin-right: 8px;
			}

			label {
				border: 1px solid rgba($dark-grey, .2);
				border-radius: 40px;
				cursor: pointer;
				text-transform: uppercase;
				color: $orange;
				font-weight: 700;
				padding: 5px 15px;
			}

			input[type="radio"] {
				display: none;
			}

			input[type="radio"]:checked + label {
				background-color: $orange;
				color: $white;
				font-weight: 400;
			}

			input[type="radio"] + label:focus {
				background-color: $orange;
				color: $white;
				font-weight: 400;
			}
		}

		

		.c-formregistertalent__bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.c-formregistertalent__bottom__back {
				color: $orange;

				svg {
					margin-bottom: 2px;
					margin-right: 10px;
				}
			}
			.c-formregistertalent__bottom__submit {
				position: relative;
				width: 270px;
       			background: $gradientOrange;
       			padding: 24px 40px;
       			border-radius: 100px;
       			text-align: center;
				cursor: pointer;
				border: 1px solid $orange;

				&.disabled {
					filter: grayscale(1);
					pointer-events: none;
				}

				span {
					text-transform: uppercase;
					color: $white;
				}				

				&:focus,
				&:hover {
        	    	background: $white;
        	    	span {
        	        	color: $orange;
        	    	}
        		}
			}
		}

		.c-formregistertalent__ellipse {
			position: absolute;
			right: -100px;
			bottom: 0;

		}
	}
</style>
