<!-----
*
Template
*
------>
<template>
   <article :class="['card', uiClass]">
       <div class="card__image">
           <utils-figure :image="image" :overlay="true"></utils-figure>
       </div>
       <div class="card__content">
           <div class="card__content-date">{{ date }}</div>
           <h2 class="mb-sm title-sm fw-900">{{ title }}</h2>
           <div class="cms">{{ text }}</div>
           <div class="mt-md">
               <ui-button-secondary uiClass="--white" :to="url">
                   Read more
               </ui-button-secondary>
           </div>
       </div>
   </article>
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
            date: {
                type: String
            },
            title: {
                type: String
            },
            text: {
                type: String
            },
            uiClass: {
                type: String
            },
            url: {
                type: String
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

    .card {
        margin-bottom: 30px;

        .card__image {
            position: relative;

            &::after {
                content: "";

                display: table;

                padding-bottom: 100%;
            }
        }

        .card__content {
            padding-top: 30px;

            .card__content-date {
                font-size: 12px;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
        }
    }

</style>