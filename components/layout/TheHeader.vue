<!-----
*
Template
*
------>
<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <the-burger/>
            </div>
        </div>
    </header>
</template>

<!-----
*
Script
*
------>
<script>
    export default {};
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .header {
        position: absolute;

        top: 0;
        left: 0;

        z-index: 9;

        width: 100%;

        padding: 15px 0;
    }

    .header__inner {
        display: flex;
        justify-content: flex-end;
    }

</style>