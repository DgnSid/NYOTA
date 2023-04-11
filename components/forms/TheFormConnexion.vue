<template>
	<div class="c-formconnexion">
  		<div class="container">
  		  	<form @submit.prevent="userLogin">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-9">
						<label>{{$t('pageconnexion.label_type')}} <span>*</span></label>
  		  	  	  		<select v-model="login_type" type="text" :name="$t('pageconnexion.id_type')" required>
							<option v-for="(element, index) in $t('pageconnexion.option_type')" :key="index" :value="element.value">
								{{ element.name }}
							</option>
						</select>

  		  	  	  		<label>{{$t('pageconnexion.label_mail')}} <span>*</span></label>
  		  	  	  		<input v-model="login.username" type="text" :name="$t('pageconnexion.id_mail')" :class="{ active: isErrorLogin }" placeholder="" required />
						
						<label>{{$t('pageconnexion.label_password')}} <span>*</span></label>
  		  	  	  		<input v-model="login.password" type="password" :name="$t('pageconnexion.id_password')" :class="{ active: isErrorLogin }" placeholder="" required />

						<div>
							<nuxt-link class="c-formconnexion__link" to="/forgotten-password">{{$t('pageconnexion.label_forgottenpassword')}}</nuxt-link>
						</div>

						<div class="c-formconnexion__error" :class="{ active: isErrorLogin }">{{$t('pageconnexion.badlogin')}}</div>

						<button class="c-formconnexion__submit --bordered" type="submit">
							<span class="c-formconnexion__submit__text">{{$t('pageconnexion.label_submit')}}</span>
						</button>

						<div class="c-formconnexion__mandatory-text">{{$t('pageconnexion.mandatory')}}</div>

						<div class="c-formconnexion__register" @click="openPopup()" >
							{{$t('pageconnexion.noaccount_intro')}} <span>{{$t('pageconnexion.noaccount_span')}}</span>
						</div>
					</div>
  		  	  	</div>
  		  	</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { eventHub } from '@/plugins/eventhub'

  	export default {
      	name: 'theFormConnexion',
		data: function () {
			return {
                login: {
                    username: '',
                    password: '',
                },
				login_type: this.$route.query.type == "c" ? 'company' : 'talent',
                formErrors: false,
                formErrorsMessage: "",
                isLogout: false,
                isUpdated: false,
				isErrorLogin: false,
			}
		},
		head() {
			return {
				title: 'Connexion',
				meta: [
					{
						hid: 'description',
						name: 'description',
						content: 'Ma description personnalisée'
					}
				]
			}
		},
		beforeCreate: function() {
            let userStorage = this.$auth.$storage.getUniversal('user')

            if (userStorage) {
                this.$auth.setUser(userStorage)
            }

            if (this.$auth.user) {
                // this.$router.push('/')
            }
        },
		methods: {
			async userLogin() {
				console.log('efzegz2')
				try {
					let response = this.login_type == "talent" ? await this.$auth.loginWith('local_talent', { data: this.login }) : await this.$auth.loginWith('local_company', { data: this.login })

					let token = response.data.token

					// set token
                    this.$auth.strategy.token.set(token)

                    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

					// get user
					response = this.login_type == "talent" ? await axios.get(this.$auth.strategies.local_talent.options.endpoints.user.url) : await axios.get(this.$auth.strategies.local_company.options.endpoints.user.url)
 
                    let user = response.data
 
                    user.token = token
  
                    this.$auth.setUser(user)
  
                    this.$auth.$storage.setUniversal('user', user, true)

					this.$router.push(`${this.currentLang}/profile/${this.login_type}/${user.id}`)
				}
				catch (error) {
 			 	  	console.log('Login error:', error)
					this.isErrorLogin = true
 			 	}
            },
			openPopup() {
                eventHub.$emit('open-popup', true)
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
	.c-formconnexion {
		position: relative;
		padding-top: 48px;
		background-color: $white;
		overflow-x: hidden;

		.c-formconnexion__error {
			opacity: 0;
			display: none;
			font-size: 12px;

			color: red;
			margin-bottom: 20px;
			&.active {
				display: block;
				opacity: 1;
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
		}

		input[type="text"],
		input[type="password"] {
			border: 1px solid $grey;
			border-radius: 40px;
			height: 50px;
			width: 100%;
			margin-bottom: 32px;
			padding-left: 20px;

			&.active {
				border-color: red;
			}
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

			span {
				cursor: pointer;
				color: $orange;
				text-decoration: underline;
			}
		}
		
	}
</style>
