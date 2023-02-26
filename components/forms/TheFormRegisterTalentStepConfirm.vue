<template>
	<div class="c-formregistertalentconfirm">
  		<div class="container">
				<confirm-badge class="c-formregistertalentconfirm__icon" />
				<h2 class="c-formregistertalentconfirm__title" >{{ title }}</h2>
				<div class="c-formregistertalentconfirm__text">{{ text }}</div>

				<div class="c-formregistertalentconfirm__cta-container">
            		<cta
            		    :url="cta_url"
            		    :title="cta_title"
            		    class="--bordered"
            		/>
       			</div>

			<shape-ellipse class="c-formregistertalentconfirm__ellipse" :size="210" />
		</div>
	</div>
</template>

<script>
	import ShapeEllipse from '@/components/ui/ShapeEllipse';
	import ConfirmBadge from '@/components/svg/ConfirmBadge';
	import Cta from '@/components/Cta';
  	
	export default {
      	name: 'FormRegisterTalentConfirm',
		components: { ShapeEllipse, ConfirmBadge, Cta},
        props: {
   			title: String,
			text: String,
			cta_title: String,
			cta_url: String
        },
	}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
	.c-formregistertalentconfirm {
		position: relative;
		min-height: calc(100vh - 380px - 215px);
		padding-top: 40px;

		.c-formregistertalentconfirm__icon {
			margin: 0 auto 30px auto;
			display: block;			
		}
		.c-formregistertalentconfirm__title {
			color: $orange;
			text-align: center;
			font-family: $font-family-default;
			margin-bottom: 30px;
			font-weight: 200;
			font-size: 2.5rem;
		}

		.c-formregistertalentconfirm__text {
			color: $black;
			text-align: center;
			max-width: 600px;
			display: block;
			margin: 0 auto 40px auto;
		}

		.c-formregistertalentconfirm__cta-container {
			display: table;
			margin: 0 auto;
		}

		.c-formregistertalentconfirm__ellipse {
			position: absolute;
        	right: -100px;
        	bottom: 0;
		}
	}
</style>
