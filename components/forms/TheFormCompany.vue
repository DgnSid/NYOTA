<template>
	<div class="c-formcompany">
  		<div class="container">
  		  	<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_company_name')}} <span>*</span></label>
  		  	  	  			<input v-model="input_company" type="text" :name="$t('pageregistercompany.id_company_name')" placeholder="" required />
							<div class="c-formcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_contact_name')}} <span>*</span></label>
  		  	  	  			<input v-model="input_contact" type="text" :name="$t('pageregistercompany.label_contact_name')" placeholder="" required />
							<div class="c-formcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_contact_role')}}</label>
  		  	  	  			<input v-model="input_contact_role" type="text" :name="$t('pageregistercompany.label_contact_role')" placeholder="" />
						</div>
					</div>
					<div class="offset-lg-1 col-lg-9">
						<div class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_email')}} <span>*</span></label>
  		  	  	  			<input type="email" :name="$t('pageregistercompany.label_contact_name')" placeholder="" @change="checkInputEmail($event)" />
							<div class="c-formcompany__field__error">{{ $t('registerform.form.error_message_mail') }}</div>
						</div>
					</div>
					<div class="col-lg-9">
  		  	  	  		<label>{{$t('pageregistercompany.label_phone')}} <span>*</span></label>
  		  	  	  		<input v-model="input_phone" type="text" :name="$t('pageregistercompany.id_phone')" placeholder="" required />
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__field">
							<div class="c-formcompany__field__upload">
								<label>{{$t('pageregistercompany.label_logo')}}</label>
								<div ref="input_file_dropzone" class="c-formcompany__field__upload__trigger" @click="triggerUpload('input_file_logo')">
									<div class="c-formcompany__field__upload__dropzone" @dragenter="onDragenter('input_file_dropzone')" @dragleave="onDragleave('input_file_dropzone')" @dragover.prevent="" @drop="onDrop($event, 'input_file_dropzone')"></div>
									<div class="c-formcompany__field__upload__delete" ref="input_file_logo_close" @click="deleteFile($event)">✕</div>
									<div class="c-formcompany__field__upload__trigger__uploaded hidden" ref="input_file_logo_uploaded"></div>
									<div class="c-formcompany__field__upload__trigger__container" ref="input_file_logo_container">
										<icon-picture class="c-formcompany__field__upload__trigger__icon" />
										<div class="c-formcompany__field__upload__trigger__text">{{$t('pageregistercompany.label_download_instruction')}}</div>
										<div class="c-formcompany__field__upload__trigger__meta">{{$t('pageregistercompany.label_download_extension')}}</div>
									</div>
								</div>
								<input type="file"  accept=".jpg, .jpeg, .png" hidden ref="input_file_logo" @change="onChangeInput($event)"/>
								<div ref="input_file_logo_error" class="c-formcompany__field__error">{{ $t('registerform.form.error_message') }}</div>
							</div>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-9">
						<div ref="error_password_first" class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_password')}} <span>*</span></label>
  		  	  	  			<input v-model="input_password" type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" @change="checkInputPasswordMatch()" />
						</div>
					</div>
					<div class="col-lg-9">
						<div ref="error_password" class="c-formcompany__field">
  		  	  	  			<label>{{$t('pageregistercompany.label_password_confirm')}} <span>*</span></label>
  		  	  	  			<input v-model="input_password_confirm" type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" @change="checkInputPasswordMatch()" />
							<div class="c-formcompany__field__error">{{ $t('registerform.form.error_message_password') }}</div>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__checkbox">
  		  	  	  			<input v-model="rgpd" id="rgpd" type="checkbox" name="rgpd" placeholder="" required />
							<label for="rgpd" name="rgpd" class="--checkbox" v-if="this.$i18n.locale == 'fr'">
								En cochant cette case, j’affirme avoir pris connaissance de la <a href="/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.<span>*</span>
							</label>
							<label for="rgpd" name="rgpd" class="--checkbox" v-else>
								En cochant cette case, j’affirme avoir pris connaissance de la <a href="/en/privacy-policy" target="blank_" rel="noopener noreferrer"> politique de confidentialité</a> de Nyota.<span>*</span>
							</label>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcompany__checkbox">
							<input v-model="marketing" id="marketing" type="checkbox" name="marketing" placeholder="" />
							<label for="marketing" name="marketing" class="--checkbox" v-if="this.$i18n.locale == 'fr'">
								marketing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</label>
							<label for="marketing" name="marketing" class="--checkbox" v-else>
								marketing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</label>
						</div>
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<button class="c-formcontact__submit --bordered disabled" type="submit" ref="submit">
							<span class="c-formcontact__submit__text">{{$t('pageregistercompany.submit_title')}}</span>
						</button>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcontact__mandatory-text">{{$t('pageregistercompany.mandatory')}}</div>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
		<shape-ellipse class="c-formcompany__ellipse" :size="302" />
	</div>
</template>

<script>
	import ShapeEllipse from '@/components/ui/ShapeEllipse';
	import IconPicture from '@/components/svg/IconPicture';

  	export default {
      	name: 'theFormContact',
		components: { ShapeEllipse, IconPicture },
		data: () => {
			return {
				input_company: '',
				input_contact: '',
				input_contact_role: '',
				input_email: '',
				input_phone: '',
				input_password: '',
				input_password_confirm: '',
				rgpd: false,
				marketing: false,
				files: '',
				upload_technic: '',
				mutable_input_file_logo: '',
			}
		},
		async mounted() {
  			try {
  			  await this.$recaptcha.init()
  			} catch (e) {
  			  console.error(e);
  			}

			this.$refs.input_file_logo.addEventListener('change', () => {
				const file = this.$refs.input_file_logo.files[0];					

				if(file) {					
					this.$refs.input_file_logo_uploaded.classList.remove('hidden')
					this.$refs.input_file_logo_uploaded.innerHTML = file.name

					this.$refs.input_file_logo_container.classList.add('hidden')
				} else {
					this.$refs.input_file_logo_uploaded.classList.add('hidden')
					this.$refs.input_file_logo_container.classList.remove('hidden')
				}
			})
		},
		methods: {
			async handleSubmit() {
				console.log('handleSubmit')

 			 	try {
 			 	  	const token = await this.$recaptcha.execute('login')
					let image_uploaded_id = null
					const formData = new FormData();
					formData.append("imageFile", this.files);

					if(this.files.name) {
						await this.$axios.post('/api/profile-pictures', formData, {
    						headers: {
      							'Content-Type': 'multipart/form-data'
    						}
						})
						.then(function (response) {
							image_uploaded_id = response.data['@id']
  						})

						console.log('image_uploaded_id : ', image_uploaded_id)
					}

					await this.$axios.post('/api/companies/register', {
  					  	"company": this.input_company,
  						"name": this.input_contact,
						"contactJob": this.input_contact_role,
  						"email": this.input_email,
  						"phone": this.input_phone,
  						"profilePicture": image_uploaded_id,
  						"password": this.input_password,
  						"passwordConfirmation": this.input_password_confirm,
  						"captcha": await this.$recaptcha.execute('login'),
  						"gdpr": this.rgpd,
  						"marketing": this.marketing
  					})
					.then(function (response) {
  						console.log(response);
  					})
  					.catch(function (error) {
  						console.log(error);
  					});

					await this.$recaptcha.reset()

					this.$router.push({path: `${this.currentLang}/register/company/confirm`}) 
 			 	} catch (error) {
 			 	  	console.log('Login error:', error)
 			 	}
			},
			isFormSubmittable() {
				if(this.input_company && this.input_contact && this.input_email && this.input_password && this.input_password_confirm && this.rgpd && (this.input_password == this.input_password_confirm)) {
					console.log('submittable')
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					console.log('not submittable')
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
			checkInputEmail($event) {
				const value = $event.target.value
				if (/^[\w-!#$%&'*+/=?^_`{|}~\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
					$event.target.closest('.c-formcompany__field').classList.remove('error')
					this.input_email = value
    			} else {
					$event.target.closest('.c-formcompany__field').classList.add('error')
					this.input_email = ''
    			}

				this.isFormSubmittable()
			},
			checkInputPasswordMatch() {
				if(this.input_password && this.input_password_confirm) {
					if((this.input_password == this.input_password_confirm) && (this.input_password.length >= 8)) {
						this.$refs.error_password.classList.remove('error')
						this.$refs.error_password_first.classList.remove('error')
					} else {
						this.$refs.error_password.classList.add('error')
						this.$refs.error_password_first.classList.add('error')
					}
				} else {
					this.$refs.error_password.classList.remove('error')
				}

				this.isFormSubmittable()
			},
			triggerUpload(ref) {
				if(this.files) {
					return;
				}

				this.upload_technic = 'click'

				this.$refs.input_file_logo.click()
			},
			onChange($event) {
				let size = ''
				let type = ''

				type =  this.upload_technic === 'click' ? this.$refs.input_file_logo.files[0].type : this.mutable_input_file_logo[0].type
				size = this.upload_technic === 'click' ? this.$refs.input_file_logo.files[0].size : this.mutable_input_file_logo[0].size


				if(type === 'image/jpeg' || type === 'image/png') {
					if(size <= 5000000) {
						this.files = this.upload_technic === 'click' ? this.$refs.input_file_logo.files[0] : this.mutable_input_file_logo[0] 
						this.$refs.input_file_logo_uploaded.classList.remove('hidden')
						this.$refs.input_file_logo_container.classList.add('hidden')
						this.$refs.input_file_logo_close.classList.add('active')
						this.$refs.input_file_logo_uploaded.innerHTML = this.files.name
						this.$refs.input_file_logo_error.classList.remove('error')
						return;
					}
				}

				this.$refs.input_file_logo_error.classList.add('error')
				this.$refs.input_file_logo_uploaded.classList.add('hidden')
				this.$refs.input_file_logo_container.classList.remove('hidden')
    		},
			onDragenter(ref) {
				this.$refs[`${ref}`].classList.add('active')
			},
			onDragleave(ref) {
				this.$refs[`${ref}`].classList.remove('active')
			},
			onDrop(e, ref) {
				e.preventDefault();
				this.$refs[`${ref}`].classList.remove('active')

				this.upload_technic = 'drop'

				this.mutable_input_file_logo = e.dataTransfer.files;
				this.onChange(e)
			},
			onChangeInput(e) {
				this.onChange(e)
			},
			deleteFile(e) {
				e.preventDefault()
				setTimeout(() => {
					this.files = ''
					this.$refs.input_file_logo_close.classList.remove('active')
					this.$refs.input_file_logo_container.classList.remove('hidden')
					this.$refs.input_file_logo_uploaded.classList.add('hidden')
					this.$refs.input_file_logo_uploaded.innerHTML = ''
				})
			}
		},
		beforeDestroy() {
  			this.$recaptcha.destroy()
		},
		watch: {
   			rgpd() {				
				this.isFormSubmittable()
   			},
			input_company() {				
				this.isFormSubmittable()
   			},
			input_contact() {				
				this.isFormSubmittable()
   			},
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
	.c-formcompany {
		position: relative;
		padding-top: 48px;
		background-color: $white;
		overflow-x: hidden;

		.c-formcompany__ellipse {
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

		input[type="password"],
		input[type="email"],
		input[type="text"] {
			border: 1px solid $grey;
			border-radius: 40px;
			height: 50px;
			width: 100%;
			margin-bottom: 32px;
			padding-left: 20px;
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

			&.disabled {
                filter: grayscale(1);
                pointer-events: none;
            }
		}

		.c-formcompany__mandatory-text {
			font-size: .75rem;
			color: $black;
			display: block;
			padding-bottom: 50px;
		}
		
		.c-formcompany__field__upload {
			position: relative;
			margin-bottom: 32px;

			.c-formcompany__field__upload__dropzone {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}

			.c-formcompany__field__upload__delete {
				position: absolute;
				top: 10px;
				right: 10px;
				z-index: 2;
				color: $orange;
				height: 25px;
				width: 25px;
				border-radius: 100%;
				border: 1px solid $orange;
				opacity: 0;
				display: none;


				&.active {
					display: flex;
					align-items: center;
					justify-content: center;
					opacity: 1;
				}
			}
			.c-formcompany__field__upload__trigger {
				position: relative;
				border: 1px dashed orange;
				border-radius: 10px;
				padding: 20px;
				margin-bottom: 0;
				height: 150px;
				cursor: pointer;
				margin-bottom: 16px;

				&.active {
					background-color: rgba($orange, .1)
				}

				.c-formcompany__field__upload__trigger__uploaded {
					width: 100%;
					height: 100%;
					background-size: contain;
				
					text-align: center;
					display: flex;
					justify-content: center;
					align-items: center;
					color: $black;
				
					&.hidden {
						display: none;
					}
				}

				.c-formcompany__field__upload__trigger__container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					&.hidden {
						display: none;
					}
				}

				.c-formcompany__field__upload__trigger__icon {
					margin-bottom: 20px;
				}

				.c-formcompany__field__upload__trigger__text {
					color: $black;
					font-size: .8rem;
					margin-bottom: 20px;
				}

				.c-formcompany__field__upload__trigger__meta {
					color: $orange;
					font-size: 1rem;
				}
			}
		}

		.c-formcompany__checkbox {
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
                top: 15px;
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
   			top: 10px;
            font-size: 8px;
		}
	}  

		.c-formcompany__field {
			margin-bottom: 32px;

			input[type="password"],
			input[type="email"] {
				margin-bottom: 0;
			}

			.c-formcompany__field__error {
				display: none;
			}

        	&.error {
				input[type="password"],
				input[type="email"],
        	    input[type="text"] {					
        	        border-color: red;
        	        color: red;
        	    }

        	    .c-formcompany__field__error {
        	        display: block;
        	        color: red;
					text-align: right;
					font-size: .75rem;
        	    }
        	}
    	}

		.c-formcompany__submit {
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

        	.c-formcompany__submit__text {
        	    font-weight: 700;
        	    font-size: 0.675rem;
        	    text-transform: uppercase;
        	    letter-spacing: 4px;
        	    color: $white;

        	    transition: .2s ease-out;
        	}

        	&:hover {
        	    background: $white;
        	    .c-formcompany__submit__text {
        	        color: $orange;
        	    }
        	}
		}

		.c-formcompany__ellipse {
        	position: absolute;
        	right: -100px;
        	bottom: 0;

			@include media-breakpoint-down(md) {
				display: none;
			}
    	}
	}
</style>
