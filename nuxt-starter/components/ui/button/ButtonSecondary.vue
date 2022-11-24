<!-----
*
Template
*
------>
<template>
    <component
        :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
        :to="to"
        :href="href ? href : to ? to : null"
        @click="$emit('click')"
        :class="[ 'button', uiClass ]"
    >
        <slot></slot>
    </component>
</template>

<!-----
*
Script
*
------>
<script>
    export default {
        props: {
            to: {
                type: String,
                default: null,
            },
            href: {
                type: String,
                default: null,
            },
            uiClass: {
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

    .button {
        position: relative;

        font-weight: 600;

        cursor: pointer;

        background-color: transparent;

        &:after {
            content: "";

            position: absolute;

            left: 0;
            bottom: 0;

            width: 100%;
            height: 1px;

            transition: transform 0.3s ease-out;
            transform-origin: top left;
        }

        &:hover {
            
            &:after {
                transform: scaleX(0);
                transform-origin: top right;
            }
        }

        &.--white {
            color: $white;

            &:after {
                background-color: $white;
            }
        }
    }

</style>