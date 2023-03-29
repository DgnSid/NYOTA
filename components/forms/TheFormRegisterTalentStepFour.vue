<template>
	<div class="c-formregistertalent">
  		<div class="container">
  		  	  	<div class="row">
					<div class="offset-lg-10 col-lg-7">
						<h2 class="c-formregistertalent__title">
							{{ title }}
                            <sup>{{step_current_specific}}/{{step_current_total}}</sup>
                        </h2>
						<div class="c-formregistertalent__field">
                        	<label>{{$t('registerform.steps.four.label_mail')}}  <span>*</span></label>
  		  	  	  			<input type="text" name="object" placeholder="" required @change="checkInputEmail($event)" />
							<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message_mail') }}</div>
						</div>
						<div ref="error_password" class="c-formregistertalent__field">
                        	<label>{{$t('registerform.steps.four.label_password')}}  <span>*</span></label>
  		  	  	  			<input v-model="input_password" type="password" name="object" placeholder="" required @change="checkInputPasswordMatch()" />
							<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message_password') }}</div>
						</div>
						<div ref="error_password" class="c-formregistertalent__field">
                        	<label>{{$t('registerform.steps.four.label_password_confirmation')}}  <span>*</span></label>
  		  	  	  			<input v-model="input_password_confirm" type="password" name="object" placeholder="" required @change="checkInputPasswordMatch()" />
							<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message_password') }}</div>
						</div>
						<div class="c-formregistertalent__field">
							<div class="c-formtalent__checkbox">
  		  	  	  				<input v-model="rgpd" id="rgpd" type="checkbox" name="rgpd" placeholder="" required />
								<label for="rgpd" name="rgpd" class="--checkbox" v-if="this.$i18n.locale == 'fr'">
									En cochant cette case, j’affirme avoir pris connaissance de la <a href="/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.<span>*</span>
								</label>
								<label for="rgpd" name="rgpd" class="--checkbox" v-else>
									En cochant cette case, j’affirme avoir pris connaissance de la <a href="/en/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.<span>*</span>
								</label>
								<div class="c-formregistertalent__field__error">{{ $t('registerform.form.error_message') }}</div>
							</div>
						</div>
						<div class="c-formregistertalent__field">
							<div class="c-formtalent__checkbox">
								<input v-model="marketing" id="marketing" type="checkbox" name="marketing" placeholder="" />
								<label for="marketing" name="marketing" class="--checkbox" v-if="this.$i18n.locale == 'fr'">
									marketing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</label>
								<label for="marketing" name="marketing" class="--checkbox" v-else>
									marketing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</label>
							</div>
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
								<div class="c-formregistertalent__bottom__submit__cover"></div>
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
import { cpuUsage } from 'process';

  	
	export default {
      	name: 'FormRegisterTalent',
		components: { ShapeEllipse},
		data: () => {
			return {
				input_email: '',
				input_password:'',
				input_password_confirm:'',
				rgpd: '',
				marketing: '',
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
			this.industry = this.$store.state.registertalent.inputIndustryWanted
		},
		methods: {
			async handleSubmit(){
				const nationalities_code_array =  this.$store.state.registertalent.selectNationality.map(a => a.code)
				const langs_code_array =  this.$store.state.registertalent.selectLangs ? this.$store.state.registertalent.selectLangs.map(a => a.code) : null
				const langs_code_array_merged = langs_code_array ? langs_code_array.concat(this.$store.state.registertalent.selectLangsFeatured) : this.$store.state.registertalent.selectLangsFeatured
				const has_african_passed_experience_bool = this.$store.state.registertalent.inputHasAfricanPastExperience === "true" ? true : false
				const workplace_json = JSON.parse(JSON.stringify(this.$store.state.registertalent.inputWorkplaces))
				
				if(this.$store.state.registertalent.inputFilePicture) {
					await this.$axios.post('/api/talents/register', {						
						"profilePicture": this.$store.state.registertalent.inputFilePicture,
						"email": this.input_email,
						"password": this.input_password,
						"passwordConfirmation": this.input_password_confirm,
						"resume": this.$store.state.registertalent.inputFileCv,
						"lastname": this.$store.state.registertalent.inputLastName,
						"firstname": this.$store.state.registertalent.inputFirstName,
						"gender": `/api/genders/${this.$store.state.registertalent.inputGender}`,
						"yearsOfExperience": parseInt(this.$store.state.registertalent.inputYearsOfExperience),
						"oldIndustry": `/api/industries/${this.$store.state.registertalent.inputIndustryExperience}`,
						"newIndustry": `/api/industries/${this.$store.state.registertalent.inputIndustryWanted}`,
						"country": this.$store.state.registertalent.selectCountryFrom,
						"nationalities": nationalities_code_array,
						"languages": langs_code_array_merged,
						"expectedStartDate": `/api/expected_start_dates/${this.$store.state.registertalent.inputExpectedStartDate}`,
						"job": `${this.$store.state.registertalent.inputJobName}`,
						"salary": `/api/salaries/${this.$store.state.registertalent.inputSalaries}`,
						"hasAfricanPastExperience": has_african_passed_experience_bool,
						"contract":  `/api/contracts/${this.$store.state.registertalent.inputContract}`,
						"domain": `/api/domains/${this.$store.state.registertalent.inputContract}`,
						"workplaces": workplace_json,
						"diploma": `/api/diplomas/${this.$store.state.registertalent.inputDiplomas}`,
						"school": `${this.$store.state.registertalent.inputSchoolname}`,
  						"captcha": await this.$recaptcha.execute('login'),
  						"gdpr": this.rgpd,
  						"marketing": this.marketing
  					})
					.then((response) => {
  						console.log(response);
						this.$router.push({path: `${this.currentLang}/register/talent/steps/confirm`}) 
  					})
  					.catch(function (error) {
  						console.log(error);
  					});
				} else {
					await this.$axios.post('/api/talents/register', {
						"email": this.input_email,
						"password": this.input_password,
						"passwordConfirmation": this.input_password_confirm,
						"resume": this.$store.state.registertalent.inputFileCv,
						"lastname": this.$store.state.registertalent.inputLastName,
						"firstname": this.$store.state.registertalent.inputFirstName,
						"gender": `/api/genders/${this.$store.state.registertalent.inputGender}`,
						"yearsOfExperience": parseInt(this.$store.state.registertalent.inputYearsOfExperience),
						"oldIndustry": `/api/industries/${this.$store.state.registertalent.inputIndustryExperience}`,
						"newIndustry": `/api/industries/${this.$store.state.registertalent.inputIndustryWanted}`,
						"country": this.$store.state.registertalent.selectCountryFrom,
						"nationalities": nationalities_code_array,
						"languages": langs_code_array_merged,
						"expectedStartDate": `/api/expected_start_dates/${this.$store.state.registertalent.inputExpectedStartDate}`,
						"job": `${this.$store.state.registertalent.inputJobName}`,
						"salary": `/api/salaries/${this.$store.state.registertalent.inputSalaries}`,
						"hasAfricanPastExperience": has_african_passed_experience_bool,
						"contract":  `/api/contracts/${this.$store.state.registertalent.inputContract}`,
						"domain": `/api/domains/${this.$store.state.registertalent.inputContract}`,
						"workplaces": workplace_json,
						"diploma": `/api/diplomas/${this.$store.state.registertalent.inputDiplomas}`,
						"school": `${this.$store.state.registertalent.inputSchoolname}`,
  						"captcha": await this.$recaptcha.execute('login'),
  						"gdpr": this.rgpd,
  						"marketing": this.marketing
  					})
					.then((response) => {
  						console.log(response);
						this.$router.push({path: `${this.currentLang}/register/talent/steps/confirm`}) 
  					})
  					.catch(function (error) {
  						console.log(error);
  					});
				}
				
			},
			isFormSubmittable() {
				if(this.input_email && this.input_password && this.input_password_confirm && this.rgpd && (this.input_password == this.input_password_confirm)) {
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
			checkInputEmail($event) {
				const value = $event.target.value
				if (/^[\w-!#$%&'*+/=?^_`{|}~\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
					$event.target.closest('.c-formregistertalent__field').classList.remove('error')
					this.input_email = value
    			} else {
					$event.target.closest('.c-formregistertalent__field').classList.add('error')
					this.input_email = ''
    			}

				this.isFormSubmittable()
			},
			checkInputPasswordMatch($event) {
				if(this.input_password && this.input_password_confirm) {
					if((this.input_password == this.input_password_confirm) && (this.input_password.length >= 8)) {
						this.$refs.error_password.classList.remove('error')
					} else {
						this.$refs.error_password.classList.add('error')
					}
				} else {
					this.$refs.error_password.classList.remove('error')
				}

				this.isFormSubmittable()
			}
		},
		watch: {
   			rgpd() {				
				this.isFormSubmittable()
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
	@import '@/assets/sass/app/form/register.scss';

	.c-formtalent__checkbox {
		position: relative;

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
                top: 6px;
                border: 1px solid $orange;
                height: 12px;
                width: 12px;
                border-radius: 4px;
                background-color: $white;
                transform: translate(-100%, -50%);
            }

			&.--checkbox {
				font-size: .75rem;
				line-height: .75rem;
				text-transform: none;
				letter-spacing: 0;
				cursor: pointer;
				padding-left: 15px;
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
			left: 6px;
   			top: 1px;
            font-size: 8px;
		}
	}  
</style>
