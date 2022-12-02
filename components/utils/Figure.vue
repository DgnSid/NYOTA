<!-----
*
Template
*
------>
<template>
   <figure class="figure">
       <div class="figure__inner" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
       <div class="figure__overlay" v-if="overlay"></div>
   </figure>
</template>

<!-----
*
Script
*
------>
<script>
    export default {
        props: {
            image: {
                type: String
            },
            overlay: {
                type: Boolean
            }
        }
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .figure {
        position: absolute;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        overflow: hidden;

        white-space: nowrap;

        .figure__inner {
            position: absolute;

            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .figure__overlay {
            position: absolute;

            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            background-color: rgba(0,0,0,0.3);
        }
    }

</style>