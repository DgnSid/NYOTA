<template>
	<div class="c-formcontact">
  		<div class="container">
  		  	<form @submit.prevent="handleSubmit">
  		  	  	<div class="row">
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<label>{{$t('pageregistercompany.label_company_name')}}</label>
  		  	  	  		<input type="text" :name="$t('pageregistercompany.id_company_name')" placeholder="" />
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<label>{{$t('pageregistercompany.label_contact_name')}} <span>*</span></label>
  		  	  	  		<input type="text" :name="$t('pageregistercompany.label_contact_name')" placeholder="" required />
					</div>
					<div class="offset-lg-1 col-lg-9">
  		  	  	  		<label>{{$t('pageregistercompany.label_email')}} <span>*</span></label>
  		  	  	  		<input type="email" :name="$t('pageregistercompany.label_contact_name')" placeholder="" />
					</div>
					<div class="col-lg-9">
  		  	  	  		<label>{{$t('pageregistercompany.label_phone')}}</label>
  		  	  	  		<input type="text" :name="$t('pageregistercompany.label_contact_name')" placeholder="" required />
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<label>{{$t('pageregistercompany.label_logo')}}</label>
						<div>TODO</div>
					</div>
					<div class="offset-lg-1 col-lg-9">
  		  	  	  		<label>{{$t('pageregistercompany.label_password')}} <span>*</span></label>
  		  	  	  		<input type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" />
					</div>
					<div class="col-lg-9">
  		  	  	  		<label>{{$t('pageregistercompany.label_password_confirm')}} <span>*</span></label>
  		  	  	  		<input type="password" :name="$t('pageregistercompany.label_contact_name')" placeholder="" />
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<input id="rgpd" type="checkbox" name="name" placeholder="" required />
						<label for="rgpd" name="rgpd" class="--checkbox">{{$t('pageregistercompany.label_rgpd')}}</label>
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<input id="marketing" type="checkbox" name="name" placeholder="" required />
						<label for="marketing" name="marketing" class="--checkbox">{{$t('pageregistercompany.label_marketing')}}</label>
					</div>
					<div class="offset-lg-1 col-lg-18">
  		  	  	  		<button class="c-formcontact__submit --bordered" type="submit ">
							<span class="c-formcontact__submit__text">{{$t('pageregistercompany.submit_title')}}</span>
						</button>
					</div>
					<div class="offset-lg-1 col-lg-18">
						<div class="c-formcontact__mandatory-text">{{$t('pageregistercompany.mandatory')}}</div>
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
		async mounted() {
  			try {
  			  await this.$recaptcha.init()
  			} catch (e) {
  			  console.error(e);
  			}
		},
		methods: {
			async handleSubmit() {
				console.log('handleSubmit')

 			 	try {
 			 	  	const token = await this.$recaptcha.execute('login')
 			 	  	console.log('ReCaptcha token:', token)				
 			 	} catch (error) {
 			 	  	console.log('Login error:', error)
 			 	}
			}
		},
		beforeDestroy() {
  			this.$recaptcha.destroy()
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
		}

		.c-formcontact__mandatory-text {
			font-size: .75rem;
			color: $black;
			display: block;
			padding-bottom: 50px;
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
