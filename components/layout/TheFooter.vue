<!-----
*
Template
*
------>
<template>
    <div class="c-footer">       
        
    </div>
</template>

<!-----
*
Script
*
------>
<script>
    export default {
        
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-footer {
        background: $white;

        .c-footer__top {
            height: 200px;
            background-color: red;
        } 

        .c-footer__bottom {
            display: flex;
            align-items: center;
            height: 66px;
            border-top: 1px solid $grey;
        }
    }
</style>