<!-----
*
Template
*
------>
<template>
    <div class="c-ellipse" :style="{ height: [size+'px'], width: [size+'px'], backgroundColor: [color] }"></div>
</template>

<!-----
*
Script
*
------>
<script>
    export default {
        name: 'ShapeEllipse',
        props: {
            size: {
                type: Number,
                default: 150,
            },
            color: {
                type: String,
                default: '#1D67F1',
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
    .c-ellipse {
        border-radius: 100%;
    }

</style>