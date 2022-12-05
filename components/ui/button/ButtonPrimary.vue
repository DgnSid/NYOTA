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
        padding: 20px 40px;

        font-weight: 600;

        border: solid 1px;

        cursor: pointer;

        transition: all 0.5s ease;

        &.--white {
            background-color: $white;
            color: $black;
            border-color: $white;

            &:hover {
                background-color: transparent;
                color: $white;
            }
        }
    }

</style>