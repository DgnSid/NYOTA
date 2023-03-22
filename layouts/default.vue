<!-----
*
Template
*
------>
<template>
    <div class="__layout--wrapper">

        <!-- The header -->
        <the-header/>

        <!-- The navigation -->
        <the-navigation/>

        <!-- Nuxt component -->
        <Nuxt />

        <the-footer />
    </div>
</template>

<script>	
  	export default {
        head() {
            return {
                htmlAttrs: {
                    lang: this.$i18n.locale
                }
            }
        },
		beforeCreate: function() {
            if(!this.$auth.loggedIn) {
                this.$auth.$storage.removeUniversal('user')
            }
        },
	}
</script>

<!-----
*
Style
*
------>
<style lang="scss" scoped>
	
</style>


