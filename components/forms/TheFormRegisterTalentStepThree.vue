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
							<h2 class="c-formregistertalent__upload__title">Dépose ton CV</h2>
							<div class="c-formregistertalent__upload__trigger" @click="triggerUpload('input_file_cv')">
								<div class="c-formregistertalent__upload__trigger__uploaded hidden" ref="input_file_cv_uploaded"></div>
								<div class="c-formregistertalent__upload__trigger__container" ref="input_file_cv_container">
									<icon-download class="c-formregistertalent__upload__trigger__icon" />
									<div class="c-formregistertalent__upload__trigger__text">Sélectionner ou glisser votre CV ici pour le remplacer</div>
									<div class="c-formregistertalent__upload__trigger__meta">PDF, JPG ou PNG - 10mo maximum</div>
								</div>
							</div>
							<input type="file"  accept=".pdf, .jpg, .jpeg, .png" hidden ref="input_file_cv" />
						</div>
					</div>
					<div class="c-formregistertalent__separator"></div>
					<div class="offset-lg-4 col-lg-8">
						<div class="c-formregistertalent__upload">
							<h2 class="c-formregistertalent__upload__title">Ajoute une photo de profil</h2>
							<div class="c-formregistertalent__upload__trigger" @click="triggerUpload('input_file_picture')">
								<div class="c-formregistertalent__upload__trigger__uploaded hidden" ref="input_file_picture_uploaded"></div>
								<div class="c-formregistertalent__upload__trigger__container" ref="input_file_picture_container">
									<icon-picture class="c-formregistertalent__upload__trigger__icon" />
									<div class="c-formregistertalent__upload__trigger__text">Sélectionner ou glisser votre photo de profil</div>
									<div class="c-formregistertalent__upload__trigger__meta">PDF, JPG ou PNG - 10mo maximum</div>
								</div>
							</div>
							<input type="file"  accept=".pdf, .jpg, .jpeg, .png" hidden ref="input_file_picture" />
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
			this.industry = this.$store.state.registertalent.inputFileCv

			this.$refs.input_file_cv.addEventListener('change', () => {
				const file = this.$refs.input_file_cv.files[0];			
				this.file_cv = file	

				if(file) {					
					this.$refs.input_file_cv_uploaded.classList.remove('hidden')
					this.$refs.input_file_cv_uploaded.append(file.name)

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
					this.$refs.input_file_picture_uploaded.append(file.name)

					this.$refs.input_file_picture_container.classList.add('hidden')
				} else {
					this.$refs.input_file_picture_uploaded.classList.add('hidden')
					this.$refs.input_file_picture_container.classList.remove('hidden')
				}
			})
		},
		methods: {
			handleSubmit(){
				this.$store.commit('registertalent/mutateInputIndustryWanted', this.industry)
				this.$router.push({path: '/register/talent/steps/4/'})
			},
			isFormSubmittable() {
				if(this.file_cv && this.file_picture) {
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			},
			triggerUpload(ref) {
				this.$refs[`${ref}`].click()
			}
		},
		watch: {
   			file_cv() {
				this.isFormSubmittable()
   			},
			file_picture() {
				this.isFormSubmittable()
   			},
		},
	}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
	@import '@/assets/sass/app/form/register.scss';
</style>
