<template>
    <article class="c-card-talent" :class="class_string" >
        <NuxtLink class="c-card-talent__link" :to="'/news/' + slug"></NuxtLink>
        <div class="c-card-talent__image">
            <ImageBordered 
                :url="image_url"
                :alt="image_alt"
                :class_string="image_style"
            />
        </div>
        <div class="c-card-talent__text">
            <div class="c-card-talent__text__date">
                {{date}}
            </div>
            <h2 class="c-card-talent__text__title">
                {{title}}
            </h2>            
            <div class="c-card-talent__text__arrow-container">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7074 6.29289C18.3168 5.90237 17.6837 5.90237 17.2931 6.29289C16.9026 6.68342 16.9026 7.31658 17.2931 7.70711L24.586 15H5.00024C4.44796 15 4.00024 15.4477 4.00024 16C4.00024 16.5523 4.44796 17 5.00024 17H24.586L17.2931 24.2929C16.9026 24.6834 16.9026 25.3166 17.2931 25.7071C17.6837 26.0976 18.3168 26.0976 18.7074 25.7071L27.7074 16.7071C27.8904 16.524 27.9877 16.2877 27.9991 16.048C27.9999 16.032 28.0002 16.016 28.0002 16M28.0002 15.9908C27.9979 15.7379 27.9003 15.4858 27.7074 15.2929L18.7074 6.29289" fill="white"/>
                </svg>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'cardNewsAlt',
        components: { ImageBordered },
        props: {
            firstname: String,
            lastname: String,
            job: String,
            school: String,
            yearsOfExperience: String,
            from: {
                type: String,
                default: Paris,
            },
            industry: Array,
            id: Number,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-talent {
        color: $black;
    }
</style>
