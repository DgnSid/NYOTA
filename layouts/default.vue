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
		beforeCreate: function() {
            if(!this.$auth.loggedIn) {
                this.$auth.$storage.removeUniversal('user')
            }
        },
        async fetch() {
            // const configurationDataApi = await this.$axios.$get(`/api/configurations`)
            // .then((res) => {
            //   console.log(res)
            //   return res
            // })
            // .catch((err) => {
            //   console.error(err)
            // });
// 
            // return {configurationDataApi}
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


