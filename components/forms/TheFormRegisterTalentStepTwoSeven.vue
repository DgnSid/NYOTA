<template>
	<div class="c-formregistertalent">
  		<div class="container">
  		  	  	<div class="row">
					<div class="offset-lg-4 col-lg-16">
						<h2 class="c-formregistertalent__title">
							{{ title }}
                            <sup>{{step_current_specific}}/{{step_current_total}}</sup>
                        </h2>
						<div class="c-formregistertalent__field">
                        	<label class="--question">{{ $t('registerform.steps.two.seven.label_question') }}</label>

							<div class="c-formregistertalent__field__checkboxlist --margin-bottom" role="radiogroup">
								<div v-for="(element, index) in langs_featured" :key="element.index" class="c-formregistertalent__field__checkboxelement">
									<input type="checkbox" :id="index" :name="element.name" :value="element.value" v-model="langs_featured_array" role="radio" aria-checked="false"  :aria-labelledby="'label-' + index">
									<label :id="'label-'+ index" :for="index" tabindex="0">{{element.name}}</label>
								</div>
							</div>

							<multiselect v-model="langs" track-by="name" label="name" :multiple="true" :options="languages" :searchable="true" :close-on-select="true" :show-labels="false" :placeholder="$t('registerform.steps.two.seven.select_placeholder')" :internal-search="true">
								<template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong></template>
							</multiselect>
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
	import ShapeEllipse from '@/components/ui/ShapeEllipse'
	import Multiselect from 'vue-multiselect'

  	
	export default {
      	name: 'FormRegisterTalent',
		components: { ShapeEllipse, Multiselect},
		data: () => {
			return {
				langs: '',
				langs_featured_array: [],
				options: ['France', 'Algérie', 'Maroc', 'Tunisie', 'Mali', 'Sénégal'],
				is_form_submittable: true,
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
			languages: Array,
			langs_featured: Array,
        },
		mounted() {
			this.langs = this.$store.state.registertalent.selectLangs
			this.langs_featured_array = this.$store.state.registertalent.selectLangsFeatured
		},
		methods: {
			handleSubmit(){
				this.$store.commit('registertalent/mutateSelectLangsFeatured', this.langs_featured_array)
				this.$store.commit('registertalent/mutateSelectLangs', this.langs)
				this.$router.push({path: `${this.currentLang}/register/talent/steps/2/8`})
			},
			isFormSubmittable() {
				if(this.langs_featured_array.length >= 1 || this.langs ) {
					this.$refs.submit.classList.remove('disabled')
					this.is_form_submittable = true
				} else {
					this.$refs.submit.classList.add('disabled')
					this.is_form_submittable = false
				}
			}
		},
		watch: {
			langs_featured_array() {
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

<style src="@/node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
	@import '@/assets/sass/app/form/register.scss';
	.multiselect__input {
		border: none !important;
	}

	.c-formregistertalent__field__checkboxlist {
		&.--margin-bottom {
			margin-bottom: 20px;
		}
	}
</style>
