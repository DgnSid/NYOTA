<!-----
*
Template
*
------>
<template>
   <section :class="['banner', uiClass]">
       <div class="banner__image">
           <utils-figure :image="image" :overlay="overlay"></utils-figure>
       </div>
       <div class="banner__content">
           <div class="container">
               <slot></slot>
           </div>
       </div>
   </section>
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
            },
            uiClass: {
                type: String
            },
        }
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .banner {
        position: relative;

        .banner__image {
            position: absolute;

            top: 0;
            right: 0;
            bottom: 0;
            left: 0;

            overflow: hidden;
        }

        .banner__content {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            min-height: 100vh;
        }

        //modifiers
        &.--small {

            .banner__content {
                min-height: auto;

                padding: 150px 0;
            }
        }
    }

</style>