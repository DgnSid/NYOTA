<template>
	<div class="c-formregistertalent">
  		<div class="container">
  		  	  	<div class="row no-gutters">
					<div class="offset-lg-4 col-lg-16">
						<h2 class="c-formregistertalent__title">
							{{ title }}
                            <sup>{{step_current_specific}}/{{step_current_total}}</sup>
                        </h2>
					</div>
					<div class="offset-lg-2 col-lg-8">
						<div class="c-formregistertalent__upload">
							<h2 class="c-formregistertalent__upload__title">{{ $t("registerform.steps.three.cv_title") }}</h2>
							<div ref="input_file_cv_dropzone" class="c-formregistertalent__upload__trigger" @click="triggerUpload('input_file_cv', 'cv')">
								<div ref="input_file_cv_dropzone__cover" class="c-formregistertalent__upload__dropzone" @dragenter="onDragenter('input_file_cv_dropzone')" @dragleave="onDragleave('input_file_cv_dropzone')" @dragover.prevent="" @drop="onDrop($event, 'input_file_cv_dropzone', 'cv')"></div>
								<div class="c-formregistertalent__upload__delete" ref="input_file_cv_close" @click="deleteFile($event, 'cv')">✕</div>
								<div class="c-formregistertalent__upload__trigger__uploaded hidden" ref="input_file_cv_uploaded"></div>
								<div class="c-formregistertalent__upload__trigger__container" ref="input_file_cv_container">
									<icon-download class="c-formregistertalent__upload__trigger__icon" />
									<div class="c-formregistertalent__upload__trigger__text">{{$t('registerform.steps.three.cv_instruction')}}</div>
									<div class="c-formregistertalent__upload__trigger__meta">{{$t('registerform.steps.three.cv_meta')}}</div>
								</div>
							</div>
							<input type="file"  accept=".jpg, .jpeg, .png, .pdf" hidden ref="input_file_cv" @change="onChangeInput($event)"/>
							<div ref="input_file_cv_error" class="c-formregistertalent__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
					</div>
					<div class="c-formregistertalent__separator"></div>
					<div class="offset-lg-4 col-lg-8">
						<div class="c-formregistertalent__upload">
							<h2 class="c-formregistertalent__upload__title">{{ $t("registerform.steps.three.photo_title") }}</h2>
							<div ref="input_file_picture_dropzone" class="c-formregistertalent__upload__trigger" @click="triggerUpload('input_file_picture', 'picture')">
								<div ref="input_file_picture_dropzone__cover" class="c-formregistertalent__upload__dropzone" @dragenter="onDragenter('input_file_picture_dropzone')" @dragleave="onDragleave('input_file_picture_dropzone')" @dragover.prevent="" @drop="onDrop($event, 'input_file_picture_dropzone', 'picture')"></div>
								<div class="c-formregistertalent__upload__delete" ref="input_file_picture_close" @click="deleteFile($event, 'picture')">✕</div>
								<div class="c-formregistertalent__upload__trigger__uploaded hidden" ref="input_file_picture_uploaded"></div>
								<div class="c-formregistertalent__upload__trigger__container" ref="input_file_picture_container">
									<icon-picture class="c-formregistertalent__upload__trigger__icon" />
									<div class="c-formregistertalent__upload__trigger__text">{{$t('registerform.steps.three.photo_instruction')}}</div>
									<div class="c-formregistertalent__upload__trigger__meta">{{$t('registerform.steps.three.photo_meta')}}</div>
								</div>
							</div>
							<input type="file"  accept=".jpg, .jpeg, .png" hidden ref="input_file_picture" @change="onChangeInput($event)"/>
							<div ref="input_file_picture_error" class="c-formregistertalent__error">{{ $t('registerform.form.error_message') }}</div>
						</div>
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
	import IconPicture from '../svg/IconPicture.vue';
	import IconDownload from '../svg/IconDownload.vue';

  	
	export default {
      	name: 'FormRegisterTalent',
		components: { ShapeEllipse, IconPicture, IconDownload},
		data: () => {
			return {
				file_cv: '',
				file_picture: '',
				is_form_submittable: false,
				upload_type : '',
				upload_technic : '',
				mutable_input_file_cv: '',
				mutable_input_file_picture: '',
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
			this.$refs.input_file_cv.addEventListener('change', () => {
				const file = this.$refs.input_file_cv.files[0];			
				this.file_cv = file	

				if(file) {					
					this.$refs.input_file_cv_uploaded.classList.remove('hidden')
					console.log('file.name cv ', file.name)
					this.$refs.input_file_cv_uploaded.innerHTML = file.name

					this.$refs.input_file_cv_container.classList.add('hidden')
				} else {
					this.$refs.input_file_cv_uploaded.classList.add('hidden')
					this.$refs.input_file_cv_container.classList.remove('hidden')
				}
			})

			this.$refs.input_file_picture.addEventListener('change', () => {
				const file = this.$refs.input_file_picture.files[0];
				this.file_picture = file					

				if(file) {					
					this.$refs.input_file_picture_uploaded.classList.remove('hidden')
					console.log('file.name picture ', file.name)
					this.$refs.input_file_picture_uploaded.innerHTML = file.name

					this.$refs.input_file_picture_container.classList.add('hidden')
				} else {
					this.$refs.input_file_picture_uploaded.classList.add('hidden')
					this.$refs.input_file_picture_container.classList.remove('hidden')
				}
			})
		},
		methods: {
			async handleSubmit(){
				let cv_uploaded_id = null
				let picture_uploaded_id = null
				const formData_cv = new FormData();					
				formData_cv.append("file", this.file_cv)
				
				if(this.file_cv.name) {
					await this.$axios.post('/api/resumes', formData_cv, {
    					headers: {
      						'Content-Type': 'multipart/form-data'
    					}
					})
					.then(function (response) {
						cv_uploaded_id = response.data['@id']
  					})

					this.$store.commit('registertalent/mutateInputFileCv', cv_uploaded_id)
				} else {
					this.$store.commit('registertalent/mutateInputFileCv', '')
				}

				const formData = new FormData();					
				formData.append("imageFile", this.file_picture)

				if(this.file_picture.name) {
					await this.$axios.post('/api/profile-pictures', formData, {
    					headers: {
      						'Content-Type': 'multipart/form-data'
    					}
					})
					.then(function (response) {
						picture_uploaded_id = response.data['@id']
  					})

					this.$store.commit('registertalent/mutateInputFilePicture', picture_uploaded_id)
				} else {
					this.$store.commit('registertalent/mutateInputFilePicture', '')
				}

				this.$router.push({path: `${this.currentLang}/register/talent/steps/4/`})
			},
			isFormSubmittable() {
				if(this.file_cv) {
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
			triggerUpload(ref, type) {
				console.log('this.upload_type :', this.upload_type)
				console.log('this.file_picture :', this.file_picture)
				console.log('this.file_cv :', this.file_cv)
				console.log('ref :', ref)

				if(this.file_cv && this.upload_type === 'cv' && ref === 'input_file_cv') {
					return;
				}

				if(this.file_picture && this.upload_type === 'picture' && ref === 'input_file_picture') {
					return;
				}

				this.upload_type = type
				this.upload_technic = 'click'

				console.log('this.upload_type :', this.upload_type)

				if(this.upload_type === 'cv') {
					this.$refs.input_file_cv.click()
				} else if(this.upload_type === 'picture') {
					this.$refs.input_file_picture.click()
				}				
			},
			onChange($event) {

				let size = ''
				let type = ''

				if(this.upload_type === 'cv') {
					if(this.upload_technic === 'click') {
						if(!this.$refs.input_file_cv.files[0]) {
							return
						}

						type = this.$refs.input_file_cv.files[0].type
						size = this.$refs.input_file_cv.files[0].size
					} else {
						if(!this.mutable_input_file_cv[0]) {
							return
						}

						type = this.mutable_input_file_cv[0].type
						size = this.mutable_input_file_cv[0].size
					}
				} else {
					if(this.upload_technic === 'click') {
						if(!this.$refs.input_file_picture.files[0]) {
							return
						}

						type = this.$refs.input_file_picture.files[0].type
						size = this.$refs.input_file_picture.files[0].size
					} else {
						if(!this.mutable_input_file_picture[0]) {
							return
						}

						type = this.mutable_input_file_picture[0].type
						size = this.mutable_input_file_picture[0].size
					}
				}

				if(type === 'image/jpeg' || type === 'image/png' || type === 'application/pdf') {
					if(size <= 10000000) {		
						if(this.upload_type === 'cv') {
							this.file_cv = this.upload_technic === 'click' ? this.$refs.input_file_cv.files[0] : this.mutable_input_file_cv[0] 
							this.$refs.input_file_cv_uploaded.classList.remove('hidden')
							this.$refs.input_file_cv_container.classList.add('hidden')
							this.$refs.input_file_cv_close.classList.add('active')
							this.$refs.input_file_cv_uploaded.innerHTML = this.file_cv.name
							this.$refs.input_file_cv_error.classList.remove('error')
						} else {
							this.file_picture = this.upload_technic === 'click' ? this.$refs.input_file_picture.files[0] : this.mutable_input_file_picture[0] 
							this.$refs.input_file_picture_uploaded.classList.remove('hidden')
							this.$refs.input_file_picture_container.classList.add('hidden')
							this.$refs.input_file_picture_close.classList.add('active')
							this.$refs.input_file_picture_uploaded.innerHTML = this.file_picture.name
							this.$refs.input_file_picture_error.classList.remove('error')
						}

						return;
					}
				}

				if(this.upload_type === 'cv') {
					this.$refs.input_file_cv_error.classList.add('error')
					this.$refs.input_file_cv_uploaded.classList.add('hidden')
					this.$refs.input_file_cv_container.classList.remove('hidden')
				} else {
					this.$refs.input_file_picture_error.classList.add('error')
					this.$refs.input_file_picture_uploaded.classList.add('hidden')
					this.$refs.input_file_picture_container.classList.remove('hidden')
				}
				
    		},
			onDragenter(ref) {
				console.log('onDragenter')
				this.$refs[`${ref}`].classList.add('active')
			},
			onDragleave(ref) {
				console.log('onDragleave')
				this.$refs[`${ref}`].classList.remove('active')
			},
			onDrop(e, ref, type) {
				console.log('onDrop')
				e.preventDefault();
				this.$refs[`${ref}`].classList.remove('active')				

				this.upload_type = type
				this.upload_technic = 'drop'

				if(type === 'cv') {
					this.mutable_input_file_cv = e.dataTransfer.files;
					this.onChange(e)
				} else {
					this.mutable_input_file_picture = e.dataTransfer.files;
					this.onChange(e)
				}				
			},
			onChangeInput(e) {
				this.onChange(e)
			},
			deleteFile(e, type) {
				e.preventDefault()

				if(type === 'cv') {
					setTimeout(() => {
						this.file_cv = ''
						this.$refs.input_file_cv_close.classList.remove('active')
						this.$refs.input_file_cv_container.classList.remove('hidden')
						this.$refs.input_file_cv_uploaded.classList.add('hidden')
						this.$refs.input_file_cv_uploaded.innerHTML = ''
					})
				} else {
					setTimeout(() => {
						this.file_picture = ''
						this.$refs.input_file_picture_close.classList.remove('active')
						this.$refs.input_file_picture_container.classList.remove('hidden')
						this.$refs.input_file_picture_uploaded.classList.add('hidden')
						this.$refs.input_file_picture_uploaded.innerHTML = ''
					})
				}
			}
		},
		watch: {
   			file_cv() {
				this.isFormSubmittable()
   			}
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


	.c-formregistertalent__upload__trigger {
			position: relative;
			margin-bottom: 0;
		.c-formregistertalent__upload__dropzone {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.c-formregistertalent__upload__delete {
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
	}

	.c-formregistertalent__error {
		color: red;
		opacity: 0;
		display: none;

		&.error {
			opacity: 1;
			display: block;
		}
	}
</style>
